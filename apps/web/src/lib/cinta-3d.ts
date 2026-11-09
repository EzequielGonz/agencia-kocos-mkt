/*
 * La cinta del logo en 3D (Three.js): una banda plegada, naranja y ámbar, que ondula y
 * se tuerce detrás de la escena del sistema. Se reconstruye en cada cuadro siguiendo una
 * curva que cambia con el tiempo, el puntero y el desplazamiento. Sin modelos ni texturas.
 */
import type { Vector3 } from 'three';

type Three = typeof import('three');
type Entorno = typeof import('three/examples/jsm/environments/RoomEnvironment.js').RoomEnvironment;

export function crearCinta(THREE: Three, RoomEnvironment: Entorno, canvas: HTMLCanvasElement, opciones: { segmentos?: number } = {}) {
  const N = opciones.segmentos ?? 260;
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'low-power' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
  renderer.toneMapping = THREE.NeutralToneMapping; renderer.outputColorSpace = THREE.SRGBColorSpace;
  const escena = new THREE.Scene();
  const pmrem = new THREE.PMREMGenerator(renderer);
  const entorno = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  escena.environment = entorno;
  const camara = new THREE.PerspectiveCamera(34, 1, 0.1, 60); camara.position.set(0, 0, 11);

  // Tira de triángulos: dos vértices por segmento (un borde y el otro de la cinta).
  const pos = new Float32Array((N + 1) * 2 * 3);
  const col = new Float32Array((N + 1) * 2 * 3);
  const idx: number[] = [];
  const a = new THREE.Color('#ff4f1a'), b = new THREE.Color('#ff8a2a'), c = new THREE.Color('#ffc247');
  for (let i = 0; i <= N; i++) {
    const t = i / N, k = t < 0.55 ? t / 0.55 : (t - 0.55) / 0.45;
    const color = t < 0.55 ? a.clone().lerp(b, k) : b.clone().lerp(c, k);
    for (let s = 0; s < 2; s++) col.set([color.r, color.g, color.b], (i * 2 + s) * 3);
    if (i < N) { const v = i * 2; idx.push(v, v + 1, v + 2, v + 1, v + 3, v + 2); }
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
  geo.setIndex(idx);
  const mat = new THREE.MeshPhysicalMaterial({ vertexColors: true, roughness: 0.3, metalness: 0.05, clearcoat: 0.6, clearcoatRoughness: 0.25, envMapIntensity: 0.55, side: THREE.DoubleSide });
  const cinta = new THREE.Mesh(geo, mat);
  escena.add(cinta);
  const luz = new THREE.DirectionalLight(0xffffff, 2.2); luz.position.set(-3, 4, 6); escena.add(luz);

  const P = new THREE.Vector3(), Q = new THREE.Vector3(), T = new THREE.Vector3(), Nn = new THREE.Vector3(), B = new THREE.Vector3(), D = new THREE.Vector3();
  const arriba = new THREE.Vector3(0, 0, 1);
  // Recorrido en coordenadas de pantalla (-1 a 1): entra abajo a la izquierda, pasa por
  // debajo de los botones y de la escena, sube por el borde derecho y sale arriba.
  // Así no cruza nunca el título.
  const guiaAncha = [[-1.15, -0.72], [-0.5, -0.9], [0.08, -0.62], [0.58, -0.86], [0.95, -0.2], [0.8, 0.55], [1.2, 1.05]];
  // En pantallas verticales el texto ocupa la mitad de arriba: la cinta va por la de abajo.
  const guiaAlta = [[-1.3, -0.25], [-0.55, -0.48], [0.15, -0.3], [0.75, -0.62], [0.4, -0.9], [-0.5, -0.82], [-1.3, -1.05]];
  let guia = guiaAncha;
  const mitad = { w: 1, h: 1 };
  const puntos = guia.map(() => new THREE.Vector3());
  const recorrido = new THREE.CatmullRomCurve3(puntos, false, 'centripetal');
  const curva = (t: number, _f: number, out: Vector3) => recorrido.getPoint(Math.min(1, Math.max(0, t)), out);
  const moverGuia = (f: number) => {
    guia.forEach(([x, y], i) => puntos[i].set(
      x * mitad.w + Math.sin(f * 0.9 + i * 1.7) * 0.25,
      y * mitad.h + Math.cos(f * 0.7 + i * 2.3) * 0.22,
      Math.sin(f * 0.6 + i) * 1.2 - 0.5,
    ));
    recorrido.updateArcLengths();
  };
  const construir = (f: number, ancho: number) => {
    moverGuia(f);
    for (let i = 0; i <= N; i++) {
      const t = i / N;
      curva(t, f, P); curva(Math.min(1, t + 0.002), f, Q);
      T.subVectors(Q, P).normalize();
      if (t >= 0.999) { curva(t - 0.002, f, Q); T.subVectors(P, Q).normalize(); }
      Nn.crossVectors(T, arriba).normalize(); B.crossVectors(T, Nn).normalize();
      // la torsión va y viene, como el pliegue del logo
      const giro = Math.sin(t * Math.PI * 2.2 + f * 0.9) * 1.3 + t * 1.6;
      D.copy(Nn).multiplyScalar(Math.cos(giro)).addScaledVector(B, Math.sin(giro));
      const w = ancho * (0.55 + 0.45 * Math.sin(Math.PI * Math.min(1, t * 1.15)));
      pos.set([P.x + D.x * w, P.y + D.y * w, P.z + D.z * w], i * 6);
      pos.set([P.x - D.x * w, P.y - D.y * w, P.z - D.z * w], i * 6 + 3);
    }
    geo.attributes.position.needsUpdate = true;
    geo.computeVertexNormals();
  };

  const puntero = { x: 0, y: 0 };
  const mover = (e: PointerEvent) => { if (e.pointerType !== 'mouse') return; puntero.x = e.clientX / window.innerWidth - 0.5; puntero.y = e.clientY / window.innerHeight - 0.5; };
  window.addEventListener('pointermove', mover, { passive: true });
  const ajustar = () => {
    const w = canvas.clientWidth, h = canvas.clientHeight; if (!w || !h) return;
    renderer.setSize(w, h, false); camara.aspect = w / h; camara.updateProjectionMatrix();
    mitad.h = Math.tan((camara.fov * Math.PI) / 360) * camara.position.z; mitad.w = mitad.h * camara.aspect;
    guia = camara.aspect < 0.9 ? guiaAlta : guiaAncha;
  };
  ajustar(); const ro = new ResizeObserver(ajustar); ro.observe(canvas);
  let visible = true; const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; }); io.observe(canvas);

  const reloj = new THREE.Clock(); let cuadro = 0;
  const animar = () => {
    cuadro = requestAnimationFrame(animar);
    if (!visible || document.hidden) return;
    const t = reloj.getElapsedTime();
    const avance = Math.min(1, window.scrollY / window.innerHeight);
    construir(t * 0.4 + avance * 2.5, Math.min(0.42, Math.max(0.2, mitad.w * 0.07)));
    cinta.rotation.y += ((puntero.x * 0.12) - cinta.rotation.y) * 0.05;
    cinta.rotation.x += ((puntero.y * 0.1) - cinta.rotation.x) * 0.05;
    renderer.render(escena, camara);
  };
  animar();
  return {
    destruir() {
      cancelAnimationFrame(cuadro); ro.disconnect(); io.disconnect(); window.removeEventListener('pointermove', mover);
      geo.dispose(); mat.dispose(); entorno.dispose(); pmrem.dispose(); renderer.dispose();
    },
  };
}
