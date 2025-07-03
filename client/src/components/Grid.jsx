import React from 'react'
import axios from 'axios'
import { SquarePen, Trash2 } from 'lucide-react'
import { toast } from 'react-toastify'

const Grid = ({ users, setUsers, setOnEdit }) => {
  const handleEdit = (item) => {
    setOnEdit(item)
  }

  const handleDelete = async (id) => {
    await axios
      .delete('http://localhost:8800/' + id)
      .then(({ data }) => {
        const newArray = users.filter((user) => user.id !== id)

        setUsers(newArray)
        toast.success(data)
      })
      .catch(({ data }) => toast.error(data))

    setOnEdit(null)
  }

  return (
    <div className="overflow-x-auto rounded-box border border-base-content/10 bg-base-100">
      <table className="table table-zebra truncate">
        <thead>
          <tr className=''>
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
                <SquarePen
                  className="cursor-pointer text-blue-500"
                  onClick={() => handleEdit(item)}
                />
                <Trash2
                  className="cursor-pointer text-red-500"
                  onClick={() => handleDelete(item.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Grid
