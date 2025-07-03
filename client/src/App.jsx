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
      <div className="flex flex-col items-center mt-20 gap-4">
        <h2 className="font-semibold"></h2>
        <Form />
        <Grid users={users}/>
      </div>
      <ToastContainer autoClose={3000} />
    </>
  )
}

export default App
