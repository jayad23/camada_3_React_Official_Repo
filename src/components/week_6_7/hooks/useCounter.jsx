import { useState } from "react";
export const useCounter = () => {
  const [counter, setCounter] = useState(0);
  const handlerCounter = () => setCounter(counter + 1);
  return [counter, handlerCounter]
}