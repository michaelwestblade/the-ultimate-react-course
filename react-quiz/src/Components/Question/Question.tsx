import { QuestionInterface } from "../../const";
import Options from "./Options";

export interface QuestionProps {
  question: QuestionInterface;
}

export default function Question({ question }: QuestionProps) {
  const handleQuestionAnswer = (answer: string) => {};

  return (
    <div>
      <h4>{question.question}</h4>
      <Options
        handleQuestionAnswer={handleQuestionAnswer}
        options={question.options}
      />
    </div>
  );
}
