import React from 'react'
import axios from 'axios'
import { FaTrash, FaEdit } from 'react-icons/fa'

const Grid = ({ users }) => {
  return (
    <div class="overflow-x-auto rounded-box border border-base-content/10 bg-base-100">
      <table className="table table-zebra">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th className="sm:display-none">Telefone</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item, i) => (
            <tr key={i}>
              <td className="w-30">{item.nome}</td>
              <td className="w-30">{item.email}</td>
              <td className="w-20">{item.tel}</td>
              <td className="flex gap-1 items-center justify-center">
                {' '}
                <FaEdit /> <FaTrash onClick={() => handleDelete(item.id)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Grid
