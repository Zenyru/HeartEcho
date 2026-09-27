"use client";
import React, { useState } from "react";
import {parseArduinoMessage} from "../lib/parse";

export default function HeartEcho() {
  const [isCalming, setIsCalming] = useState(0);

  //handling the messages received from the arduino and parsing them using the parseArduinoMessage function
    const handleMessage = (message: string) => {
       const parsedMessage = parseArduinoMessage(message);
       if (parsedMessage) {
        console.log("Parsed message:", parsedMessage);
       }else{
        return
       }
    }

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
