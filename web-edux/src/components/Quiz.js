import React from "react";
import { Link } from "react-router-dom";
import "../styles/Quiz.css";
/** redux actions */
import * as Action from "../redux/quizName_reducer";
import { useDispatch } from "react-redux";

const Quiz = () => {
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <h1 style={{ paddingLeft: "10px" }}>Learn Storm Quizzes</h1>
        <hr></hr>
        <br></br>
        <p style={{ paddingLeft: "10px" }}>
          Test your skills with Learn Storms' Quizzes.
        </p>
        <br></br>
        <hr></hr>
        <br></br>

        <h1 style={{ paddingLeft: "10px" }}>The Info</h1>
        <br></br>

        <p style={{ paddingLeft: "10px" }}>
          Each quiz contains 10 questions, you get 10 points for each correct
          answer, at the end of each quiz you get your total score.
        </p>
        <br></br>
        <p style={{ paddingLeft: "10px" }}>
          When you finish the quiz, you can go through each question with the
          correct answer.
        </p>

        <div className="allQuiz">
          <div
            className="eachQuiz"
            style={{
              borderStyle: "solid",
              margin: "10px",
              borderColor: "#354dbf",
            }}
          >
            <div className="quizName">
              <h2>HTML</h2>
            </div>
            <div className="quizDesc">
              <p style={{ paddingBottom: "10px" }}>
                10 questions covering the basics of HTML
              </p>
            </div>
            <div>
              <Link
                className="sbtn"
                to={"eachQuiz"}
                onClick={() => {
                  dispatch(Action.setQuizNameAction({ quName: "html" }));
                }}
              >
                Start Quiz
              </Link>
            </div>
          </div>

          <div
            className="eachQuiz"
            style={{
              borderStyle: "solid",
              margin: "10px",
              borderColor: "#354dbf",
            }}
          >
            <div className="quizName">
              <h2>CSS</h2>
            </div>
            <div className="quizDesc">
              <p style={{ paddingBottom: "10px" }}>
                10 questions covering the basics of CSS
              </p>
            </div>
            <div>
              <Link
                className="sbtn"
                to={"eachQuiz"}
                onClick={() => {
                  dispatch(Action.setQuizNameAction({ quName: "css" }));
                }}
              >
                Start Quiz
              </Link>
            </div>
          </div>

          <div
            className="eachQuiz"
            style={{
              borderStyle: "solid",
              margin: "10px",
              borderColor: "#354dbf",
            }}
          >
            <div className="quizName">
              <h2>Javascript</h2>
            </div>
            <div className="quizDesc">
              <p style={{ paddingBottom: "10px" }}>
                10 questions covering the basics of Java
              </p>
            </div>
            <div>
              <Link
                className="sbtn"
                to={"eachQuiz"}
                onClick={() => {
                  dispatch(Action.setQuizNameAction({ quName: "javascript" }));
                }}
              >
                Start Quiz
              </Link>
            </div>
          </div>
        </div>

        <div className="allQuiz">
          <div
            className="eachQuiz"
            style={{
              borderStyle: "solid",
              margin: "10px",
              borderColor: "#354dbf",
            }}
          >
            <div className="quizName">
              <h2>Bootstrap</h2>
            </div>
            <div className="quizDesc">
              <p style={{ paddingBottom: "10px" }}>
                10 questions covering the basics of HTML
              </p>
            </div>
            <div>
              <Link
                className="sbtn"
                to={"eachQuiz"}
                onClick={() => {
                  dispatch(Action.setQuizNameAction({ quName: "bootstrap" }));
                }}
              >
                Start Quiz
              </Link>
            </div>
          </div>

          <div
            className="eachQuiz"
            style={{
              borderStyle: "solid",
              margin: "10px",
              borderColor: "#354dbf",
            }}
          >
            <div className="quizName">
              <h2>Android</h2>
            </div>
            <div className="quizDesc">
              <p style={{ paddingBottom: "10px" }}>
                10 questions covering the basics of CSS
              </p>
            </div>
            <div>
              <Link
                className="sbtn"
                to={"eachQuiz"}
                onClick={() => {
                  dispatch(Action.setQuizNameAction({ quName: "android" }));
                }}
              >
                Start Quiz
              </Link>
            </div>
          </div>

          <div
            className="eachQuiz"
            style={{
              borderStyle: "solid",
              margin: "10px",
              borderColor: "#354dbf",
            }}
          >
            <div className="quizName">
              <h2>IOS</h2>
            </div>
            <div className="quizDesc">
              <p style={{ paddingBottom: "10px" }}>
                10 questions covering the basics of Java
              </p>
            </div>
            <div>
              <Link
                className="sbtn"
                to={"eachQuiz"}
                onClick={() => {
                  dispatch(Action.setQuizNameAction({ quName: "ios" }));
                }}
              >
                Start Quiz
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Quiz;
