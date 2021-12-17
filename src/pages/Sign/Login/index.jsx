import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/fontawesome-free-solid';

import useForm from '../../../hooks/useForm';
import authService from '../../../services/auth';

const Login = () => {
  const navigate = useNavigate();
  const [hasError, setHasError] = useState(null);
  const { form, handleChange } = useForm({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await authService.loginAccount(form);

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token);
        navigate('/');
      } else {
        setHasError(data.message);
      }
    } catch (error) {
      setHasError(error);
    }
  };

  return (
    <div className="login-page">
      <main>
        <div className="login-block">
          <img src="./img/logo.png" alt="Logo" />
          <h1>Log into your account</h1>

          {hasError ? <p className="error">{hasError}</p> : null}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <div className="input-group">
                <span className="input-group-addon">
                  <FontAwesomeIcon icon={faEnvelope} size="1x" />
                </span>
                <input
                  name="email"
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  onChange={handleChange}
                />
              </div>
            </div>

            <hr className="hr-xs" />

            <div className="form-group">
              <div className="input-group">
                <span className="input-group-addon">
                  <FontAwesomeIcon icon={faLock} size="1x" />
                </span>
                <input
                  name="password"
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  onChange={handleChange}
                />
              </div>
            </div>

            <button className="btn btn-primary btn-block" type="submit">
              Login
            </button>
          </form>
        </div>

        <div className="login-links">
          <Link to="/" className="pull-left">
            Forget Password?
          </Link>
          <Link to="/register" className="pull-right">
            Register an account
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Login;
