import { QuestionInterface } from "../../const";
import Options from "./Options";

export interface QuestionProps {
  question: QuestionInterface;
  handleQuestionAnswer: (answer: number) => void;
  answer?: number;
}

export default function Question({
  question,
  handleQuestionAnswer,
  answer
}: QuestionProps) {
  const correctAnswer = question.correctOption;
  return (
    <div>
      <h4>{question.question}</h4>
      <Options
        handleQuestionAnswer={handleQuestionAnswer}
        options={question.options}
        answer={answer}
        correctAnswer={correctAnswer}
      />
    </div>
  );
}
