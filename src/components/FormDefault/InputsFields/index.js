import React from "react";
import { Field } from "formik";
import { DatePicker } from 'material-ui-formik-components/DatePicker';
import { TextField, makeStyles, 
    InputLabel, InputAdornment, FormControl, Select, Icon} from '@material-ui/core';

import STYLE_FORM from '../style';
import BR_STATES from './statesBR';

const useStyles = makeStyles(STYLE_FORM);


function InputsFields({handleChange, handleBlur, handleSubmit, values, touched, errors}){

    const classes = useStyles();

    const inputLabelCnh = React.useRef(null);
    const inputLabelState = React.useRef(null);
    const [labelWidthState, setLabelWidthState] = React.useState(0);
    const [labelWidthCnh, setLabelWidthCnh] = React.useState(0);

    React.useEffect(() => {
        setLabelWidthCnh(inputLabelCnh.current.offsetWidth);
        setLabelWidthState(inputLabelState.current.offsetWidth);
    }, []);

    const [state, setState] = React.useState({});

    return (
        <>
            <TextField
                id="name"
                label="Nome"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={touched.name ? errors.name : ""}
                error={touched.name && Boolean(errors.name)}
                margin="dense"
                variant="outlined"
                color="secondary"
                fullWidth
                InputProps={{
                endAdornment: 
                    <InputAdornment position="end">
                        <Icon className={classes.iconDefault}>perm_identity</Icon>
                    </InputAdornment>,
                }}
                required

            />
            <Field
                name="birth_date"
                color="secondary"
                inputVariant="outlined"
                format="dd/MM/yyyy"
                label="Data de Nascimento"
                helperText={touched.birth_date ? errors.birth_date : ""}
                margin="dense"
                maxDate={new Date(new Date().getTime() - 24*60*60*1000*6574)}
                InputProps={{
                endAdornment: 
                    <InputAdornment position="end">
                        <Icon className={classes.iconDefault}>event</Icon>
                    </InputAdornment>,
                }}
                component={DatePicker}
                required
            />
            <TextField
                id="city"
                label="Cidade"
                value={values.city}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={touched.city ? errors.city : ""}
                error={touched.city && Boolean(errors.city)}
                margin="dense"
                variant="outlined"
                color="secondary"
                fullWidth
                InputProps={{
                    endAdornment: 
                    <InputAdornment position="end">
                        <Icon className={classes.iconDefault}>location_city</Icon>
                    </InputAdornment>,
                }}
                required
            />
            <FormControl variant="outlined" color="secondary" margin="dense" fullWidth>
                <InputLabel ref={inputLabelState} htmlFor="outlined-age-native-simple">
                    Estado
                </InputLabel>
                <Select
                native
                value={values.state}
                onChange={handleChange}
                labelWidth={labelWidthState}
                inputProps={{
                    name: 'state',
                    id: 'outlined-state-native-simple',
                }}
                >
                {
                    BR_STATES.map((state, i) => (
                        <option key={i} value={state}>{state}</option>
                    ))
                }
                </Select>
            </FormControl>
            {/* <TextField
                id="state"
                label="Estado"
                value={values.state}
                onBlur={handleBlur}
                onChange={handleChange}
                helperText={touched.state ? errors.state : ""}
                error={touched.state && Boolean(errors.state)}
                margin="dense"
                variant="outlined"
                color="secondary"
                fullWidth
                InputProps={{
                    endAdornment: 
                    <InputAdornment position="end">
                        <Icon className={classes.iconDefault}>map</Icon>
                    </InputAdornment>,
                }}
                required
            /> */}
            <TextField
                id="phone"
                label="Telefone"
                value={values.phone}
                onBlur={handleBlur}
                onChange={handleChange}
                helperText={touched.phone ? errors.phone : ""}
                error={touched.phone && Boolean(errors.phone)}
                margin="dense"
                color="secondary"
                variant="outlined"
                fullWidth
                InputProps={{
                    endAdornment: 
                    <InputAdornment position="end">
                        <Icon className={classes.iconDefault}>contact_phone</Icon>
                    </InputAdornment>,
                }}
                required
            />
            <TextField
                id="cpf"
                label="CPF"
                value={values.cpf ? values.cpf : ""}
                onBlur={handleBlur}
                onChange={handleChange}
                helperText={touched.cpf ? errors.cpf: ""}
                error={touched.cpf && Boolean(errors.cpf)}
                margin="dense"
                color="secondary"
                variant="outlined"
                fullWidth
                InputProps={{
                    endAdornment: 
                    <InputAdornment position="end">
                        <Icon className={classes.iconDefault}>assignment_ind</Icon>
                    </InputAdornment>,
                }}
                required
            />
            <TextField
                id="cnhNumber"
                label="Número da CNH"
                value={values.cnhNumber ? values.cnhNumber : ""}
                onBlur={handleBlur}
                onChange={handleChange}
                helperText={touched.cnhNumber ? errors.cnhNumber : ""}
                error={touched.cnhNumber && Boolean(errors.cnhNumber)}
                margin="dense"
                color="secondary"
                variant="outlined"
                fullWidth
                InputProps={{
                    endAdornment: 
                    <InputAdornment position="end">
                        <Icon className={classes.iconDefault}>commute</Icon>
                    </InputAdornment>,
                }}
                required
            />
            <FormControl variant="outlined" color="secondary" margin="dense" fullWidth>
                <InputLabel ref={inputLabelCnh} htmlFor="outlined-age-native-simple">
                    Categoria da CNH
                </InputLabel>
                <Select
                native
                value={values.cnhCategory}
                onChange={handleChange}
                labelWidth={labelWidthCnh}
                inputProps={{
                    name: 'cnhCategory',
                    id: 'outlined-cnhCategory-native-simple',
                }}
                >
                <option value="A+B">A + B</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="A+C">A + C</option>
                <option value="D">D</option>
                <option value="A+D">A + D</option>
                <option value="E">E</option>
                <option value="A+E">A + E</option>
                </Select>
            </FormControl>
        </>
    );
}

export default InputsFields;