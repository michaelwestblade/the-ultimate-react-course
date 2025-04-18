export interface FinishScreenProps {
  points: number;
  maxPoints: number;
  handleRestart: () => void;
}

export default function FinishScreen({
  points,
  maxPoints,
  handleRestart
}: FinishScreenProps) {
  const percentage = (points / maxPoints) * 100;
  return (
    <div>
      <p className="result">
        You scored <strong>{points}</strong> out of {maxPoints} (
        {Math.ceil(percentage)}%)
      </p>
      <button className="btn btn-ui" onClick={handleRestart}>
        Restart quiz
      </button>
    </div>
  );
}
