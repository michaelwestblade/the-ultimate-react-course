import { QuestionInterface } from "../../const";

export interface OptionsProps {
  options: string[];
  handleQuestionAnswer: (answer: number) => void;
  correctAnswer: number;
  answer?: number;
}

export default function Options({
  options,
  handleQuestionAnswer,
  answer,
  correctAnswer
}: OptionsProps) {
  const hasAnswered = typeof answer !== "undefined";
  return (
    <div className="options">
      {options.map((option, index) => (
        <button
          onClick={() => handleQuestionAnswer(index)}
          key={option}
          disabled={typeof answer !== "undefined"}
          className={`btn btn-option ${index === answer ? "answer" : ""} ${hasAnswered ? (index === correctAnswer ? "correct" : "wrong") : ""}`}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
