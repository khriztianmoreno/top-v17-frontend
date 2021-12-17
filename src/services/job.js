const URL_BASE = process.env.REACT_APP_API_URL_BASE;

const applyForJob = (note) => {
  const payload = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
    body: JSON.stringify(note),
  };

  return fetch(`${URL_BASE}/api/notes`, payload);
};

const job = {
  applyForJob,
};

export default job;
