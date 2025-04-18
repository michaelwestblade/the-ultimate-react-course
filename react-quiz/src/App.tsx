import React, { useEffect, useReducer } from "react";
import Header from "./Components/Header";
import Error from "./Components/Error";
import Main from "./Main";
import { AppActionTypes, QuestionInterface, Status } from "./const";
import Loader from "./Components/Loader";
import StartScreen from "./Components/StartScreen";
import Question from "./Components/Question/Question";
import { initialState, reducer } from "./Components/appReducer";

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
