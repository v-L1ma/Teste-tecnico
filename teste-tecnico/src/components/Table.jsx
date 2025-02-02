function Table({user}){

    function calculateAge(birthDate){

        const [birthYear, birthMonth] = birthDate.split("-")
        
        //const age = `${year + month + day}`

        const data = new Date

        const actualYear = data.getFullYear() 
        const actualMonth = data.getMonth()

        let age = 0

        if(actualMonth>=birthMonth){
            age = actualYear - birthYear
        } else{ 
            age = (actualYear-birthYear)-1
        }

        return age   
    }

    return(

        <table className="bg-neutral-600 bg-opacity-25 p-5 rounded-md w-full">
            
                <thead>
                    <tr>
                        <th className="border-2 border-white border-opacity-30 text-xl text-white">Nome</th>
                        <th className="border-2 border-white border-opacity-30 text-xl text-white">E-mail</th>
                        <th className="border-2 border-white border-opacity-30 text-xl text-white">Idade </th>
                        <th className="border-2 border-white border-opacity-30 text-xl text-white">CPF</th>
                        <th className="border-2 border-white border-opacity-30 text-xl text-white">Logradouro</th>
                        <th className="border-2 border-white border-opacity-30 text-xl text-white">Bairro</th>
                        <th className="border-2 border-white border-opacity-30 text-xl text-white">Cidade</th>
                        <th className="border-2 border-white border-opacity-30 text-xl text-white">Estado</th>
                    </tr>
                </thead>
            
                
                    <tbody>
                        {
                            user.map((user)=>(
                                <tr key={user.id}>
                                    <td className="border-2 border-white border-opacity-30 text-xl text-white text-center">
                                    {user.nome}
                                    </td>
                                    <td className="border-2 border-white border-opacity-30 text-xl text-white text-center">
                                    {user.email}
                                    </td>
                                    <td className="border-2 border-white border-opacity-30 text-xl text-white text-center">
                                    {calculateAge(user.dataNasc)}
                                    </td>
                                    <td className="border-2 border-white border-opacity-30 text-xl text-white text-center">
                                    {user.cpf}
                                    </td>
                                    <td className="border-2 border-white border-opacity-30 text-xl text-white text-center">
                                    {user.cep}
                                    </td>
                                    <td className="border-2 border-white border-opacity-30 text-xl text-white text-center">
                                    {user.bairro}
                                    </td>
                                    <td className="border-2 border-white border-opacity-30 text-xl text-white text-center">
                                    {user.cidade}
                                    </td>
                                    <td className="border-2 border-white border-opacity-30 text-xl text-white text-center">
                                    {user.estado}
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                
            
        </table>

    )
}

export default Table

