/// <reference path="../pb_data/types.d.ts" />

migrate((app) => {
  const collection = new Collection({
    type: "base",
    name: "inquiries",
    listRule: null,
    viewRule: null,
    createRule: "",
    updateRule: null,
    deleteRule: null,
    fields: [
      { name: "full_name", type: "text", required: true, max: 160 },
      { name: "whatsapp", type: "text", required: true, max: 60 },
      { name: "email", type: "email", required: true },
      { name: "business", type: "text", required: true, max: 160 },
      { name: "industry", type: "text", max: 120 },
      { name: "instagram", type: "text", max: 200 },
      { name: "need", type: "select", required: true, maxSelect: 1, values: ["Página web", "Redes sociales", "Web + redes", "Proyecto personalizado"] },
      { name: "budget", type: "text", max: 100 },
      { name: "message", type: "text", required: true, max: 3000 },
      { name: "created", type: "autodate", onCreate: true, onUpdate: false },
      { name: "updated", type: "autodate", onCreate: true, onUpdate: true },
    ],
  });
  app.save(collection);
}, (app) => {
  app.delete(app.findCollectionByNameOrId("inquiries"));
});
