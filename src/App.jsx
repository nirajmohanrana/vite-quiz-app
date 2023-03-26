import { useState } from "react";
import { quizs } from "./assets/quiz";

function App() {
  const [countCorrect, setCountCorrect] = useState(0);
  const [countWrong, setCountWrong] = useState(0);

  function handleClick(option, quiz) {
    if (option === quiz.answer) {
      setCountCorrect(countCorrect + 1);
    } else {
      setCountWrong(countWrong + 1);
    }
  }

  return (
    <>
      <div>
        <h4>QUIZ APP</h4>
        {quizs.map((quiz) => {
          return (
            <div
              key={quiz.id}
              className="card"
              style={{ width: "20rem", margin: "10px" }}
            >
              <div className="card-body">
                <h5 className="card-title">{quiz.question}</h5>
                <div
                  className="btn-group"
                  role="group"
                  aria-label="Basic example"
                >
                  {quiz.options.map((option, i) => {
                    return (
                      <button
                        key={i}
                        type="button"
                        className="btn btn-sm btn-primary"
                        onClick={() => {
                          handleClick(option, quiz);
                        }}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <label>Correct Answers</label>
        <progress
          id="file"
          value={countCorrect}
          max="4"
          style={{ accentColor: "#0f0" }}
        ></progress>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <label>Wrong Answers</label>
        <progress
          id="file"
          value={countWrong}
          max="4"
          style={{ accentColor: "#f00" }}
        ></progress>
      </div>
    </>
  );
}

export default App;
