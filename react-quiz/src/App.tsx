import React, { useEffect, useReducer } from "react";
import Header from "./Components/Header";
import Error from "./Components/Error";
import Main from "./Main";
import { QuestionInterface, Status } from "./const";
import Loader from "./Components/Loader";
import StartScreen from "./Components/StartScreen";
import Question from "./Components/Question/Question";

enum AppActionTypes {
  DATA_RECEIVED = "DATA_RECEIVED",
  DATA_FAILED = "DATA_FAILED",
  START = "START",
  NEW_ANSWER = "NEW_ANSWER"
}

export interface AppState {
  questions: [];
  status: Status;
  index: number;
  answer?: number;
  points: number;
}

const initialState: AppState = {
  questions: [],
  status: Status.LOADING,
  index: 0,
  answer: undefined,
  points: 0
};

const reducer = (
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

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { questions, status, index, answer, points } = state;

  const numberOfQuestions = questions.length;

  const handleStartQuiz = () => {
    dispatch({ type: AppActionTypes.START, payload: status });
  };

  const handleQuestionAnswer = (answer: number) => {
    dispatch({ type: AppActionTypes.NEW_ANSWER, payload: answer });
  };

  useEffect(() => {
    async function fetchQuestions() {
      try {
        const res = await fetch("http://localhost:9000/questions");
        const data: QuestionInterface[] = await res.json();
        dispatch({ type: AppActionTypes.DATA_RECEIVED, payload: data });
      } catch (error) {
        console.log(error);
        dispatch({ type: AppActionTypes.DATA_FAILED, payload: error });
      }
    }

    fetchQuestions();
  }, []);

  return (
    <div className="App">
      <Header />

      <Main>
        {status === Status.LOADING && <Loader />}
        {status === Status.READY && (
          <StartScreen
            numberOfQuestions={numberOfQuestions}
            handleStartQuiz={handleStartQuiz}
          />
        )}
        {status === Status.ACTIVE && (
          <Question
            handleQuestionAnswer={handleQuestionAnswer}
            question={questions[index]}
            answer={answer}
          />
        )}
        {status === Status.ERROR && <Error />}
      </Main>
    </div>
  );
}

export default App;
