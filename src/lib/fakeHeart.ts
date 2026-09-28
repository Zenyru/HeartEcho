
export function startFakeHeart(onLine: (line: string) => void){

    let bpm: number = 75;
    let timerId: ReturnType<typeof setTimeout>
    const tick = () => {
        onLine("BEAT");
        onLine("BPM:" + Math.round(bpm))
    }
    timerId = setInterval(tick, 500);

}