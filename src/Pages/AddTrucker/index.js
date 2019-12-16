import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { Creators as TruckersActions} from "../../store/ducks/truckers";

import FormDefault from "../../components/FormDefault";

function AddTrucker({ truckers, dispatch }) {
    const History = useHistory();

    function submitForm(values){
        values = {
            ...values,
            id: truckers.filter(trucker => trucker.id).reverse()[0].id + 1,
        }
        delete values.cpf;
        delete values.cnhNumber;
        dispatch(TruckersActions.addTrucker(values));
        History.push("/");
    }

    return (
        <FormDefault
            onSubmit={(value) => {(submitForm(value))} }
        />
    );
}

export default connect( state => ({ truckers: state.truckers.truckers }) )( AddTrucker );