import React, { useEffect, useState } from "react";
import Questions from "./Questions";
import "../styles/EachQuiz.css";

import { MoveNextQuestion, MovePrevQuestion } from "../hooks/FetchQuestion";
import { PushAnswer } from "../hooks/setResult";

/** redux store import */
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";

const EachQuiz = () => {
  const [check, setChecked] = useState(undefined);
  // const trace = useSelector(state => state.questions.trace);
  //const state = useSelector(state => state);
  const result = useSelector((state) => state.result.result);
  const { queue, trace } = useSelector((state) => state.questions);
  const dispatch = useDispatch();
  const quiName = useSelector((state) => state.quizName.quName);

  useEffect(() => {
    console.log(result);
  });

  function onNext() {
    //console.log('On next click')
    if (trace < queue.length) {
      /** increase the trace value by one using MoveNextAction */
      dispatch(MoveNextQuestion());
      /** insert a new result in the array.  */
      if (result.length <= trace) {
        dispatch(PushAnswer(check));
      }
    }
    /** reset the value of the checked variable */
    setChecked(undefined);
  }

  function onPrev() {
    console.log("On onPrev click");
    if (trace > 0) {
      /** decrease the trace value by one using MovePrevQuestion */
      dispatch(MovePrevQuestion());
    }
  }

  function onChecked(check) {
    console.log(check);
    setChecked(check);
  }

  if (result.length && result.length >= queue.length) {
    return <Navigate to={"/result"} replace={true}></Navigate>;
  }
  return (
    <>
      <div className="eachQuizBody">
        <div className="container">
          <h1
            className="title text-light"
            style={{ textTransform: "uppercase" }}
          >
            {quiName}
          </h1>

          {/* display questions */}
          <Questions onChecked={onChecked} />

          <div className="grid">
            <button className="btn prev" onClick={onPrev}>
              Prev
            </button>
            <button className="btn next" onClick={onNext}>
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EachQuiz;
