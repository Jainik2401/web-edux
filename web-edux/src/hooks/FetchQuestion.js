import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
//import data, { answers } from "../database/data";
import { getServerData } from "../helper/helper";
import { useSelector } from "react-redux";

/** redux actions */
import * as Action from "../redux/question_reducer";

/** fetch question hook to fetch api data and set value to store */
export const useFetchQestion = () => {
  const dispatch = useDispatch();
  const [getData, setGetData] = useState({
    isLoading: false,
    apiData: [],
    serverError: null,
  });
  const quiName = useSelector((state) => state.quizName.quName);

  useEffect(() => {
    setGetData((prev) => ({ ...prev, isLoading: true }));

    /** async function fetch backend data */
    (async () => {
      try {
        //let question = await data;
        const [{ questions, answers }] = await getServerData(
          "http://localhost:5000/api/questions",
          (data) => data
        );
        console.log("trying to see all ques " + questions[1].language);
        const ques = [];
        const ans = [];
        for (let i = 0; i < questions.length; i++) {
          if (questions[i].language === quiName) {
            ques.push(questions[i]);
            ans.push(answers[i]);
          }
        }
        console.log("trying to see all html " + ans.length);

        if (ques.length > 0) {
          setGetData((prev) => ({ ...prev, isLoading: false }));
          setGetData((prev) => ({ ...prev, apiData: ques }));

          /** dispatch an action */
          //dispatch(Action.startExamAction({question, answers}))
          dispatch(Action.startExamAction({ question: ques, answers: ans }));
        } else {
          throw new Error("No Question Avalibale");
        }
      } catch (error) {
        setGetData((prev) => ({ ...prev, isLoading: false }));
        setGetData((prev) => ({ ...prev, serverError: error }));
      }
    })();
  }, [dispatch, quiName]);

  return [getData, setGetData];
};

/** MoveAction Dispatch function */
export const MoveNextQuestion = () => async (dispatch) => {
  try {
    dispatch(Action.moveNextAction()); /** increase trace by 1 */
  } catch (error) {
    console.log(error);
  }
};

/** PrevAction Dispatch function */
export const MovePrevQuestion = () => async (dispatch) => {
  try {
    dispatch(Action.movePrevAction()); /** decrease trace by 1 */
  } catch (error) {
    console.log(error);
  }
};
