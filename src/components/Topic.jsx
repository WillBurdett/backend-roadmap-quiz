export default function Topic({ topic, handleTopicSelection, selectedTopic }) {
  return <button style={{backgroundColor: selectedTopic === topic && '#5e43f3'}}onClick={() => handleTopicSelection(topic)}>{topic}</button>;
}
