import React from "react";
import Card from "../principais/components/card";
import "./styles.css";

export default function Bebidas() {
  return (
    <div className="containerBebidas">
      <Card
        image={
          "https://png.pngtree.com/element_origin_min_pic/16/09/15/0657d9c9685c1f7.jpg"
        }
        preco="R$5,00 Agua sem gas"
      />
      <Card
        image={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTroKIQ9_kxgSVP9SabVbiIWqrsz6A2uChU2g&usqp=CAU"
        }
        preco="R$7,00 Agua com gas"
      />
      <Card
        image={"https://apbebidas.agilecdn.com.br/1171.jpg"}
        preco="R$7,00 Refrigerante lata"
      />
    </div>
  );
}
