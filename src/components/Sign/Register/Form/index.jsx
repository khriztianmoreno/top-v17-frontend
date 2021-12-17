import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faLock,
  faUser,
} from '@fortawesome/fontawesome-free-solid';

import useForm from '../../../../hooks/useForm';

const FormRegister = () => {
  const { form, handleChange } = useForm({});

  return (
    <form>
      <div className="form-group">
        <div className="input-group">
          <span className="input-group-addon">
            <FontAwesomeIcon icon={faUser} size="1x" />
          </span>
          <input
            name="name"
            type="text"
            value={form?.name}
            defaultValue={form?.name}
            className="form-control"
            placeholder="Your name"
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <hr className="hr-xs" />

      <div className="form-group">
        <div className="input-group">
          <span className="input-group-addon">
            <FontAwesomeIcon icon={faEnvelope} size="1x" />
          </span>
          <input
            name="email"
            type="email"
            value={form?.email}
            defaultValue={form?.email}
            className="form-control"
            placeholder="Email"
            onChange={handleChange}
            required
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
            required
          />
        </div>
      </div>

      <button className="btn btn-primary btn-block" type="submit">
        Login
      </button>
    </form>
  );
};

export default FormRegister;
