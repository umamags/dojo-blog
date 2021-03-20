import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then(res => {
          if (!res.ok) {
            throw Error("could not fetch the data");
          }
          return res.json();
        })
        .then(data => {
          setData(data);
          setPending(false);
          setError(null);
        })
        .catch(err => {
          console.log(err.message);
          setPending(false);
          setError(err.message);
        })
    }, 1000);
  }, [url]);

  return {data, isPending, error};
}

export default useFetch;
