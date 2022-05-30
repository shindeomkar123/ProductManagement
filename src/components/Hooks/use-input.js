import { useState } from "react";

const useInput = () => {
  const [enteredValue, setEnteredValue] = useState("");
  const [touched,setTouched] = useState(false);

  const enteredValueIsValid = touched && enteredValue.trim() === "";

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const blurHandler = (event) => {
    setTouched(true);
  };

  const resetHandler = () => {
    setEnteredValue("");
  };

  return {
    enteredValue,
    enteredValueIsValid,
    valueChangeHandler,
    blurHandler,
    resetHandler
  };
};

export default useInput;
