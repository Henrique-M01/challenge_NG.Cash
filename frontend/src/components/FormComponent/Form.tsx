import React from 'react';
import { FormContainer } from './FormStyled';

interface IFormProps {
  currentPage: string;
}

function Form(props: IFormProps) {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <FormContainer>
      {props.currentPage === 'login' ? null : (<h1>Register Now!</h1>)}
      <form>
        <label htmlFor='input-username'>
          Username
          <input
            id='input-username'
            type="text" 
            placeholder="Username"
            required 
            minLength={3}
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
        </label>
        <label htmlFor='input-password'>
          Password
          <input
            id='input-password'
            type="password" 
            placeholder="Password"
            required
            minLength={8}
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </label>
        <button
          type="submit"
        >
          {props.currentPage === 'login' ? 'Login' : 'Register'}
        </button>
      </form>
      {props.currentPage === 'login' ? (
        <button type="button">Register</button>
      ) : null}
    </FormContainer>
  )
}

export default Form;
