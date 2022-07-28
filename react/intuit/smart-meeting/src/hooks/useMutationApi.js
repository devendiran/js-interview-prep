import { useState } from "react";

const useMutationApi = (url) => {
  const [loading, setLoading] = useState(false);

  const commit = function (data) {
    setLoading(true);
    return fetch(url, {
      method: "POST",
      headers: {
        Authorization: `bearer a123gjhgjsdf6576`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        query: data.query,
        variables: data.variables
      })
    })
      .then((res) => res.json())
      .finally(() => setLoading(false));
  };

  return [loading, commit];
};

export default useMutationApi;
