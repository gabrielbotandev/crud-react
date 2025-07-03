import React, { useRef } from 'react'

const Form = ({ onEdit }) => {
  const ref = useRef()

  return (
    <div
      ref={ref}
      className="flex flex-col gap-4 bg-base-200 p-8 shadow rounded"
    >
      <div className='flex gap-4'>
        <label className="floating-label">
          <span>Nome</span>
          <input
            type="text"
            name="nome"
            placeholder="Insira seu nome"
            className="input"
          />
        </label>

        <label className="floating-label">
          <span>E-mail</span>
          <input
            type="email"
            name="email"
            placeholder="email@site.com"
            className="input"
          />
        </label>

        <label className="floating-label">
          <span>Telefone</span>
          <input
            type="text"
            name="tel"
            placeholder="(11)11111-1111"
            className="input"
          />
        </label>

        <label className="input">
          <span className='label'>Data de Nascimento</span>
          <input
            type="date"
            name="tel"
            placeholder="DD/MM/YYYY"
          />
        </label>
      </div>

      <button type="submit" className="btn btn-primary btn-outline">
        Salvar
      </button>
    </div>
  )
}

export default Form
