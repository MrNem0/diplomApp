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
    'systemClass',
    'area',
    'duration',
    'numberPerformers',
    'orgApproach',
    'language',
    'customer',
    'standards',
    'collaborators',
    'platform',
    'otherRequirements'
  ];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });
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
      <FormControlLabel value="true" control={<Radio />} label="Так" />
      <FormControlLabel value="false" control={<Radio />} label="Ні" />
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
    <Typography variant="subtitle1">Тривалість (У місяцях)</Typography>
    <Select
      native
      {...input}
      {...custom}
      inputProps={{
        name: 'duration'
      }}
    >
      {children}
    </Select>
    {renderFromHelper({ touched, error })}
  </FormControl>
);

const month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const TenderRegistrationForm = props => {
  const { handleSubmit, pristine, reset, submitting, classes } = props;
  return (
    <Paper style={{ padding: '20px' }}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={24} justify="center" alignItems="center">
          <Grid item xs={12}>
            <Field
              name="tenderName"
              component={renderTextField}
              label="Назва тендеру"
            />
          </Grid>
          <Grid item xs={6}>
            <Field
              name="systemClass"
              component={renderTextField}
              label="Клас системи (Наприклад, АСУ ТП, АІС та ін.)"
            />
          </Grid>
          <Grid item xs={6}>
            <Field
              name="platform"
              component={renderTextField}
              label="Платформа(и) на якій буде застосовуваться додаток"
            />
          </Grid>
          <Grid item xs={6}>
            <Field
              name="language"
              component={renderTextField}
              label="Мова(и) які будуть використвуваться в розробці"
            />
          </Grid>
          <Grid item xs={6}>
            <Field
              name="customer"
              component={renderTextField}
              label="Замовник(найменування організації-замовника)"
            />
          </Grid>
          <Grid item xs={12}>
            <Field
              name="area"
              component={renderTextField}
              label="Прикладна область (Наприклад, військового призначення)"
            />
          </Grid>
          <Grid item xs={12}>
            <Field
              name="numberPerformers"
              component={renderTextField}
              label="Кількість виконавців(Кількість осіб, які беруть участь в розробці)"
            />
          </Grid>
          <Grid item xs={12}>
            <Field
              name="orgApproach"
              component={renderTextField}
              label="Організаційний підхід(Наприклад, тимчасовий трудовий колектив, інтегрована бригада та ін.)"
            />
          </Grid>
          <Grid item xs={12}>
            <Field
              name="standards"
              component={renderTextField}
              label="Застосовувані стандарти(Група застосовуваних вітчизняних і міжнародних стандартів)"
            />
          </Grid>
          <Grid item xs={3}>
            <Typography variant="subtitle1">
              Наявність співвиконавців
            </Typography>
            <Field name="collaborators" component={radioButton}>
              <Radio value="true" label="Так" />
              <Radio value="false" label="Ні" />
            </Field>
          </Grid>
          <Grid item xs={3}>
            <Field
              classes={classes}
              name="duration"
              component={renderSelectField}
            >
              {month.map(e => (
                <option key={e} value={e}>
                  {e}
                </option>
              ))}
            </Field>
          </Grid>
          <Grid item xs={12}>
            <Field
              name="otherRequirements"
              component={renderTextField}
              label="Інші вимоги"
              multiline
              rowsMax="4"
              margin="normal"
            />
          </Grid>
          <Grid item xs={12}>
            <Field
              name="previewImage"
              component={renderTextField}
              label="Посилання на картинку(Якщо не має пропустіть це поле)"
              margin="normal"
            />
          </Grid>
          <Button
            type="submit"
            disabled={pristine || submitting}
            fullWidth
            color="primary"
          >
            Зареєструвати
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
