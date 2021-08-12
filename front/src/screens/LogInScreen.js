import React from "react";
import { makeStyles, Typography, TextField, Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(4),
  },

  title: {
    fontWeight: 700,
    fontSize: theme.spacing(3),
    margin: theme.spacing(4, 0, 6),
  },

  input: {
    marginBottom: theme.spacing(3),
  },
  btn: {
    marginTop: theme.spacing(4),
  },
}));

const schema = yup.object().shape({
  email: yup.string().email().required("Enter email"),
  password: yup.string().required("Enter password"),
});

export default function LogInScreen() {
  const classes = useStyles();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className={classes.container}>
      <Typography variant="h2" component="h2" className={classes.title}>
        Welcome Back!
      </Typography>

      <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <TextField
          error={errors.email ? true : false}
          label="E-mail"
          name="email"
          fullWidth
          className={classes.input}
          margin="dense"
          //   InputLabelProps={{
          //     shrink: true,
          //   }}
          // variant="filled"
          //   defaultValue={name}
          inputRef={register}
          helperText={errors.email?.message}
        />

        <TextField
          error={errors.password ? true : false}
          type="password"
          className={classes.input}
          label="Password"
          name="password"
          margin="dense"
          fullWidth
          // variant="filled"
          //   defaultValue={price}
          inputRef={register}
          helperText={errors.password?.message}
        />

        <Button
          className={classes.btn}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
        >
          Log In
        </Button>
      </form>
    </div>
  );
}
