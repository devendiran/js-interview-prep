import { useState, useRef } from "react";

function debounce(fn, delay) {
  let timer;
  return function (...args) {
    window.clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(null, args);
    }, delay);
  };
}

export default function DeboucedInput() {
  const [name, setName] = useState("test");
  const apiCall = useRef(null);
  if (!apiCall.current) {
    apiCall.current = debounce(function (value) {
      console.log(value, "....event");
    }, 2000);
  }

  const updateName = (value) => {
    setName(value);
    apiCall.current(value);
  };
  return (
    <>
      <input
        type="text"
        name="debouncer"
        value={name}
        onChange={(event) => updateName(event.target.value)}
      />
      {name} - changes
    </>
  );
}
