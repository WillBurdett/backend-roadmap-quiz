import { TOPICS_ARRAY } from "../data/TOPICS_ARRAY";
import { HOW_DOES_THE_INTERNET_WORK } from "../data/questions/HOW_DOES_THE_INTERNET_WORK";
import Quiz from "./Quiz";

export default function Questions({ t, seeAllTopics }) {
  let content;

  switch (t) {
    case TOPICS_ARRAY[0]:
      content = <Quiz QUESTIONS={HOW_DOES_THE_INTERNET_WORK}/>;
      break;
    case TOPICS_ARRAY[1]:
      content = <Quiz />;
      break;
    default:
      <h1>default</h1>;
  }

  return (
    <div>
      <button className="btn btn-primary me-2" onClick={seeAllTopics}>
        Back to topics
      </button>
      <h1>{t} - Questions</h1>
      {content}
    </div>
  );
}
