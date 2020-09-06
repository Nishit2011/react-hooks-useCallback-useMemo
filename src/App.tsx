import React, { useState, useCallback } from "react";
import "./styles.css";
import Title from "./components/Title";
import Count from "./components/Count";
import Button from "./components/Button";

export default function App() {
  const [countAge, setCountAge] = useState(0);
  const [countSalary, setCountSalary] = useState(0);

  //incrementAge and incrementSalary functions are called everytime
  //the button component is clicked. we need to optimise it
  //so that unnecessary function calls are avoided
  //useCallback caches the function till countAge changes to a new value
  //hence this wont be called on every render, especially when salary changes
  //thus we limit
  const incrementAge = useCallback(() => {
    setCountAge(countAge + 1);
  }, [countAge]);

  const incrementSalary = useCallback(() => {
    setCountSalary(countSalary + 1);
  }, [countSalary]);

  return (
    <div className="App">
      <Title />
      <Count text="age" val={countAge} />
      <Button btnName="Age" handleClick={incrementAge} />
      <Count text="salary" val={countSalary} />
      <Button btnName="Salary" handleClick={incrementSalary} />
    </div>
  );
}
