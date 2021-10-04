import { useEffect, useState } from "react";

export  function useFech(url) {
  
    const [state, setState] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    

  useEffect(() => {
     setIsLoading(true)
    getFechData(url)
    .then(res=> setState(res))
    .finally(() => setIsLoading(false))
    
  }, [url]);

 
  const getFechData = async (n) => {
    const res = await fetch(n);
    const data = res.json();
    return data;
  };
  return { state, isLoading }
}
