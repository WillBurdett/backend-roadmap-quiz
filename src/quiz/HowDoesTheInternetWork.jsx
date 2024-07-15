import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css'; 
import { HOW_DOES_THE_INTERNET_WORK_QUESTIONS } from '../data/questions/HOW_DOES_THE_INTERNET_WORK' 

export default function HowDoesTheInternetWork() {
  const questions = HOW_DOES_THE_INTERNET_WORK_QUESTIONS

  const [answers, setAnswers] = useState(
    Array.apply(null, Array(questions.length)).map(function () {
      return "";
    })
  );

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

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!answers) {
      alert("Please select atleast 1 answer!");
    }

    checkAnswers();
  };

  const checkAnswers = () => {
    let correctAnswers = 0;
    for (let i = 0; i < questions.length; i++) {
      const gotItCorrect = questions[i].answer === answers[i];
      if (gotItCorrect) {
        correctAnswers++;
      }
    }
    console.log("you scored " + correctAnswers + " out of " + questions.length);
  };

  return (
    <>
      {questions.map((q, i) => (
        <div 
        // className="group-form offset-3"
        >
          <form>
            <h2>{q.question}</h2>
            {q.options.map((o) => (
              <div>
                <label>
                  <input
                    type="checkbox"
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
      <button className="btn btn-primary me-2" onClick={handleSubmit}>Submit</button>
    </>
  );
}
