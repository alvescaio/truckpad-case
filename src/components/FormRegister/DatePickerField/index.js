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
        label="Data de Nascimento"
        name={field.name}
        value={field.value}
        format="dd/MM/yyyy"
        InputAdornmentProps={{ position: "start" }}
        helperText={currentError}
        error={Boolean(currentError)}
        onError={error => {
          // handle as a side effect
          if (error !== currentError) {
            form.setFieldError(field.name, error);
          }
        }}
        // if you are using custom validation schema you probably want to pass `true` as third argument
        onChange={date => form.setFieldValue(field.name, date, false)}
        {...other}
      />
    );
  };

  export default DatePickerField;