import { useEffect } from "react";

export interface TimerProps {
  handleTick: () => void;
  secondsRemaining: number;
}

export default function Timer({ handleTick, secondsRemaining }: TimerProps) {
  useEffect(() => {
    const intervalId = setInterval(function () {
      handleTick();
    }, 1000);

    return () => clearInterval(intervalId);
  }, [handleTick]);
  return <div className="timer">{secondsRemaining}</div>;
}
