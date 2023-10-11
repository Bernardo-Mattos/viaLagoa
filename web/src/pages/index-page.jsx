import React from "react";
import "./styles.css";
import Header from "../components/header";
import Main from "../components/main";
import MainP from "../components/principais";
import Entradas from "../components/Entradas";
import Vinhos from "../components/Vinhos";
import Bebidas from "../components/Bebidas";
import Famosos from "../components/Famosos";

export default function IndexPage() {
  return (
    <div className="containerIndexPage">
      <Header />
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
          <Vinhos />
        </div>
        <div className="bebidas">
          <h1>Bebidas</h1>
          <Bebidas />
        </div>
        <div className="famosos">
          <Famosos
            image={
              "https://f.i.uol.com.br/fotografia/2022/03/05/16465202106223e792499ca_1646520210_3x2_md.jpg"
            }
            nome={"Érick Jacquin"}
          />
          <Famosos
            image={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiZ3NKAGV2f_aOdE8ZaiaoZr_J6HTpId8srA&usqp=CAU"
            }
            nome={"Neymar Jr"}
          />
        </div>
      </main>
    </div>
  );
}
