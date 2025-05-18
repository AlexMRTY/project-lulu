"use client";
import {useState} from "react";

const Timer: React.FC = () => {
  const [time, setTime] = useState(0);

  return (
    <div className="">
      <span id="timer-clock" className="text-4xl font-bold text-center">{time}</span>
      <div className="flex justify-center mt-4">
        <button
          id="timer-start"
          className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
          onClick={() => {
            setTime((prev) => prev + 1);
          }}
        >
          Start
        </button>
        <button
          id="timer-stop"
          className="bg-red-500 text-white px-4 py-2 rounded"
          onClick={() => {
            setTime(0);
          }}
        >
          Stop
        </button>
      </div>
    </div>
  )

};

export default Timer;