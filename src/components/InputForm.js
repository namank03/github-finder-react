import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { incrementByAmount } from "../features/counter/counterSlice";

export default function InputForm() {
  const [customAmount, setCustomAmount] = useState("");
  const dispatch = useDispatch();
  function submitForm(e) {
    e.preventDefault();
    if (customAmount) {
      dispatch(incrementByAmount(parseInt(customAmount, 10)));
      setCustomAmount("");
    }
  }
  return (
    <form onSubmit={(e) => submitForm(e)}>
      <input
        type="number"
        value={customAmount}
        onChange={(e) => setCustomAmount(e.target.value)}
        className="outline-none shadow focus:shadow-lg mr-3 p-2"
      />
      <button
        type="submit"
        className="p-2 m-4 rounded-lg text-center bg-green-700 text-gray-50 text-lg">
        Increment by amount
      </button>
    </form>
  );
}
