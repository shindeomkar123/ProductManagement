import { useState } from "react";

const useHttp = (requestConfig, applyData) => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : "GET",
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
        headers: requestConfig.headers ? requestConfig.headers : null,
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      const data = await response.json();

      applyData(data);

      setLoading(false);
    } catch (error) {
      console.log('Error',error)
      setError(error);
      setLoading(false);
    }
  };
  
  return { sendRequest, isLoading, error };
};

export default useHttp;
