import { useEffect, useState } from 'react';
import { fetchData } from './network';

export const useFetch = (initialPath = undefined) => {
  const [path, setPath] = useState(initialPath);
  const [data, setData] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    if (path)
      fetchData(path)
        .then((data) => setData(data))
        .catch((error) => setError(error));
  }, [path]);

  return { data, error, setPath };
};
