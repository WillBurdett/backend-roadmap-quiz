import { useState } from "react";
import Topic from "./Topic";
import Home from "./Home";
import Questions from "./Questions";
import { TOPICS_ARRAY } from "../data/TOPICS_ARRAY";

export default function Topics() {
  const [selectedTopic, setSelectedTopic] = useState("");

  const handleTopicSelection = (topic) => {
    setSelectedTopic(topic);
  };

  const handleSeeAllTopics = () => {
    setSelectedTopic("");
  };

  return (
    <div className="topics">
        <div className="">
          {TOPICS_ARRAY.map((t) => {
            return (
              <Topic topic={t} handleTopicSelection={handleTopicSelection} selectedTopic={selectedTopic} />
            );
          })}
          {selectedTopic === "" && <Home/>}
          {selectedTopic && <Questions t={selectedTopic} seeAllTopics={handleSeeAllTopics}/>}
        </div>
    </div>
  );
}
