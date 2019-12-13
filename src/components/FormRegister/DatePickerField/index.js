import React from 'react';
import { KeyboardDatePicker } from "@material-ui/pickers";

const DatePickerField = ({ field, form, ...other }) => {
    const currentError = form.errors[field.name];
  
    return (
      <KeyboardDatePicker
        autoOk
        disableFuture
        variant="inline"
        inputVariant="outlined"
        margin="dense"
        label="Data de Nascimento"
        name={field.name}
        value={field.value}
        format="dd/MM/yyyy"
        placeholder="10/13/1995"
        InputAdornmentProps={{ position: "end", style: {paddingLeft: 0} }}
        helperText={currentError}
        error={Boolean(currentError)}
        onError={error => {
          if (error !== currentError) {
            form.setFieldError(field.name, error);
          }
        }}
        onChange={date => form.setFieldValue(field.name, date, false)}
        {...other}
      />
    );
  };

  export default DatePickerField;