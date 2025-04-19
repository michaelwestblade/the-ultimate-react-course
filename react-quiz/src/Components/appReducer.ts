import { AppActionTypes, QuestionInterface, Status } from "../const";

export interface AppState {
  questions: QuestionInterface[];
  status: Status;
  index: number;
  answer?: number;
  points: number;
  secondsRemaining: number;
}

export const initialState: AppState = {
  questions: [] as QuestionInterface[],
  status: Status.LOADING,
  index: 0,
  answer: undefined,
  points: 0,
  secondsRemaining: 0
};

export const reducer = (
  currentState = initialState,
  action: { type: string; payload: any }
): AppState => {
  switch (action.type) {
    case AppActionTypes.DATA_RECEIVED:
      return {
        ...currentState,
        ...currentState,
        questions: action.payload,
        status: Status.READY
      };
    case AppActionTypes.DATA_FAILED:
      return { ...currentState, status: Status.ERROR };
    case AppActionTypes.START:
      return {
        ...currentState,
        status: Status.ACTIVE,
        index: 0,
        answer: undefined,
        points: 0,
        secondsRemaining: currentState.questions.length * 30
      };
    case AppActionTypes.NEW_ANSWER:
      const currentQuestion: QuestionInterface =
        currentState.questions[currentState.index];
      const correctAnswer =
        currentQuestion && action.payload === currentQuestion?.correctOption;
      const points = correctAnswer ? currentQuestion.points : 0;

      if (currentState.index === currentState.questions.length - 1) {
        return {
          ...currentState,
          answer: action.payload,
          points: currentState.points + points,
          status: Status.FINISHED
        };
      }

      return {
        ...currentState,
        answer: action.payload,
        points: currentState.points + points
      };
    case AppActionTypes.NEXT_QUESTION:
      return {
        ...currentState,
        index: currentState.index + 1,
        answer: undefined
      };
    case AppActionTypes.TICK:
      const secondsRemaining = currentState.secondsRemaining - 1;

      return {
        ...currentState,
        secondsRemaining: currentState.secondsRemaining - 1,
        status: secondsRemaining === 0 ? Status.FINISHED : currentState.status
      };
    default:
      return currentState;
  }

  return currentState;
};
