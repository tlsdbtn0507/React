import { useCallback, useState } from "react";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (method, handleData) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(method.url, method.obj && method.obj);

      if (!response.ok) {
        throw new Error("Request failed!");
      }

      const data = await response.json();
      handleData(data);
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  }, []);
  return { isLoading, error, sendRequest };
};

export default useHttp;
