import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Counter = () => {
  const [count, setCount] = useState(10);

  useEffect(() => {
    console.log('ComponentDidMount');

    return () => {
      console.log('ComponentWillUnmount');
    };
  }, []);

  // useEffect(() => {
  //   console.log('ComponentDidUpdate');
  // }, [count]);

  const handleAdd = () => {
    setCount(count + 1);
  };

  const handleRemove = () => {
    setCount(count - 1);
  };

  return (
    <>
      <h1>
        El valor actual es:
        {count}
      </h1>
      <button type="button" onClick={handleAdd}>
        {' '}
        + 1
      </button>
      <button type="button" onClick={handleRemove}>
        {' '}
        - 1
      </button>
      <Link to="/">home</Link>
    </>
  );
};
export default Counter;
