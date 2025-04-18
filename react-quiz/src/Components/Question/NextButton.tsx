export interface NextButtonProps {
  answer?: number;
  handleNextQuestion: () => void;
}

export default function NextButton({
  answer,
  handleNextQuestion
}: NextButtonProps) {
  return (
    <div>
      {typeof answer !== "undefined" && (
        <button className="btn btn-ui" onClick={handleNextQuestion}>
          Next Question
        </button>
      )}
    </div>
  );
}
