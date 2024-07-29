import { TOPICS_ARRAY } from "../data/TOPICS_ARRAY";
import { BROWSERS_AND_HOW_THEY_WORK } from "../data/questions/BROWSERS_AND_HOW_THEY_WORK";
import { DNS_AND_HOW_IT_WORKS } from "../data/questions/DNS_AND_HOW_IT_WORKS";
import { HOW_DOES_THE_INTERNET_WORK } from "../data/questions/HOW_DOES_THE_INTERNET_WORK";
import { WHAT_IS_DOMAIN_NAME } from "../data/questions/WHAT_IS_DOMAIN_NAME";
import { WHAT_IS_HOSTING } from "../data/questions/WHAT_IS_HOSTING";
import { WHAT_IS_HTTP } from "../data/questions/WHAT_IS_HTTP";
import Quiz from "./Quiz";

export default function Questions({ t }) {
  let content;

  switch (t) {
    case TOPICS_ARRAY[0]:
      content = <Quiz QUESTIONS={HOW_DOES_THE_INTERNET_WORK}/>;
      break;
    case TOPICS_ARRAY[1]:
      content = <Quiz QUESTIONS={WHAT_IS_HTTP}/>;
      break;
    case TOPICS_ARRAY[2]:
      content = <Quiz QUESTIONS={WHAT_IS_DOMAIN_NAME}/>;
      break;
    case TOPICS_ARRAY[3]:
      content = <Quiz QUESTIONS={WHAT_IS_HOSTING}/>;
      break;
    case TOPICS_ARRAY[4]:
      content = <Quiz QUESTIONS={DNS_AND_HOW_IT_WORKS}/>;
      break;
      case TOPICS_ARRAY[5]:
        content = <Quiz QUESTIONS={BROWSERS_AND_HOW_THEY_WORK}/>;
        break;        
    default:
      <h1>default</h1>;
  }

  return (
    <div>
      {content}
    </div>
  );
}
