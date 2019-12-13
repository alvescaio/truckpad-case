import React from "react";
import { NavLink } from 'react-router-dom';
import { Formik, Form, Field } from "formik";
import DatePickerField from "./DatePickerField";
import { TextField, Icon, Grid, Paper, makeStyles, InputLabel, Button, InputAdornment, FormControl, Select, MenuItem} from '@material-ui/core';

import { DatePicker } from 'material-ui-formik-components/DatePicker';
import { Select as SelectInputField } from 'material-ui-formik-components/Select';

import INITIAL_VALUES from "../Register/formInitialValues";
import VALIDATIONS_RULES from "../Register/formValidations";
import STYLE_FORM_REGISTER from "./style";

const useStyles = makeStyles(STYLE_FORM_REGISTER);
INITIAL_VALUES.birth_date = null;

const FormRegister = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    cnhCategory: 'AB',
  });

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

  function submitForm(values){
    values.documents = [
      {
        "country": "BR",
        "number": values.cpf,
        "doc_type": "CPF"
      },
      {
        "country": "BR",
        "number": values.cnhNumber,
        "doc_type": "CNH",
        "category": state.cnhCategory
      }
    ]
    console.log(values)
  }

  return (
    <Formik
      onSubmit={(values) => submitForm(values)}
      initialValues={INITIAL_VALUES}
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
                  value={values.cpf}
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
                  value={values.cnhNumber}
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
  );
};

export default FormRegister;