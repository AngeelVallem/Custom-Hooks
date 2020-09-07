import { useState } from "react";

export const useCounter = (initialState = 0) => {

  const [state, setState] = useState(initialState);

  const increment = (f = 1) => {
    if(state === 30){
      setState(30)
    }else{
      setState(state + f)
    }
    
  };

  const decrement = (f = 1) => {
    if(state === 1){
      alert("Can't < 1")
      setState(f)
    }else{
      setState(state - f)
    }
    
  };

  const reset = (f = 0) => {
    setState(f);
  };

  return {
    state,
    increment,
    decrement,
    reset,
  };
};
