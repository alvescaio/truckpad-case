import * as Yup from 'yup';

export default () => Yup.object().shape({
    name: Yup.string()
        .max(45, "Muito Grande, abrevie!")
        .required('Obrigatório'),
    birth_date: Yup.string()
        .required('Obrigatório'),
    email: Yup.string()
        .email('Invalid email')
        .required('Obrigatório'),
    state: Yup.string()
        .required('Obrigatório'),
    city: Yup.string()
        .max(30, "Muito Grande, abrevie!")
        .required('Obrigatório'),
    phone: Yup.string()
        .max(14, "Digite um número válido!")
        .required('Obrigatório'),
});