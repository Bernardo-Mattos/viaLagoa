import React from 'react'
import './styles.css'

export default function Famosos({image , nome , desc}) {
  return (
    <div className='containerFamosos'>
      <h1 className='tt'>{nome}</h1>
      <img className='imgFamoso' src={image} alt="sim porra"/>
      <p className='descFamosos'>{desc}</p>
    </div>
  )
}
