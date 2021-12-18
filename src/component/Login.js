import React, { useState } from 'react';
import { loginValidations } from '../validations/loginValidations'
import * as config from '../config/config'
import InlineError from "../Helpers/InlineError";
import { useHistory } from "react-router-dom";

export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState(null);
  const history = useHistory();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const validationResponse = loginValidations(email, password);
    setErrors(validationResponse.error);
    if (Object.keys(validationResponse.error).length === 0) {
      localStorage.setItem(config.STORAGE_TOKEN, "sdcToken");
      localStorage.setItem(config.STORAGE_NAME, "foo");
      setEmail('');
      setPassword('');
      history.push('/home');
    } else {
      document.getElementsByName(validationResponse.field)[0].focus();
    }
  };

  return (
    <div className="container">
      <div className="screen">
        <div className="screen__content">
          <form className="login" onSubmit={onSubmitHandler}>
            <div className="login__field">
              <div>
                <i class="login__icon fas fa-user"></i>
                <input
                  type="text"
                  className='formControl form-control login__input'
                  placeholder="Username"
                  value={email}
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              {errors && errors.email ? (
                <InlineError text={errors.email} />
              ) : (
                ''
              )}
            </div>
            <div className="login__field">
              <i className="login__icon fas fa-lock"></i>
              <div>
                <input
                  type="password"
                  className='formControl form-control login__input'
                  placeholder="Password"
                  value={password}
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {errors && errors.password ? (
                <InlineError text={errors.password} />
              ) : (
                ''
              )}
            </div>
            <button className="button login__submit">
              <span className="button__text">Log In Now</span>
              <i className="button__icon fas fa-chevron-right"></i>
            </button>
          </form>

        </div>
        <div className="screen__background">
          <span className="screen__background__shape screen__background__shape1"></span>
        </div>
      </div>
    </div>
  )
}