import React from "react";
import "./styles.css";
import rest from '../../../../assets/imagem.png'

export default function Sobre() {
  return (
    <div>
      <h1>Sobre nós</h1>
      <p>
        Bem-vindo ao viaLagoa, o seu refúgio gastronômico à beira da lagoa!
        Desde a nossa inauguração, temos o prazer de servir experiências
        culinárias únicas e memoráveis, em um ambiente que combina elegância e
        tranquilidade
      </p>
      <h1>Ambiente Acolhedor</h1>
      <p>
        No viaLagoa, acreditamos que a experiência
        gastronômica vai além da comida. Nosso ambiente é um reflexo da beleza
        natural que nos rodeia. Com vista para a serena lagoa e um ambiente
        acolhedor, proporcionamos um refúgio tranquilo onde você pode relaxar,
        saborear e desfrutar da sua refeição com amigos e familiares.
      </p>
      <img src={rest} alt="restaurante" />
    </div>
  );
}
