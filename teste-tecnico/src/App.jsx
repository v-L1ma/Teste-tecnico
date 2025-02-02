import { useState } from 'react'
import './App.css'
import Form from './components/Form'
import Table from './components/Table'

function App() {

  const [user, setUser] = useState([])

  return (
    <main className='bg-neutral-900 flex flex-col items-center pb-24'>
      
        <h1 className='text-white m-10 font-extrabold text-3xl '>Formulário de cadastro</h1>

        <Form user={user} setUser={setUser}/>

        <h1 className='text-white m-10 font-extrabold text-3xl '>
          Lista de usuários cadastrados:
        </h1>
        
        <div className='overflow-x-scroll lg:overflow-auto mt-10 w-11/12 rounded-lg lg:w-8/12'>
          <Table user={user}/>
        </div>
   
    </main>
  )
}

export default App
