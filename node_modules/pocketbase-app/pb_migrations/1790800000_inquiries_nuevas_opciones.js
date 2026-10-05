/// <reference path="../pb_data/types.d.ts" />

// Formulario de las páginas SEO:
//  - suma opciones a "¿Qué necesitás?" (e-commerce, automatización/IA, software a medida)
//  - agrega "origen": la página desde la que llegó cada consulta.
const NUEVAS = ["E-commerce", "Automatización o IA", "Sistema o software a medida"];

migrate(
  (app) => {
    const collection = app.findCollectionByNameOrId("inquiries");
    const need = collection.fields.getByName("need");
    for (const value of NUEVAS) {
      if (!need.values.includes(value)) need.values.push(value);
    }
    if (!collection.fields.getByName("origen")) {
      collection.fields.add(new TextField({ name: "origen", required: false, max: 300 }));
    }
    app.save(collection);
  },
  (app) => {
    const collection = app.findCollectionByNameOrId("inquiries");
    const need = collection.fields.getByName("need");
    need.values = need.values.filter((value) => !NUEVAS.includes(value));
    if (collection.fields.getByName("origen")) collection.fields.removeByName("origen");
    app.save(collection);
  },
);
