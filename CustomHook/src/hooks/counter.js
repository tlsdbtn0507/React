import { useEffect, useState } from "react";

const useCounter = (add = true) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => (add ? prevCounter + 1 : prevCounter - 1));
    }, 1000);

    return () => clearInterval(interval);
  }, [add]);
  return counter;
};

export default useCounter;
