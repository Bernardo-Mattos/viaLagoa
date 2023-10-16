import React from "react";
import './styles.css';
import logo from '../../assets/logobrancaa.png';

export default function Header() {
  return (
    <div className="containerHeader">
      <img className="logoImg" src={logo} alt="Logo da viaLagoa" />
      <div className="nav">
        <a href="#">Inicio</a>
        <a href="#">Sobre nós</a>
        <a href="#">História</a>
        <a href="#">Menu</a>
        <a href="#">Reservas</a>
        <a href="https://www.google.com/search?q=restaurante++floripa+&sca_esv=573777804&rlz=1C1GCEA_enBR1043BR1043&sxsrf=AM9HkKndsLGRf-VETIrWRYtfqVlDoeGWhA%3A1697462920254&ei=iDotZeiWD8jY5OUP86mCuAM&ved=0ahUKEwjo-oWT1vqBAxVILLkGHfOUADcQ4dUDCBA&uact=5&oq=restaurante++floripa+&gs_lp=Egxnd3Mtd2l6LXNlcnAiFXJlc3RhdXJhbnRlICBmbG9yaXBhIDIIEAAYywEYgAQyCBAAGMsBGIAEMggQABjLARiABDIIEAAYywEYgAQyCBAAGMsBGIAEMggQABjLARiABDIIEAAYywEYgAQyBhAAGBYYHjIGEAAYFhgeMgYQABgWGB5I1VRQ1gZY5URwBngBkAEAmAHIAaABxxmqAQYwLjIwLjG4AQPIAQD4AQGoAgrCAgoQABhHGNYEGLADwgIKEAAYigUYsAMYQ8ICBxAjGOoCGCfCAgcQIxiKBRgnwgINEC4YigUYxwEY0QMYQ8ICBRAuGIAEwgIFEAAYgATCAgcQABiKBRhDwgIEECMYJ8ICChAAGIoFGMkDGEPCAggQABiKBRiSA8ICCBAuGMsBGIAEwgIOEC4YywEYgAQYxwEYrwHCAgcQIxixAhgn4gMEGAAgQYgGAZAGCQ&sclient=gws-wiz-serp#rlimm=8843604423608663753">Contate-nos</a>
      </div>
    </div>
  );
}
