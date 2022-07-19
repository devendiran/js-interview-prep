import { useEffect, useState } from "react";

const useApi = (url) => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((res) => setResponse(res))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return [loading, response, error];
};

export default useApi;
