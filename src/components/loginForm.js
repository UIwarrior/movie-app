import React from "react";
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';

const LoginForm = () => {
  return (
    <>
      <FormControl>
        <InputLabel htmlFor="my-input">Email address</InputLabel>
        <Input id="my-input" aria-describedby="my-helper-text" />
        <FormHelperText id="my-helper-text">
          We'll never share your email.q
        </FormHelperText>
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input-password">Password</InputLabel>
        <Input id="my-input-password" aria-describedby="my-helper-text" />
      </FormControl>
      <Button>Login</Button>
    </>
  );
};
export default LoginForm;
