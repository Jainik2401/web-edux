import React, { useEffect } from "react";
import "../styles/Result.css";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import {
  attempts_Number,
  earnPoints_Number,
  flagResult,
} from "../helper/helper";

/** import actions  */
import { resetAllAction } from "../redux/question_reducer";
import { resetResultAction } from "../redux/result_reducer";

const Result = () => {
  const dispatch = useDispatch();
  const {
    questions: { queue, answers },
    result: { result },
  } = useSelector((state) => state);

  useEffect(() => {
    console.log(flag);
  });

  const totalPoints = queue.length * 10;
  const attempts = attempts_Number(result);
  const earnPoints = earnPoints_Number(result, answers, 10);
  const flag = flagResult(totalPoints, earnPoints);

  function onRestart() {
    dispatch(resetAllAction());
    dispatch(resetResultAction());
  }

  return (
    <>
      <div className="resultBody">
        <div className="container">
          <h1 className="title text-light">Result</h1>

          <div className="result flex-center">
            <div className="flex">
              <span>Total Quiz Points : </span>
              <span className="bold">{totalPoints || 0}</span>
            </div>
            <div className="flex">
              <span>Total Questions : </span>
              <span className="bold">{queue.length || 0}</span>
            </div>
            <div className="flex">
              <span>Total Questions Attemped : </span>
              <span className="bold">{attempts || 0}</span>
            </div>
            <div className="flex">
              <span>Total Earn Points : </span>
              <span className="bold">{earnPoints || 0}</span>
            </div>
            <div className="flex">
              <span>Quiz Result</span>
              <span
                style={{ color: `${flag ? "#2aff95" : "#ff2a66"}` }}
                className="bold"
              >
                {flag ? "Passed" : "Failed"}
              </span>
            </div>
          </div>

          <div className="start">
            <Link className="btn" to={"/quiz/eachQuiz"} onClick={onRestart}>
              Try Again
            </Link>
          </div>
          <div className="start">
            <Link className="btn" to={"/quiz"} onClick={onRestart}>
              Move to Quiz Section
            </Link>
          </div>

          <div className="start">
            <Link className="btn" to={"/showAnswers"}>
              Review
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Result;
