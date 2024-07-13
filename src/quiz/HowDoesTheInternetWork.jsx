import { useState } from "react";

export default function HowDoesTheInternetWork() {
  const questions = [
    {
      questionNumber: 1,
      question: "What is the internet?",
      options: [
        "A single server all computers connect to and communicate.",
        "A global network of computers that communicate through a set of protocols.",
      ],
      answer:
        "A global network of computers that communicate through a set of protocols.",
      minSelection: 1,
      maxSelection: 1,
    },
    {
      questionNumber: 2,
      question: "Everything sent over the internet is sent in ____ ?",
      options: ["Bytes", "Bandwidth", "Bits", "Megapixels"],
      answer: "Bits",
      minSelection: 1,
      maxSelection: 1,
    },
  ];

  const [answers, setAnswers] = useState(
    Array.apply(null, Array(questions.length)).map(function () {
      return "";
    })
  );

  const handleAnswerChange = (index) => (e) => {
    const value = e.target.value;
    let newArr = [...answers]; // copying the old datas array
    // a deep copy is not needed as we are overriding the whole object below, and not setting a property of it. this does not mutate the state.
    if (e.target.checked) {
      newArr[index] = value; // replace e.target.value with whatever you want to change it to
    } else {
      newArr[index] = ""; // replace e.target.value with whatever you want to change it to
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
        <div>
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
      <button onClick={handleSubmit}>
        Submit
      </button>
    </>
  );
}
