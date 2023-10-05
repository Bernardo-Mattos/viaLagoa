import React from "react";
import "./App.css";
import Header from "./components/header";
import Main from "./components/main";
import MainP from "./components/principais";
import Entradas from "./components/Entradas";
import Vinhos from "./components/Vinhos";

export default function App() {
  return (
    <div className="container">
      <Header/>
      <main>
        <Main />
        <div className="pratosPrincipais">
        <h1>Pratos Principais</h1>
        <MainP />
      </div>
      <div className="entradas">
        <h1>Entradas</h1>
        <Entradas />
      </div>
      <div className="vinhos">
        <h1>Vinhos</h1>
        <Vinhos/>
      </div>
      </main>
      
    </div>
  );
}
