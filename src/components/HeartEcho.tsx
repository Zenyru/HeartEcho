"use client";
import React, { useState } from "react";
import { parseArduinoMessage } from "../lib/parse";
import { useRef } from "react";

export default function HeartEcho() {
  const [isCalming, setIsCalming] = useState(0);

  // Using useRef to store the timer ID for the demo
  const timer = useRef<number | null>(null);
  const fakeBpm = useRef<number>(75); // Initial fake BPM value

  //handling the messages received from the arduino and parsing them using the parseArduinoMessage function
  const handleMessage = (message: string) => {
    const parsedMessage = parseArduinoMessage(message);
    if (parsedMessage) {
      console.log("Parsed message:", parsedMessage);
    } else {
      return;
    }
  };

  //////////////////////////////////////////////////////
  //STARTING THE DEMO
  const startDemo = () => {
    if (timer.current) return; // Prevent multiple intervals from being set
    timer.current = window.setInterval(() => {
      fakeBpm.current = fakeBpm.current + (Math.random() * 2 - 1); // Randomly adjust BPM by ± 1

      handleMessage("BEAT");
      handleMessage("BPM:" + Math.round(fakeBpm.current));
    }, 800);
  };
  ///////////////////////////////////////////////////////

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <p className="text-2xl font-bold text-zinc-800 dark:text-zinc-200">
          Welcome to <span className="text-emerald-300">HeartEcho</span>!
        </p>

        <button
          className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            handleMessage("BPM:72");
          }}
        >
          Calm Down
        </button>

        <p className="text-2xl font-bold text-zinc-800 dark:text-zinc-200">
          this is{isCalming}
        </p>
      </main>
    </div>
  );
}
