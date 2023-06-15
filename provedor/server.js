const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/converter", (req, res) => {
  const pedido = req.body;

  console.log(pedido);

  res.status(200).json({ message: "Pedido recebido com sucesso!" });
});

app.listen(8000, () => {
  console.log("Servidor backend está em execução na porta 8000");
});
