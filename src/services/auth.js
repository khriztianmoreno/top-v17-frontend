const URL_BASE = process.env.REACT_APP_API_URL_BASE;

const loginAccount = ({ email, password }) => {
  const payload = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  };

  return fetch(`${URL_BASE}/auth/local/login`, payload);
};

// const registerAccount = (user) => {};

// const forgotPassword = (email) => {};

const auth = {
  loginAccount,
  // registerAccount,
  // forgotPassword,
};

export default auth;
