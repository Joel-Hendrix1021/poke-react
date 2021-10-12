import { useEffect, useState } from "react";

export  function useFech(url) {

    const [state, setState] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setError] = useState(false)

  useEffect(() => {
     setIsLoading(true)
    getFechData(url)
    .then(res=> setState(res))
    .catch(() =>setError(true))
    .finally(() => setIsLoading(false))
    
    
  }, [url]);

 
  const getFechData = async (n) => {
 
      const res = await fetch(n);
      const data = res.json();
      return data;

  };
  return { state, isLoading, isError }
}
