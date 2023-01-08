import { createSlice } from "@reduxjs/toolkit";

/** create reducer */
export const quizNameReducer = createSlice({
  name: "quizName",
  initialState: {
    quName: "html",
  },
  reducers: {
    setQuizNameAction: (state, action) => {
      let { quName } = action.payload;
      return {
        ...state,
        quName: quName,
      };
    },
  },
});

export const { setQuizNameAction } = quizNameReducer.actions;

export default quizNameReducer.reducer;
