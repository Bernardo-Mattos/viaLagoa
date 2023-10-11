import React from "react";
import "./styles.css";
import { useState } from "react";

function Reservas() {
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const [pessoas, setPessoas] = useState("");
  const [nome, setNome] = useState("");
  const [tel, setTel] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("qt Pessoas: ", pessoas);
    console.log("Em nome de: ", nome);
    console.log("Tel para contato: ", tel);
    setPessoas("");
    setNome("");
    setTel("");
    alert('Reserva realizada com sucesso !')
  };

  return (
    <>
      <h1>Faça rua reserva</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input
          placeholder="Reserva para quantas pessoas ?"
          className="input"
          type="number"
          value={pessoas}
          onChange={(e) => setPessoas(e.target.value)}
        />
        <input
          placeholder="Reserva em nome de..."
          className="input"
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <input
          placeholder="Número para contato..."
          className="input"
          type="number"
          value={tel}
          onChange={(e) => setTel(e.target.value)}
        />
        <button type="submit">Garantir reserva</button>
      </form>
    </>
  );
}

export default Reservas;
