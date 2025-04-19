import { useEffect } from "react";

export interface TimerProps {
  handleTick: () => void;
  secondsRemaining: number;
}

export default function Timer({ handleTick, secondsRemaining }: TimerProps) {
  const minutes = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;
  useEffect(() => {
    const intervalId = setInterval(function () {
      handleTick();
    }, 1000);

    return () => clearInterval(intervalId);
  }, [handleTick]);
  return (
    <div className="timer">
      {minutes < 10 && "0"}
      {minutes}:{seconds < 10 && "0"}
      {seconds}
    </div>
  );
}
