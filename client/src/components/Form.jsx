import axios from 'axios'
import React, { useEffect, useRef } from 'react'
import { toast } from 'react-toastify'

const Form = ({ getUsers, onEdit, setOnEdit }) => {
  const ref = useRef()

  useEffect(() => {
    if (onEdit) {
      const user = ref.current

      user.nome.value = onEdit.nome
      user.email.value = onEdit.email
      user.tel.value = onEdit.tel
      user.data_nascimento.value = onEdit.data_nascimento
    }
  }, [onEdit])

  const handleSubmit = async (e) => {
    e.preventDefault()

    const user = ref.current

    if (
      !user.nome.value ||
      !user.email.value ||
      !user.tel.value ||
      !user.data_nascimento.value
    ) {
      return toast.warn('Preencha todos os campos!')
    }

    if (onEdit) {
      await axios
        .put('http://localhost:8800/' + onEdit.id, {
          nome: user.nome.value,
          email: user.email.value,
          tel: user.tel.value,
          data_nascimento0: user.data_nascimento.value,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data))
    } else {
      await axios
        .post('http://localhost:8800', {
          nome: user.nome.value,
          email: user.email.value,
          tel: user.tel.value,
          data_nascimento: user.data_nascimento.value,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data))
    }

    user.nome.value = ''
    user.email.value = ''
    user.tel.value = ''
    user.data_nascimento.value = ''

    setOnEdit(null)
    getUsers()
  }

  return (
    <form
      onSubmit={handleSubmit}
      ref={ref}
      className="flex flex-col gap-4 bg-base-200 p-8 shadow rounded"
    >
      <div className="flex gap-4">
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

        <label className="floating-label">
          <span>Data de Nascimento</span>
          <input
            type="text"
            name="data_nascimento"
            placeholder="DD/MM/AAAA"
            className="input"
          />
        </label>
      </div>

      <button type="submit" className="btn btn-primary">
        Salvar
      </button>
    </form>
  )
}

export default Form
