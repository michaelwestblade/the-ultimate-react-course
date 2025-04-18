export interface StartScreenProps {
  numberOfQuestions: number;
  handleStartQuiz: () => void;
}

export default function StartScreen({
  numberOfQuestions,
  handleStartQuiz
}: StartScreenProps) {
  return (
    <div className="start">
      <h3>Welcome to the React quiz.</h3>
      <p>{numberOfQuestions} questions to test your React mastery</p>
      <button onClick={handleStartQuiz} className="btn btn-ui">
        Let's Start
      </button>
    </div>
  );
}
