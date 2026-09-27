// defining the types of messages that's sent from the arduino to the web
export type ArduinoMessage =
  | { type: "bpm"; bpm: number }
  | { type: "noFinger" }
  | { type: "beat" };


//defining the type of signal messages of the arduino to the host machine
export type signalMessage = "waiting" | "good" | "unsteady" | "noFinger";


