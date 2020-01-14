import * as Yup from 'yup';

export const loginValidator = Yup.object().shape({
  email: Yup.string()
    .email('Informe um e-mail válido.')
    .required('Email Obrigatório.'),
  senha: Yup.string().required('Senha Obrigatória.'),
});

export const registerValidator = Yup.object().shape({
  usuario: Yup.string()
    .required('Usuário Obrigatório.')
    .min(7, 'Mínimo 7 caractéres.')
    .max(20, 'Máximo de 20 caractéres.'),
  email: Yup.string()
    .email('Informe um e-mail válido.')
    .required('Email Obrigatório.'),
  senha: Yup.string()
    .min(7, 'Mínimo 7 caractéres.')
    .max(20, 'Máximo de 20 caractéres.')
    .required('Senha Obrigatória.'),
  rSenha: Yup.string()
    .min(7, 'Mínimo 7 caractéres.')
    .max(20, 'Máximo de 20 caractéres.')
    .required('Confirmação de Senha Obrigatória.'),
});
