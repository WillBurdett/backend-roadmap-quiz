import { useState } from "react";
import Topic from "./Topic";
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
    <div>
      {!selectedTopic ? (
        <div>
          <h2>Topics</h2>
          {TOPICS_ARRAY.map((t) => {
            return (
              <Topic topic={t} handleTopicSelection={handleTopicSelection} />
            );
          })}
        </div>
      ) : (
        <div>
          <Questions t={selectedTopic} seeAllTopics={handleSeeAllTopics} />
        </div>
      )}
    </div>
  );
}
