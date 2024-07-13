export default function Topic({ topic, handleTopicSelection }) {
  return <button onClick={() => handleTopicSelection(topic)}>{topic}</button>;
}
