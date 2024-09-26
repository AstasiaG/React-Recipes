import { useState } from 'react';

export const useFetching = (callback: ({...args}) => void) => {
  const [error, setError] = useState('');

  const fetching = async ({...args}) => {
    try {

      await callback({...args})
    } catch (e) {

      setError(e.message);
    } 
  }

  return [fetching, error] as const;
}