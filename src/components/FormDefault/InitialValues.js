import moment from 'moment';

export default {
        id: 0,
        active: true,
        name: "",
        birth_date: moment(new Date().getTime() - 24*60*60*1000*6574),
        state: "AC",
        city: "",
        phone: "",
        documents: [
            {
                expires_at: "",
                country: "",
                number: "",
                doc_type: "CNH",
                category: "A"
            },
            {
                country: "",
                number: "",
                doc_type: "CPF",
            },
        ]
    };