import { TOPICS_ARRAY } from "../data/TOPICS_ARRAY";
import WhatIsHTTP from "../quiz/WhatIsHTTP";
import WhatIsTheInternet from "../quiz/HowDoesTheInternetWork";

export default function Questions({ t, seeAllTopics }) {
  let content;

  switch(t) {
    case TOPICS_ARRAY[0]:
      content = <WhatIsTheInternet/>
      break;
    case TOPICS_ARRAY[1]:
        content = <WhatIsHTTP/>
      break;
    default:
      <h1>default</h1>
  }

  return (
    <div>
      <button onClick={seeAllTopics}>Back to topics</button>
      <h1>{t} - Questions</h1>
      {content}
    </div>
  );
}
