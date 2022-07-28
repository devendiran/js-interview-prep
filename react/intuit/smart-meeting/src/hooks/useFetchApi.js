import { useEffect, useState } from "react";

const useFetchApi = (url, query, variables) => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(url, {
      method: "POST",
      headers: {
        Authorization: `bearer a123gjhgjsdf6576`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        query: query,
        variables: variables
      })
    })
      .then((res) => res.json())
      .then((res) => res.data ? res.data : res)
      .then((res) => setResponse(res))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return [loading, response, error];
};

export default useFetchApi;
