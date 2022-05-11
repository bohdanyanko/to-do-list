import uuid from 'react-uuid'

const NoteForms = 
({ 
  buttonText,
  headerText,
  setActive, 
  title, 
  handleTitle, 
  date, 
  handleDate, 
  topic, 
  handleTopic, 
  noteAction, 
  topicsArray, 
  resetHandler,
  editNoteIndex
}) => {
  const handleSubmit = () => {
    noteAction(editNoteIndex);
    setActive(false);
  }

  const topicsToShow = [...new Set(topicsArray)];
  
  return (
    <div className="noteForms">
      <h3 className="noteFormsHeader">{headerText}</h3>
      <div className="noteFormsBody">
          <label htmlFor="title">Title:</label>
          <input id="title" value={title} onChange={handleTitle}/>
          <label htmlFor="dueDate">Due date:</label>
          <input type="date" id="dueDate" value={date} onChange={handleDate}/>
          <label htmlFor="topic">Topic:</label>
          <select id="topic" value={topic} onChange={handleTopic}>
            {topicsToShow.map(topic => <option key={uuid()} value={topic}>{topic}</option>)}
          </select>
      </div>
      <div className="noteFormsButtons">
        <button className="cancelBtn" onClick={() => resetHandler()}>Cancel</button>
        <button className="submitBtn" onClick={handleSubmit}>{buttonText}</button>
      </div>
    </div>
  );
}

export default NoteForms;