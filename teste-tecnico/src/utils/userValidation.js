import * as Yup from "yup";

export const userValidationSchema = Yup.object().shape({
  nome: Yup.string()
    .matches(/^[a-zA-Z0-9 ]+$/, "Não são permitidos caracteres especiais")
    .max(150, "Máximo de 150 caracteres")
    .required("O nome completo é obrigatório"),
  cpf: Yup.string()
    .min(11, "O CPF deve conter 11 caracteres")
    .max(14, "O CPF deve conter 11 caracteres")
    .required("O CPF é obrigatório"),  
  dataNasc: Yup.string()
    .required("A data de nascimento é obrigatória"),
  cep: Yup.string()
    .required("O CEP é obrigatório"),
  email: Yup.string()
    .required("O email é obrigatório"),
});
