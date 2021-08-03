import React from 'react';
import { useHistory } from 'react-router';

import { useAuth } from '../../providers/Auth';
import './Login.styles.css';

const LoginPage = () => {
  const { login } = useAuth();
  const history = useHistory();

  function authenticate(event) {
    event.preventDefault();
    login();
    history.push('/secret');
  }

  return (
    <section className="login">
      <h1>Please login</h1>
      <form onSubmit={authenticate} className="login-form">
        <div className="form-group">
          <label htmlFor="username">
            <strong>username </strong>
            <input required type="text" id="username" />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="password">
            <strong>password </strong>
            <input required type="password" id="password" />
          </label>
        </div>
        <button type="submit">login</button>
      </form>
    </section>
  );
}

export default LoginPage;
