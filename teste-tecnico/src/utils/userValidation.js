import * as Yup from "yup";

export const userValidationSchema = Yup.object().shape({
  nome: Yup.string()
    .matches(/^[\p{L}0-9 ]+$/u, "Não são permitidos caracteres especiais.")
    .max(150, "Máximo de 150 caracteres.")
    .required("O nome completo é obrigatório."),
  cpf: Yup.string()
    .min(11, "O CPF deve conter 11 caracteres.")
    .max(14, "O CPF deve conter 11 caracteres.")
    .required("O CPF é obrigatório."),  
  dataNasc: Yup.string()
    .required("A data de nascimento é obrigatória.")
    .test("valid-date", "A data de nascimento não pode ser no futuro.", (value) => {
      if (!value) return false;
      const [year,month,day] = value.split("-").map(Number);
      const date = new Date(year, month - 1, day);
      return date <= new Date();
    }),
  cep: Yup.string()
    .required("O CEP é obrigatório."),
  email: Yup.string()
    .required("O email é obrigatório.")
    .max(200, "O máximo de caracteres é 200."),
});
