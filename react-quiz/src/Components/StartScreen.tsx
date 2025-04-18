export interface StartScreenProps {
  numberOfQuestions: number;
}

export default function StartScreen({ numberOfQuestions }: StartScreenProps) {
  return (
    <div className="start">
      <h3>Welcome to the React quiz.</h3>
      <p>{numberOfQuestions} questions to test your React mastery</p>
      <button className="btn btn-ui">Let's Start</button>
    </div>
  );
}
