import React from 'react';
import { Field, reduxForm } from 'redux-form';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import asyncValidate from '../utils/asyncValidate';

const validate = values => {
  const errors = {};
  const requiredFields = [
    'firstName',
    'lastName',
    'email',
    'favoriteColor',
    'notes'
  ];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });
  if (
    values.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = 'Invalid email address';
  }
  return errors;
};

const renderTextField = ({
  label,
  input,
  meta: { touched, invalid, error },
  ...custom
}) => (
  <TextField
    label={label}
    placeholder={label}
    error={touched && invalid}
    helperText={touched && error}
    fullWidth
    {...input}
    {...custom}
  />
);

const renderCheckbox = ({ input, label }) => (
  <div>
    <FormControlLabel
      control={<Checkbox checked={!!input.value} onChange={input.onChange} />}
      label={label}
    />
  </div>
);

const radioButton = ({ input, ...rest }) => (
  <FormControl>
    <RadioGroup {...input} {...rest}>
      <FormControlLabel value="female" control={<Radio />} label="Female" />
      <FormControlLabel value="male" control={<Radio />} label="Male" />
    </RadioGroup>
  </FormControl>
);

const renderFromHelper = ({ touched, error }) => {
  if (!(touched && error)) {
    return;
  }
  return <FormHelperText>{touched && error}</FormHelperText>;
};

const renderSelectField = ({
  input,
  label,
  meta: { touched, error },
  children,
  ...custom
}) => (
  <FormControl error={touched && error}>
    <InputLabel htmlFor="age-native-simple">Age</InputLabel>
    <Select
      native
      {...input}
      {...custom}
      inputProps={{
        name: 'age',
        id: 'age-native-simple'
      }}
    >
      {children}
    </Select>
    {renderFromHelper({ touched, error })}
  </FormControl>
);

const TenderRegistrationForm = props => {
  const { handleSubmit, pristine, reset, submitting, classes } = props;
  return (
    <Paper style={{ padding: '20px' }}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={24} justify="center" alignItems="center">
          <Grid item xs={6}>
            <Field
              name="firstName"
              component={renderTextField}
              label="First Name"
            />
          </Grid>
          <Grid item xs={6}>
            <Field
              name="lastName"
              component={renderTextField}
              label="Last Name"
            />
          </Grid>
          <Grid item xs={6}>
            <Field name="email" component={renderTextField} label="Email" />
          </Grid>
          <Grid item xs={6}>
            <Field name="sex" component={radioButton}>
              <Radio value="male" label="male" />
              <Radio value="female" label="female" />
            </Field>
          </Grid>
          <Grid item xs={6}>
            <Field
              classes={classes}
              name="favoriteColor"
              component={renderSelectField}
              label="Favorite Color"
            >
              <option value="" />
              <option value="ff0000">Red</option>
              <option value="00ff00">Green</option>
              <option value="0000ff">Blue</option>
            </Field>
          </Grid>
          <Grid item xs={6}>
            <Field
              name="employed"
              component={renderCheckbox}
              label="Employed"
            />
          </Grid>
          <Grid item xs={6}>
            <Field
              name="notes"
              component={renderTextField}
              label="Notes"
              multiline
              rowsMax="4"
              margin="normal"
            />
          </Grid>
          <Button
            type="submit"
            disabled={pristine || submitting}
            fullWidth
            color="primary"
          >
            Submit
          </Button>
        </Grid>
      </form>
    </Paper>
  );
};

export default reduxForm({
  form: 'TenderRegistrationForm', // a unique identifier for this form
  validate,
  asyncValidate
})(TenderRegistrationForm);
