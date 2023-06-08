import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Confirmation = () => {
  const navigate = useNavigate()

  const timing = () => {
    navigate("/")
  }

  return (
    <div onBlur={timing}>
      <h1>Confirmação de Venda</h1>
      <p>Obrigado por sua compra! Sua venda foi confirmada com sucesso.</p>
    </div>
  )
}

export default Confirmation