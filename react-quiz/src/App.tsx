import React, { useEffect, useReducer } from "react";
import Header from "./Components/Layout/Header";
import Error from "./Components/Error";
import Main from "./Main";
import { AppActionTypes, QuestionInterface, Status } from "./const";
import Loader from "./Components/Loader";
import StartScreen from "./Components/Layout/StartScreen";
import Question from "./Components/Question/Question";
import { initialState, reducer } from "./Components/appReducer";
import NextButton from "./Components/Question/NextButton";
import Progress from "./Components/Layout/Progress";
import FinishScreen from "./Components/Layout/FinishScreen";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { questions, status, index, answer, points } = state;

  const numberOfQuestions = questions.length;
  const totalPoints = questions.reduce((total, question) => {
    return total + question.points;
  }, 0);

  const handleStartQuiz = () => {
    dispatch({ type: AppActionTypes.START, payload: status });
  };

  const handleQuestionAnswer = (answer: number) => {
    dispatch({ type: AppActionTypes.NEW_ANSWER, payload: answer });
  };

  const handleNextQuestion = () => {
    dispatch({ type: AppActionTypes.NEXT_QUESTION, payload: index });
  };

  const handleRestart = () => {
    dispatch({ type: AppActionTypes.START, payload: status });
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
          <>
            <Progress
              numberOfQuestions={numberOfQuestions}
              currentQuestion={index + 1}
              points={points}
              totalPoints={totalPoints}
            />
            <Question
              handleQuestionAnswer={handleQuestionAnswer}
              question={questions[index]}
              answer={answer}
            />
            {index + 1 < numberOfQuestions && (
              <NextButton
                handleNextQuestion={handleNextQuestion}
                answer={answer}
              />
            )}
          </>
        )}
        {status === Status.FINISHED && (
          <FinishScreen
            handleRestart={handleRestart}
            points={points}
            maxPoints={totalPoints}
          />
        )}
        {status === Status.ERROR && <Error />}
      </Main>
    </div>
  );
}

export default App;
