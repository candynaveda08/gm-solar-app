const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

let leads = [];

app.post("/api/leads", (req, res) => {
  const newLead = req.body;
  leads.push(newLead);

  console.log("Nuevo cliente:", newLead);

  res.json({
    message: "Lead guardado correctamente",
  });
});

app.get("/api/leads", (req, res) => {
  res.json(leads);
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});