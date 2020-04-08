import React from 'react'
import LoginForm from '../../containers/LoginForm/LoginForm'
import style from './Login.module.css'

const Login = ({ children }) => (
  <div className={style.Login}>
    <LoginForm />
    <br />
  </div>
);

export default Login