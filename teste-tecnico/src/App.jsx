import { useState } from 'react'
import './App.css'
import Form from './components/Form'
import Table from './components/Table'

function App() {

  const [user, setUser] = useState([
    {
      id: 1,
      nome: "Vinicius",
      email: "Viniciuslima957@hotmail.com",
      dataNasc: "2004-04-06",
      cpf: "479615338-18",
      cep:"11320-270",
      logradouro:"Rua joao ribeiro 58",
      bairro:"Itararé",
      cidade:"São vicente",
      estado:"SP"
    },
  ])

  return (
    <main className='bg-neutral-900 flex flex-col h-screen items-center'>
      
        <h1 className='text-white'>Formulario de cadastro</h1>
        <Form user={user} setUser={setUser}/>

        <Table user={user}/>

   
    </main>
  )
}

export default App
