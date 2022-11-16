import React from 'react';
import Form from '../../components/FormComponent/Form';
import { RegisterContainer } from './RegisterStyles';

function Register() {
  return (
    <RegisterContainer>
      <Form currentPage='register'/>
    </RegisterContainer>
  )
}

export default Register;
