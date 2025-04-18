export interface FinishScreenProps {
  points: number;
  maxPoints: number;
}

export default function FinishScreen({ points, maxPoints }: FinishScreenProps) {
  const percentage = (points / maxPoints) * 100;
  return (
    <div>
      <p>
        You scored <strong>{points}</strong> out of {maxPoints}{" "}
        {Math.ceil(percentage)}%
      </p>
    </div>
  );
}
