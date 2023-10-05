import React from 'react'
import Card from '../principais/components/card'
import './styles.css'

export default function Vinhos() {
  return (
    <div className='containerVinhos'>
      <Card
        image={
          "https://www.casadabebida.com.br/img/products/3-vinhos-pera-manca-tinto-750-ml-caixa-de-madeira_1_600.jpg"
        }
        preco="R$629,00 Vinho Branco Pera Manca"
        desc="O vinho branco Pêra Manca é uma prestigiosa criação do Alentejo, Portugal, conhecida por sua elegância e qualidade. Possui aromas cítricos, notas florais e sabor suave, sendo versátil para acompanhar diversos pratos, como frutos do mar e aves."
      />
      <Card
        image={
          "https://images.tcdn.com.br/img/img_prod/722924/vinho_catena_malbec_750ml_221_1_fa1ff32aa256831db3fcfc11ac57e650.jpg"
        }
        preco="R$881,62,00 Vinho tinto Catena Zapata"
        desc="O Catena Zapata é um prestigiado vinho argentino, famoso pelo Malbec de alta qualidade produzido pela Bodega Catena Zapata. Apresenta cor roxa intensa, aromas de frutas vermelhas e escuras, taninos suaves e um final longo."
      />
      <Card
        image={
          "https://m.media-amazon.com/images/I/71vKp9cRw7L.jpg"
        }
        preco="R$699,00 Espumante Champagne Moet"
        desc="O Champagne Moët é um renomado espumante francês da região de Champagne, produzido pela Maison Moët & Chandon, conhecido por sua qualidade, elegância e sabor refinado, sendo uma escolha icônica para celebrações globais."
      />
    </div>
  )
} 
