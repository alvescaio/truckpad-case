import React from "react";

import { NavLink } from 'react-router-dom';
import { Formik, Form, Field } from "formik";
import { TextField, Typography, Icon, Grid, Paper, makeStyles, 
  InputLabel, Button, InputAdornment, FormControl, Select} from '@material-ui/core';

import { DatePicker } from 'material-ui-formik-components/DatePicker';

import INITIAL_VALUES from "./InitialValues";
import VALIDATIONS_RULES from "./formValidations";
import STYLE_FORM from "./style";

const useStyles = makeStyles(STYLE_FORM);
INITIAL_VALUES.birth_date = new Date();

function FormDefault({ onSubmit, InitialValues = INITIAL_VALUES }) {

  InitialValues.cpf = InitialValues.documents.filter(doc => doc.doc_type == "CPF")[0].number;
  InitialValues.cnhNumber = InitialValues.documents.filter(doc => doc.doc_type == "CNH")[0].number;

  const classes = useStyles();

  const [state, setState] = React.useState({
    cnhCategory: InitialValues.documents.filter(doc => doc.doc_type == "CNH")[0].category,
  });

  function submitForm(values){
    values = {
      ...values,
      documents: [
      {
        "country": "BR",
        "number": values.cpf.toString(),
        "doc_type": "CPF"
      },
      {
        "country": "BR",
        "number": values.cnhNumber.toString(),
        "doc_type": "CNH",
        "category": state.cnhCategory
      }]
    };
    delete values.cnhNumber
    delete values.cpf
    onSubmit(values);
  }

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handleChangeSelect = name => event => {
    setState({
      ...state,
      [name]: event.target.value,
    });
  };
  return (
    <>
      <Typography variant="h5" color="textSecondary" className={classes.title}>
          Cadastre um novo Motorista
      </Typography>
      <Formik
        onSubmit={submitForm}
        initialValues={InitialValues}
        validationSchema={VALIDATIONS_RULES}
      >
        {({ handleChange, handleBlur, handleSubmit, values, touched, errors }) => (
          <Paper className={classes.paper}>
            <Form>
              <Grid item xs={12} className={classes.root, classes.formSpacing}>
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
                  maxDate={new Date()}
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
                <TextField
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
                />
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
                  <InputLabel ref={inputLabel} htmlFor="outlined-age-native-simple">
                    Categoria da CNH
                  </InputLabel>
                  <Select
                    native
                    value={state.cnhCategory}
                    onChange={handleChangeSelect('cnhCategory')}
                    labelWidth={labelWidth}
                    inputProps={{
                      name: 'cnhCategory',
                      id: 'outlined-cnhCategory-native-simple',
                    }}
                  >
                    <option value="AB">AB</option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                  </Select>
                </FormControl>
                <Grid item xs={12} className={classes.groupButtons}>
                  <NavLink to="/">
                    <Button
                      id="back"
                      variant="contained"
                      color="secondary"
                      size="large"
                      startIcon={<Icon>arrow_back_ios</Icon>}>
                        Voltar
                    </Button>
                  </NavLink>
                  <Button 
                    variant="contained" 
                    color="primary"
                    size="large"
                    type="submit" 
                    title="Submit"
                    startIcon={<Icon>save_icon</Icon>} >
                      Cadastrar
                  </Button>
                </Grid>
              </Grid>
            </Form>
          </Paper>
        )}
      </Formik>
    </>
  );
};

export default FormDefault;