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

        <table className="bg-white mt-10">
            
                <thead>
                    <tr>
                        <th className="border-4 text-xl">Nome</th>
                        <th className="border-4 text-xl">E-mail</th>
                        <th className="border-4 text-xl">Idade </th>
                        <th className="border-4 text-xl">CPF</th>
                        <th className="border-4 text-xl">Logradouro</th>
                        <th className="border-4 text-xl">Bairro</th>
                        <th className="border-4 text-xl">Cidade</th>
                        <th className="border-4 text-xl">Estado</th>
                    </tr>
                </thead>
            
                
                    <tbody>
                        {
                            user.map((user)=>(
                                <tr key={user.id}>
                                    <td className="text-center text-xl">
                                    {user.nome}
                                    </td>
                                    <td className="text-center text-xl">
                                    {user.email}
                                    </td>
                                    <td className="text-center text-xl">
                                    {calculateAge(user.dataNasc)}
                                    </td>
                                    <td className="text-center text-xl">
                                    {user.cpf}
                                    </td>
                                    <td className="text-center text-xl">
                                    {user.cep}
                                    </td>
                                    <td className="text-center text-xl">
                                    {user.bairro}
                                    </td>
                                    <td className="text-center text-xl">
                                    {user.cidade}
                                    </td>
                                    <td className="text-center text-xl">
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

