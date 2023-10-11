import React from "react";
import Card from "../principais/components/card";
import './styles.css'

export default function Entradas() {
  return (
    <div className="containerEntradas">
      <Card
        image={
          "https://vejario.abril.com.br/wp-content/uploads/2016/11/955_vieiras_bazzar_3701_0025_alta_credtomasrangel-corte.jpeg?quality=70&strip=info&w=686&h=504&crop=1"
        }
        preco="R$14,00 Ceviche de Vieiras com Abacate"
        desc=" Vieiras frescas marinadas em suco cítrico, servidas com abacate cremoso, coentro e chips de tortilha crocantes."
      />
      <Card
        image={
          "https://img.cybercook.com.br/receitas/510/tartar-de-salmao.jpeg"
        }
        preco="R$35,00 Tartare de Salmão"
        desc=" Salmão cru picado finamente, temperado com cebola roxa, alcaparras, e servido com um ovo de codorna por cima."
      />
      <Card
        image={
          "https://cdn.casaeculinaria.com/wp-content/uploads/2023/05/04093811/Ovos-Benedict.webp"
        }
        preco="R$30,00 Ovos Benedict"
        desc="Um prato clássico de brunch, com ovos pochê sobre muffins ingleses, presunto ou salmão defumado, cobertos com molho hollandaise."
      />
    </div>
  );
}
