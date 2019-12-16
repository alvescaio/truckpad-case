import React from "react";

import { useLocation, useHistory } from 'react-router-dom';
import { Formik } from "formik";
import { Typography, Grid, Paper, makeStyles, Icon} from '@material-ui/core';
import  Button from '@material-ui/core/Button';
import InputsFields from './InputsFields';

import moment from 'moment';

import INITIAL_VALUES from "./InitialValues";
import validate_schema from "./formValidations";
import STYLE_FORM from "./style";

const useStyles = makeStyles(STYLE_FORM);

function FormDefault({ onSubmit, InitialValues = INITIAL_VALUES}) {

  InitialValues.cpf = InitialValues.documents.filter(doc => doc.doc_type == "CPF")[0].number;
  InitialValues.cnhNumber = InitialValues.documents.filter(doc => doc.doc_type == "CNH")[0].number;
  InitialValues.cnhCategory = InitialValues.documents.filter(doc => doc.doc_type == "CNH")[0].category;
  InitialValues.birth_date = moment(InitialValues.birth_date);

  const classes = useStyles();
  const Location = useLocation();
  const History = useHistory();

  let actionPageText = "Atualizar";
  if(Location.pathname == "/addTrucker") actionPageText = "Cadastrar";

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
        "category": values.cnhCategory
      }]
    };
    delete values.cnhNumber;
    delete values.cpf;
    delete values.cnhCategory;
    onSubmit(values);
  }
  return (
    <>
      <Typography variant="h5" color="textSecondary" className={classes.title}>
          {actionPageText} Motorista
      </Typography>
      <Formik
        onSubmit={submitForm}
        initialValues={InitialValues}
        validationSchema={validate_schema}
      >
        {({ handleChange, handleBlur, handleSubmit, values, touched, errors }) => (
          <Paper className={classes.paper}>
            <Grid item xs={12} className={classes.root, classes.formSpacing}>
              <InputsFields
                handleChange={handleChange}
                handleBlur={handleBlur}
                handleSubmit={handleSubmit}
                values={values}
                touched={touched}
                errors={errors}
              />
              <Grid item xs={12} className={classes.groupButtons}>
                <Button
                  id="back"
                  variant="contained"
                  color="secondary"
                  size="large"
                  onClick={()=>{(History.push('/'))}}
                  startIcon={<Icon>arrow_back_ios</Icon>}>
                    Voltar
                </Button>
                <Button 
                  variant="contained" 
                  color="primary"
                  size="large"
                  type="submit" 
                  title="Submit"
                  onClick={handleSubmit}
                  startIcon={<Icon>save_icon</Icon>} >
                    {actionPageText}
                </Button>
              </Grid>
            </Grid>
          </Paper>
        )}
      </Formik>
    </>
  );
};

export default FormDefault;