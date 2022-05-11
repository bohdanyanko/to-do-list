const TopicForms = ({ setActive, topic, handleTopic, addNewTopic, resetHandler }) => {
  const handleSubmit = () => {
    addNewTopic();
    setActive(false);
  }

  return (
    <div className="topicForms">
      <h3 className="topicFormsHeader">New topic</h3>
      <div className="topicFormsBody">
        <label htmlFor="topic">Topic:</label>
        <input id="topic" value={topic} onChange={handleTopic}/>
      </div>
      <div className="topicFormsButtons">
        <button className="cancelBtn" onClick={() => resetHandler()}>Cancel</button>
        <button className="submitBtn"onClick={handleSubmit}>Add topic</button>
      </div>
    </div>
  );
}

export default TopicForms;