import * as Yup from 'yup';

export default () => Yup.object().shape({
    name: Yup.string()
        .max(30, "Muito Grande, abrevie!")
        .required("Obrigatório"),
    birth_date: Yup.date().required('Obrigatório'),
    state: Yup.string()
        .required("Obrigatório"),
    city: Yup.string()
        .max(30, "Muito Grande, abrevie!")
        .required("Obrigatório"),
    phone: Yup.string()
        .matches(/^[0-9]*$/, "Digite somente números!")
        .test('len', "Digite um telefone válido!", (val = 0) => val.toString().length < 14 && val.toString().length > 6)
        .required("Obrigatório"),
    cpf: Yup.string()
        .matches(/^[0-9]*$/, "Digite somente números!")
        .test('len', 'Digite um CPF válido', (val = 0) => val.toString().length === 11)
        .required("Obrigatório"),
    cnhNumber: Yup.string()
        .matches(/^[0-9]*$/, "Digite somente números!")
        .test('len', 'Digite uma CNH válida', (val = 0) => val.toString().length === 11)
        .required("Obrigatório"),
});