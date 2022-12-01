import { useState, useEffect } from "react"
import axios from 'axios'
export const useGetData = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getData = () => {
    setIsLoading(true);
    axios.get(url)
      .then(res => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch(err => {
        setError(err);
        setIsLoading(false);
      })
  }

  useEffect(() => {
    getData();
  }, [url]);

  return { data, isLoading, error }

}