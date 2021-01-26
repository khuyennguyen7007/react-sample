import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import FormGroup from '@material-ui/core/FormGroup';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';
import CircularProgress from '@material-ui/core/CircularProgress';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

export const LoginPage = () => {
  const {
    register,
    handleSubmit,
    errors,
    formState: { isValid, isSubmitting },
  } = useForm({ mode: 'onChange' });
  const [loading, setLoading] = useState(false); // initialize the hook
  const onSubmit = async (data) => {
    setLoading(true);
    console.log(data);
    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    await sleep(3000);
     setLoading(false);
  };

  return (
    <>
      <Alert severity="error">This is an error alert — check it out!</Alert>
      <form onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off">
        <FormGroup>
          <TextField
            id="username"
            name="username"
            label="Username"
            required
            inputRef={register({ required: true })}
          />
        </FormGroup>
        <FormGroup>
          <TextField
            error={Boolean(errors.password)}
            id="password"
            name="password"
            label="Password"
            type="password"
            required
            inputRef={register({ minLength: 8, required: true })}
          />
        </FormGroup>
        <Button
          disabled={isSubmitting || !isValid}
          variant="contained"
          color="primary"
          onClick={handleSubmit(onSubmit)}
        >
          Primary
          {loading && <CircularProgress size={20} color="secondary" />}
        </Button>
      </form>
    </>
  );
};
