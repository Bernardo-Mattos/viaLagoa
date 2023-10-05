import React from "react";
import Card from "./components/card";
import './styles.css'

export default function MainP() {
  return (
    <div className="containerPratosPrin">
      <Card
        image={
          "https://s2.glbimg.com/KhR2MlMX_KJFDe6QWNzBSiJZi2Q=/620x455/e.glbimg.com/og/ed/f/original/2018/08/10/ostras.jpg"
        }
        preco="R$40,00 Ostra gratinada"
        desc="Ostras frescas cobertas com queijo derretido, ervas e migalhas de pão crocante, assadas até dourar. Uma experiência sofisticada que combina o sabor marinho das ostras com a suavidade do queijo e a crocância das migalhas de pão. Perfeito para os amantes de frutos do mar."
      />
      <Card
        image={
          "https://img.freepik.com/fotos-premium/file-mignon-com-molho-de-vinho-tinto_538646-8000.jpg"
        }
        preco="R$50,00 File Mingon"
        desc=" Um corte nobre de carne bovina, preparado com perfeição, servido com um molho sofisticado à base de vinho tinto, acompanhado de legumes frescos e purê de batata trufado"
      />
      <Card
        image={
          "https://www.receitas-sem-fronteiras.com/media/receita-do-dia-salmao-grelhado-ao-molho-de-maracuja_crop.jpg/rh/salmao-grelhado-ao-molho-de-maracuja.jpg"
        }
        preco="R$92,00 Salmão Grelhado"
        desc="Salmão fresco grelhado com um molho delicado de champagne, guarnecido com aspargos crocantes e risoto de limão."
      />
    </div>
  );
}
