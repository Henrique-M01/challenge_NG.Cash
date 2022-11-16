import React from 'react';
import { LoginContainer } from './LoginStyles';

function Login() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <LoginContainer>
      <h1>NG.Cash</h1>
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
          Login
        </button>
      </form>
      <button
        type="button"
      >
        Register
      </button>
    </LoginContainer>
  )
}

export default Login;
