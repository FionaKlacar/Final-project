import React, { useState } from 'react';
import { socket } from '../socket';

export const MyForm = () => {
  const [value, setValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  function onSubmit(event) {
    event.preventDefault();
    setIsLoading(true);

    console.log('Submitting value:', value);

    socket.timeout(5000).emit('create-something', value, () => {
      console.log('create-something event emitted with value:', value);

      setIsLoading(false);
    });
  }

  return (
    <form onSubmit={onSubmit}>
      <input onChange={(e) => setValue(e.target.value)} />

      <button type="submit" disabled={isLoading}>Submit</button>
    </form>
  );
}