import { QuestionInterface } from "../../const";

export interface OptionsProps {
  options: string[];
  handleQuestionAnswer: (answer: string) => void;
}

export default function Options({
  options,
  handleQuestionAnswer
}: OptionsProps) {
  return (
    <div className="options">
      {options.map((option) => (
        <button
          onClick={() => handleQuestionAnswer(option)}
          key={option}
          className="btn btn-option"
        >
          {option}
        </button>
      ))}
    </div>
  );
}
