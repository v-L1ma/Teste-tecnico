import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { userValidationSchema } from "../utils/userValidation";
import InputMask from "react-input-mask";
import api from "../service/api";
import { useEffect } from "react";
import { toast } from 'react-toastify';

function Form({ user, setUser }) {


  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userValidationSchema),
  });

  function validateCPF(cpf) {
    

    const usercpf = cpf

    //tirando os caracteres do cpf
    const match = cpf.match(/^(\d{3}\.\d{3}\.\d{3})-(\d{2})$/);
  
    if (match) {

      const parte1 = match[1].replace(/\D/g, ""); 
      const parte2 = match[2];
  
      // Transformando em um array para somar
      const numeros = parte1.split("").map(Number); 
  
      let somaDig1 = 0
      let somaDig2 = 0
      let pesoDig1 = 10
      let pesoDig2 = 11      

      for (let i = 0; i < numeros.length; i++) {
        somaDig1 += numeros[i] * (pesoDig1); 
        pesoDig1--
      }

      const restoDig1 = somaDig1%11
      let digito1 = 11 - restoDig1

      for (let i = 0; i < numeros.length; i++) {
        
        somaDig2 += numeros[i] * (pesoDig2); 

        pesoDig2--
      }  

      somaDig2 += digito1 * 2

      const restoDig2 = somaDig2%11

     
      let digito2= 11 - restoDig2

      if(digito2>=10){
        digito2=0
      }

      const digitosCalculados = (digito1+digito2)

      if(parte2===`${digito1}${digito2}`){
        return usercpf
      } else return false

    } else {
      console.log("Formato inválido!");
      return false
    }
  }


  const onSubmit = async (data) => {
    const { nome, email, dataNasc, cpf, cep } = data;

    
      const response = await api.get(`/${cep}/json/`);

      if(validateCPF(cpf)===false){
        console.log("CPF inválido")
        toast.error("CPF inválido")
        return false
      }

    const { logradouro, bairro, localidade, uf } = response.data;

    const newUser = {
      id: Math.floor(Math.random() * 10000),
      nome, // Mantendo a mesma chave
      email,
      dataNasc,
      cpf: validateCPF(cpf),
      cep,
      logradouro: logradouro,
      bairro: bairro,
      cidade: localidade,
      estado: uf,
    };

    setUser((previousUsers) => [...previousUsers, newUser]);

    toast.success('Usuário cadastrado com sucesso!', {
      position: "top-right",
      autoClose: 3500,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
      });

    reset();
  };


  return (
    <form
      action=""
      className="flex flex-col gap-4 bg-neutral-600 bg-opacity-25 p-5 rounded-md w-11/12 lg:w-4/12"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="nome" className="text-white font-bold text-2xl">
          Nome
        </label>
        <input
          id="nome"
          type="text"
          className="rounded-md p-2 text-xl"
          {...register("nome")}
          placeholder="Digite seu nome"
        />
        <div className="text-red-950">{errors.nome?.message}</div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="cpf" className="text-white font-bold text-2xl">
          CPF
        </label>
        <InputMask
          id="cpf"
          type="text"
          className="rounded-md p-2 text-xl"
          mask="999.999.999-99"
          maskChar=""
          {...register("cpf")}
          placeholder="Digite seu CEP (Ex.: 000.000.000-00)"
        />
        <div className="text-red-950">{errors.cpf?.message}</div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="dataNasc" className="text-white font-bold text-2xl">
          Data de nascimento
        </label>
        <input
          id="dataNasc"
          type="date"
          className="rounded-md p-2 text-xl text-neutral-400"
          {...register("dataNasc")}
        />
        <div className="text-red-950">{errors.dataNasc?.message}</div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-white font-bold text-2xl">
          Email
        </label>
        <input
          id="email"
          type="email"
          className="rounded-md p-2 text-xl"
          {...register("email")}
          placeholder="Digite seu email"
        />
        <div className="text-red-950">{errors.email?.message}</div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="cep" className="text-white font-bold text-2xl">
          CEP
        </label>
        <InputMask
          id="cep"
          type="text"
          className="rounded-md p-2 text-xl"
          mask="99999-999"
          maskChar=""
          {...register("cep")}
          placeholder="Digite seu CEP (Ex.: 00000-000)"
        />
        <div className="text-red-950">{errors.cep?.message}</div>
      </div>

      <button
        type="submit"
        className="bg-sky-900 rounded-md text-white font-bold text-2xl p-2"
      >
        Cadastrar
      </button>
    </form>
  );
}

export default Form;
