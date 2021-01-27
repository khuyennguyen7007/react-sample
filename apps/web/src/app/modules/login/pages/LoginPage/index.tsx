import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormGroup from '@material-ui/core/FormGroup';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';
import CircularProgress from '@material-ui/core/CircularProgress';
import Snackbar from '@material-ui/core/Snackbar';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@web/store/reducers';
import { counterActions } from '@web/services/counter/slice';

export const LoginPage = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state: RootState) => state.count)
  const {t} = useTranslation();
  const {
    register,
    handleSubmit,
    errors,
    formState: {isValid, isSubmitting},
  } = useForm({mode: 'onChange'});
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const onSubmit = async (data) => {
    setLoading(true);
    setOpen(true);
    console.log(data);
    dispatch(counterActions.increment(12))
    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    await sleep(3000);
    setLoading(false);
    setOpen(false)
  };

  return (
    <Container>
      <Grid container justify="center">
        <Grid item md={4}>
          {counter}
          <Alert severity="error">
            {t('Welcome to React')}
            {t('key', { what: 'Money', how: 'great' })}
          </Alert>
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
                helperText="Minimum length of 8 characters"
                inputRef={register({ minLength: 8, required: true })}
              />
            </FormGroup>
            <Button
              disabled={isSubmitting || !isValid}
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleSubmit(onSubmit)}
            >
              <Box mr={1}>Primary</Box>
              {loading && <CircularProgress size={20} color="secondary" />}
            </Button>
          </form>
        </Grid>
      </Grid>
      <Snackbar open={open} autoHideDuration={6000}>
        <Alert severity="success">
          This is a success message!
        </Alert>
      </Snackbar>
    </Container>
  );
};
