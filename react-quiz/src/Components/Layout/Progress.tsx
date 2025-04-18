export interface ProgressProps {
  numberOfQuestions: number;
  currentQuestion: number;
  points: number;
  totalPoints: number;
}

export default function Progress({
  numberOfQuestions,
  currentQuestion,
  points,
  totalPoints
}: ProgressProps) {
  return (
    <header className="progress">
      <p>
        Question <strong>{currentQuestion}</strong>/{numberOfQuestions}
      </p>
      <p>
        <strong>{points}</strong> / {totalPoints}
      </p>
    </header>
  );
}
