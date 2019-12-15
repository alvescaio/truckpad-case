import * as Yup from 'yup';
import { format as formatCPF, validate as validateCPF} from 'gerador-validador-cpf';

export default () => Yup.object().shape({
    name: Yup.string()
        .max(30, "Muito Grande, abrevie!")
        .required("Obrigatório"),
    birth_date: Yup.date().required('Obrigatório'),
    state: Yup.string()
        .test('len', "Digite a sigla do estado. Exemplo: RN!", (val = 0) => val.toString().length == 2)
        .matches(new RegExp(/^[A-Z]*$/, 'i'), "Digite apenas letras!")
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
        .test('len', 'Este CPF não é válido!', (val = 0) => val.toString().length === 11 ? validateCPF(formatCPF(val)) : false)
        .required("Obrigatório"),
    cnhNumber: Yup.string()
        .test('len', 'Digite uma CNH válida!', (val = 0) => val.toString().length > 1)
        .test('len', 'Digite um CNH válida!', (val = 0) => val.toString().length === 11)
        .matches(/^[0-9]*$/, "Digite somente números!")
        .required("Obrigatório"),
});