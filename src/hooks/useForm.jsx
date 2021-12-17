import { useState, useCallback } from 'react';

const useForm = (initialState = {}) => {
  const [form, setForm] = useState(initialState);

  const handleChange = useCallback((evt) => {
    const { name, value: inputValue, type, checked } = evt.target;

    const value = type === 'checkbox' ? checked : inputValue;

    setForm({
      ...form,
      [name]: value,
    });
  });

  return {
    form,
    handleChange,
  };
};

export default useForm;
