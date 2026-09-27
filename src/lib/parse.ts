import type {ArduinoMessage} from "../types/message";


export function parseArduinoMessage(message: string): ArduinoMessage | null {
        //removing the whitespace from the message in the beginning and end of the message
        const clean = message.trim();
        //checking if the message is "BEAT" and returning the corresponding object
        if (clean ==="BEAT"){
            return {type: "beat"};
        }
        //checking if the message is "NOFINGER" and returning the corresponding object
        if (clean ==="NOFINGER"){
            return {type: "noFinger"};
        }
        //checking if the message starts with "BPM:" and extracting the bpm value
        if (clean.startsWith("BPM:")){
        //making the the bpm value an integer and checking if it's a valid number
            const bpmValue = parseInt(clean.split(":")[1]);
            if (!isNaN(bpmValue)) {
                return { type: "bpm", bpm: bpmValue };
            }
        }
        return null;

}