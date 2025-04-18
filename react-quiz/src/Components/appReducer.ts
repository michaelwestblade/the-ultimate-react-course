import { AppActionTypes, QuestionInterface, Status } from "../const";

export interface AppState {
  questions: [];
  status: Status;
  index: number;
  answer?: number;
  points: number;
}

export const initialState: AppState = {
  questions: [],
  status: Status.LOADING,
  index: 0,
  answer: undefined,
  points: 0
};

export const reducer = (
  currentState = initialState,
  action: { type: string; payload: any }
): AppState => {
  switch (action.type) {
    case AppActionTypes.DATA_RECEIVED:
      return {
        ...currentState,
        questions: action.payload,
        status: Status.READY
      };
    case AppActionTypes.DATA_FAILED:
      return { ...currentState, status: Status.ERROR };
    case AppActionTypes.START:
      return { ...currentState, status: Status.ACTIVE, index: 0 };
    case AppActionTypes.NEW_ANSWER:
      const currentQuestion: QuestionInterface =
        currentState.questions[currentState.index];
      const correctAnswer =
        currentQuestion && action.payload === currentQuestion?.correctOption;
      const points = correctAnswer ? currentQuestion.points : 0;
      return {
        ...currentState,
        answer: action.payload,
        points: currentState.points + points
      };
    default:
      return currentState;
  }

  return currentState;
};
