import React, { useState } from "react";
import Header from "../../components/header";
import Main from "../../components/main";
import MainP from "../../components/principais";
import Entradas from "../../components/Entradas";
import Vinhos from "../../components/Vinhos";
import Bebidas from "../../components/Bebidas";
import Famosos from "../../components/Famosos";
import Reservas from "../../components/Reservas";
import "./styles.css";

import Modal from "react-modal";

export default function IndexPage() {
  const [modalVisible, setModalVisible] = useState(false);

  // Função para abrir a modal
  const openModal = () => {
    setModalVisible(true);
  };

  // Função para fechar a modal
  const closeModal = () => {
    setModalVisible(false);
  };

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
        <div className="reserva">
          <button onClick={openModal}>
            <span class="span-mother">
              <span>R</span>
              <span>e</span>
              <span>s</span>
              <span>e</span>
              <span>r</span>
              <span>v</span>
              <span>e</span>
            </span>
            <span class="span-mother2">
              <span>A</span>
              <span>g</span>
              <span>o</span>
              <span>r</span>
              <span>a</span>
            </span>
          </button>
          <Modal isOpen={modalVisible} onRequestClose={closeModal}>
            <Reservas />
            <button onClick={closeModal}>Fechar</button>
          </Modal>
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
              "https://www.psg.fr/media/181879/_-julienscussel_20-02-18_0131.jpg?anchor=center&mode=crop&width=1200&height=675&quality=75"
            }
            nome={"Neymar Jr"}
          />
        </div>
      </main>
    </div>
  );
}
