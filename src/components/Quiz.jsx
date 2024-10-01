import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import createEmptyArrayOfGivenLength from "../data/utils/utils";

export default function Quiz({ QUESTIONS }) {
  const questions = QUESTIONS;

  const [answers, setAnswers] = useState(
    createEmptyArrayOfGivenLength(questions.length)
  );
  const [answersSubmitted, setAnswersSubmitted] = useState(false);

  const handleAnswerChange = (index) => (e) => {
    const value = e.target.value;
    let newArr = [...answers];
    if (e.target.checked) {
      newArr[index] = value;
    } else {
      newArr[index] = "";
    }
    setAnswers(newArr);
  };

  const flipAnswersSubmitted = () => {
    setAnswersSubmitted(a => (
      setAnswersSubmitted(!a)
    ))
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!answers) {
      alert("Please select atleast 1 answer!");
    }

    checkAnswers();
  };

  const handleReset = () => {
    setAnswers(createEmptyArrayOfGivenLength(questions.length));
    flipAnswersSubmitted();
  };

  const checkAnswers = () => {
    let correctAnswers = 0;
    for (let i = 0; i < questions.length; i++) {
      const gotItCorrect = questions[i].answer === answers[i];
      if (gotItCorrect) {
        correctAnswers++;
      }
    }
    flipAnswersSubmitted();

    alert("You scored " + correctAnswers + " out of " + questions.length);
  };

  const content = (
    <>
      {questions.map((q, i) => (
        <div className="quiz" style={{ backgroundColor: answersSubmitted ? `${q.answer === answers[i] ? 'green' : 'purple'}` : '' }}>
          <form>
            <h2 className="question-text">{q.question}</h2>
            {q.options.map((o) => (
              <div className="option">
                <label className="option-text">
                  <input
                    type="checkbox"
                    id="checkbox"
                    checked={answers[i] === o}
                    value={o}
                    onChange={handleAnswerChange(i)}
                  />
                  {o}
                </label>
              </div>
            ))}
            <br />
          </form>
        </div>
      ))}
    </>
  );
  
  return (
    <div className="quiz-container">
      {content}
      <button onClick={handleSubmit}>Submit</button>
      <button onClick={handleReset}>Reset</button>;
    </div>
  );
}
