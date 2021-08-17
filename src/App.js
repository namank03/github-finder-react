import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import InputForm from "./components/InputForm";
import { increment, decrement, reset } from "./features/counter/counterSlice";
import Button from "./layout/Button";

function App() {
  // @ts-ignore
  const value = useSelector((state) => state.counterStore.value);

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-8xl text-gray-500 p-6 text-center">{value}</h2>
      <Button text="Increment" color="red" func={increment} />
      <InputForm />
      <div>
        <Button text="Decrement" color="red" func={decrement} />
        <Button text="reset" color="red" func={reset} />
      </div>
    </div>
  );
}

export default App;
