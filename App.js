import React, { useState } from "react";
import axios from "axios";

function App() {
  const [produto, setProduto] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [cliente, setCliente] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const pedido = { produto, quantidade, cliente };

    try {
      await axios.post("http://localhost:8000/converter", pedido);
      setProduto("");
      setQuantidade("");
      setCliente("");
      setMensagem("Pedido enviado com sucesso!");
    } catch (error) {
      console.error(error);
      setMensagem("Erro ao enviar pedido. Tente novamente.");
    }
  };

  return (
    <div>
      <h1>PixelShop - Pedido</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Produto:</label>
          <input
            type="text"
            value={produto}
            onChange={(e) => setProduto(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Quantidade:</label>
          <input
            type="number"
            value={quantidade}
            onChange={(e) => setQuantidade(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Cliente:</label>
          <input
            type="text"
            value={cliente}
            onChange={(e) => setCliente(e.target.value)}
            required
          />
        </div>
        <button type="submit">Enviar Pedido</button>
      </form>
      {mensagem && <p>{mensagem}</p>}
    </div>
  );
}

export default App;
