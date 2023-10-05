import React from 'react'
import Card from '../principais/components/card'
import './styles.css'

export default function Saladas() {
  return (
    <div className='containerSaladas'>
      <Card
      image={'https://img.delicious.com.au/_k0288C3/del/2021/09/chicken-club-salad-158013-1.jpg'}
      preco="R$55,00 Chicken club salad"
      desc="A Chicken Club Salad é uma salada que combina ingredientes como frango grelhado, bacon, alface, tomate, queijo cheddar, ovos e opcionalmente abacate, croutons e molho. É uma refeição equilibrada e saborosa, ideal para quem procura uma salada completa e satisfatória."
      />
      <Card
      image={'https://food-images.files.bbci.co.uk/food/recipes/easy_caesar_salad_64317_16x9.jpg'}
      preco="R$25,00 Caesar Salad"
      desc="A Caesar Salad é uma clássica salada que consiste em alface romana, croutons, queijo parmesão, molho Caesar e, muitas vezes, frango grelhado. É uma salada refrescante e saborosa, conhecida pelo seu molho cremoso e pelos ingredientes crocantes."
      />
      <Card
      image={'https://media.istockphoto.com/id/500119141/photo/healthy-hearty-cobb-salad.jpg?s=612x612&w=0&k=20&c=28Q_RKSRBvlrJD8XwINIc-vmMkQguq12o6QkWWscjA8='}
      preco="R$20,00 Cobb Salad"
      desc="A Chicken Club Salad é uma salada que combina ingredientes como frango grelhado, bacon, alface, tomate, queijo cheddar, ovos e opcionalmente abacate, croutons e molho. É uma refeição equilibrada e saborosa, ideal para quem procura uma salada completa e satisfatória."
      />
    </div>
  )
}

