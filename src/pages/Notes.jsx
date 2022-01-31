/* eslint-disable */
import { useState, useEffect } from 'react';

import socket from '../utils/socket';

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [input, setInput] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      method: 'POST',
      body: JSON.stringify({ content: input }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmdWxsbmFtZSI6IktIUklaVElBTiBtb3Jlbm8iLCJyb2xlIjoidmlld2VyIiwiZW1haWwiOiJraHJpenRpYW5tb3Jlbm8rdG9rZW5AZ21haWwuY29tIiwiaWF0IjoxNjQzNjM5MzI2LCJleHAiOjE2NDM2NDY1MjZ9.fXfLa0ZsIamUkUgrVS0ps2s7SdkSmWxOVaPHd_4WILA`,
      },
    };

    try {
      const response = await fetch('http://localhost:8080/api/notes', payload);
      const data = await response.json();
      console.log('🚀 ~ file: Notes.jsx ~ line 25 ~ handleSubmit ~ data', data);
    } catch (error) {
      console.log(
        '🚀 ~ file: Notes.jsx ~ line 27 ~ handleSubmit ~ error',
        error,
      );
    }
  };

  useEffect(() => {
    socket.emit('connection', 'Cristian');
  }, []);

  useEffect(() => {
    socket.on('note:create', (data) => {
      setNotes([...notes, data]);
    });

    return () => {
      socket.off('note:create');
    };
  }, [notes]);

  return (
    <div>
      <h1>Notes</h1>

      <ul>
        {notes.map((note) => (
          <li key={note._id}>{note.content}</li>
        ))}
      </ul>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="content"
          placeholder="Title"
          onChange={handleChange}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Notes;
