export default () =>  
    ({
        id: 0,
        active: true,
        name: "",
        birth_date: "",
        state: "",
        city: "",
        phone: "",
        addresses: {
            name: "",
            state: "",
            country: "",
            neighborhood: "",
            city: "",
            street_number: "",
            complement: "",
            postal_code: "",
            street_name: ""
        },
        documents: [
            {
                expires_at: "",
                country: "",
                number: "",
                doc_type: "",
                category: ""
            },
        ]
    })