import React from 'react';
import Form from '../../components/FormComponent/Form';
import { LoginContainer } from './LoginStyles';

function Login() {

  return (
    <LoginContainer>
      <h1>NG.Cash</h1>
      <Form currentPage='login'/>
    </LoginContainer>
  )
}

export default Login;
