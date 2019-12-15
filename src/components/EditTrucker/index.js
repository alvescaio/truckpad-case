import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { Creators as TruckersActions} from "../../store/ducks/truckers";

import FormDefault from "../FormDefault";

function EditTrucker({ truckers, dispatch, match }) {
    const History = useHistory();
    const DataTrucker = truckers.filter(trucker => trucker.id == match.params.id)[0];
    
    if(typeof DataTrucker == "undefined" || !DataTrucker) History.push('/');

    console.log(match.params.id)

    function submitForm(values){
        delete values.cpf;
        delete values.cnhNumber;
        dispatch(TruckersActions.editTrucker(values));
        History.push("/");
    }

    return (
        <FormDefault
            InitialValues={truckers.filter(trucker => trucker.id == match.params.id)[0]}
            onSubmit={(value) => {(submitForm(value))} }
        />
    );
}

export default connect( state => ({ truckers: state.truckers.truckers }) )( EditTrucker );