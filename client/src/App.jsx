import './index.css'
import Form from './components/Form.jsx'
import Grid from './components/Grid.jsx'
import { useState, useEffect } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios'

function App() {
  const [users, setUsers] = useState([])
  const [onEdit, setOnEdit] = useState(null)

  const getUsers = async () => {
    try {
      const res = await axios.get('http://localhost:8800')
      setUsers(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)))
    } catch (error) {
      toast.error(error)
    }
  }

  useEffect(() => {
    getUsers()
  }, [setUsers])

  return (
    <>
      <div className="mt-20 mb-4">
        <h2 className="flex justify-center font-bold text-primary text-2xl">
          Cadastro de usuários
        </h2>
      </div>
      <div className="flex flex-col items-center gap-4">
        <Form getUsers={getUsers} onEdit={onEdit} setOnEdit={setOnEdit} />
        <Grid users={users} setUsers={setUsers} setOnEdit={setOnEdit} />
      </div>
      <ToastContainer position="top-right" />
    </>
  )
}

export default App
