import React, { useState } from "react";

const UseStateTask = () => {
  const [color, setColor] = useState("");

  return (
    <div className={`flex space-x-4 w-full h-screen bg-${color}-800`}>
      <p>Ungu solih</p>
      <button
        className="border bg-red-800 py-4 px-6"
        onClick={() => {
          setColor("red");
        }}
      >
        Ulaan
      </button>
      <button
        className="border bg-blue-800 py-4 px-6"
        onClick={() => {
          setColor("blue");
        }}
      >
        Tsenher
      </button>
      <button
        className="border bg-green-800 py-4 px-6"
        onClick={() => {
          setColor("green");
        }}
      >
        Nogoon
      </button>

      <p>
        {color == "red" 
        ? "123"
         :color == "blue" 
         ? "456"
         :color == "green" 
         ? "789"
         :"1000"}
      </p>
    </div>
  );
};

export default UseStateTask;