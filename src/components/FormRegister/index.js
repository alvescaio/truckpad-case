import React from "react";
import { NavLink } from 'react-router-dom';
import { Formik, Form, Field } from "formik";
import DatePickerField from "./DatePickerField";
import { TextField, Icon, Grid, Paper,
  FormControl, IconButton, Typography,
  makeStyles, Button, InputAdornment} from '@material-ui/core';

import INITIAL_VALUES from "../Register/formInitialValues";
import VALIDATIONS_RULES from "../Register/formValidations";
import STYLE_FORM_REGISTER from "./style";

const useStyles = makeStyles(STYLE_FORM_REGISTER);

INITIAL_VALUES.birth_date = Date();

const FormRegister = () => {
  const classes = useStyles();
  return (
    <Formik
      onSubmit={(values) => console.log(values)}
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
                fullWidth
                InputProps={{
                  startAdornment: 
                    <InputAdornment position="start">
                        <Icon className={classes.iconDefault}>assignment_ind</Icon>
                    </InputAdornment>,
                }}

              />
              <Field name="birth_date" component={DatePickerField} />
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
                  fullWidth
                  InputProps={{
                    startAdornment: 
                      <InputAdornment position="start">
                          <Icon className={classes.iconDefault}>location_city</Icon>
                      </InputAdornment>,
                  }}
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
                  fullWidth
                  InputProps={{
                    startAdornment: 
                      <InputAdornment position="start">
                          <Icon className={classes.iconDefault}>map</Icon>
                      </InputAdornment>,
                  }}
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
                  variant="outlined"
                  fullWidth
                  InputProps={{
                    startAdornment: 
                      <InputAdornment position="start">
                          <Icon className={classes.iconDefault}>contact_phone</Icon>
                      </InputAdornment>,
                  }}
              />
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