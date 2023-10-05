import React from 'react'
import './syles.css'
import Sobre from './MainComponents/sobre'
import Hist from './MainComponents/Historia'

export default function Main() {
  return (
    <div className='containerMain'>
      <Sobre />
      <Hist/>
    </div>
  )
}
