import React from "react";
import { useDispatch, useSelector } from "react-redux";

const ShowAnswers = () => {
  const {
    questions: { queue, answers },
    result: { result, userId },
  } = useSelector((state) => state);
  const question = useSelector(
    (state) => state.questions.queue[state.questions.trace]
  );

  console.log("Data is " + { queue });

  return (
    <div>
      {/* <h1>{queue.length}</h1>
      <h1>{answers[0]}</h1> */}
      <div>
        <ul style={{ color: "black" }}>
          {queue.map((q, i) => (
            <li style={{ height: "auto" }} key={i}>
              <h1 style={{ color: "#354dbf" }}>
                {i + 1} . {q.question}
              </h1>

              {q.options[result[i]] === q.options[answers[i]] ? (
                <>
                  <h2 style={{ color: "black" }}>
                    <span style={{ color: "green" }}>
                      Your Answer is correct :
                    </span>{" "}
                    {q.options[answers[i]]}
                  </h2>
                </>
              ) : (
                <>
                  <h2 style={{ color: "black" }}>
                    <span style={{ color: "red" }}>Your Answer :</span>{" "}
                    {q.options[result[i]]}
                  </h2>
                  <h2 style={{ color: "black" }}>
                    <span style={{ color: "green" }}>Correct Answer :</span>{" "}
                    {q.options[answers[i]]}
                  </h2>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ShowAnswers;
