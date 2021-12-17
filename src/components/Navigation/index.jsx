import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { faBars } from '@fortawesome/fontawesome-free-solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { getUserFromLocalStorage, logout } from '../../context/actions';
import { useAppState, useAppDispatch } from '../../context/store';

const Navigation = () => {
  const navigate = useNavigate();
  const { user } = useAppState();
  const dispatch = useAppDispatch();

  const handleCloseSession = () => {
    logout(dispatch);
    navigate('/');
  };

  useEffect(() => {
    getUserFromLocalStorage(dispatch);
  }, []);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="pull-left">
          <Link className="navbar-toggle" to="/" data-toggle="offcanvas">
            <FontAwesomeIcon icon={faBars} />
          </Link>
          <div className="logo-wrapper">
            <Link className="logo" to="/">
              <img src="/img/logo.png" alt="logo" />
            </Link>
            <Link className="logo-alt" to="/">
              <img src="/img/logo-alt.png" alt="logo-alt" />
            </Link>
          </div>
        </div>
        <div className="pull-right user-login">
          {user ? (
            <button
              onClick={handleCloseSession}
              className="btn btn-sm btn-primary"
              type="button"
            >
              <span>{user.fullname}</span>
            </button>
          ) : (
            <Link to="/login" className="btn btn-sm btn-primary">
              login
            </Link>
          )}
          or
          <Link to="/register"> register</Link>
        </div>
        <ul className="nav-menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a href="/jobs">Position</a>
            <ul>
              <li>
                <Link to="/jobs">Browse jobs</Link>
              </li>
              <li>
                <Link to="/jobs/detail/1020">Job detail</Link>
              </li>
              <li>
                <Link to="/jobs/apply/1020">Apply for job</Link>
              </li>
              {/* {
                  this.state.isAuth && (
                    <li><Link to="/jobs/create">Post a job</Link></li>
                  )
                } */}
              <li>
                <Link to="/jobs/create">Post a job</Link>
              </li>
              <li>
                <Link to="/candidates">Candidates</Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
