import Note from "./Note";
import PopUp from "./PopUp";
import NoteForms from "./NoteForms";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";

const Content = ({ 
  showCompletedNotes, 
  notesArray, 
  setNotesArray, 
  topicsArray, 
  activeTopic 
}) => {
  const [newNoteIdCounter, setNewNoteIdCounter] = useState(notesArray.length)
  const [newNoteTitle, setNewNoteTitle] = useState("");
  const [newNoteDate, setNewNoteDate] = useState(`${new Date().toJSON().slice(0,10)}`);
  const [newNoteTopic, setNewNoteTopic] = useState("General");
  const [addNoteWindowActive, setAddNoteWindowActive] = useState(false);
  const [editNoteWindowActive, setEditNoteWindowActive] = useState(false);
  const [editNoteIndex, setEditNoteIndex] = useState();

  const handleNewNoteTitle = (event) => {
    setNewNoteTitle(event.target.value);
  }

  const handleNewNoteDate = (event) => {
    setNewNoteDate(event.target.value);
  }

  const handleNewNoteTopic = (event) => {
    setNewNoteTopic(event.target.value);
  }

  const addNewNote = () => {
    const newNoteObj = {
      id: newNoteIdCounter + 1,
      title: newNoteTitle,
      date: newNoteDate,
      topic: newNoteTopic,
      completed: false
    }

    setNewNoteIdCounter(newNoteIdCounter + 1);
    setNotesArray(notesArray.concat(newNoteObj));
    setNewNoteTitle("");
    setNewNoteDate(`${new Date().toJSON().slice(0,10)}`);
    setNewNoteTopic("General");
  }

  const changeNoteCompletion = (id) => {
    const note = notesArray.find(note => note.id === id);
    const changedNote = {...note, completed: !note.completed};
    
    setNotesArray(notesArray.map(note => note.id !== id ? note : changedNote));
  }

  const deleteNote = (id) => {
    setNotesArray(notesArray.filter(note => note.id !== id));
  }

  const editNote = (index) => {
    setNotesArray([...notesArray.slice(0, index),
    Object.assign({}, notesArray[index], {title: newNoteTitle, date: newNoteDate, topic: newNoteTopic}),
                  ...notesArray.slice(index + 1)]); 
    setNewNoteTitle("");
    setNewNoteDate(`${new Date().toJSON().slice(0,10)}`);
    setNewNoteTopic("General");
  }

  const editFormsPrep = (index) => {
    setNewNoteTitle(notesArray[index].title);
    setNewNoteDate(notesArray[index].date);
    setNewNoteTopic(notesArray[index].topic);
  }

  const resetFormHandler = () => {
    setAddNoteWindowActive(false);
    setEditNoteWindowActive(false);
    setNewNoteTitle("");
    setNewNoteDate(`${new Date().toJSON().slice(0,10)}`);
    setNewNoteTopic("General");
  }

  const notesToShow = showCompletedNotes
    ? notesArray.filter(note => note.completed === true && ((activeTopic === "All") ? true : (note.topic === activeTopic)))
    : notesArray.filter(note => note.completed === false && ((activeTopic === "All") ? true : (note.topic === activeTopic)));

  const addButton = "Add Note";
  const editButton = "Edit Note";
  const formAddText = "New note";
  const formEditText = "Edit note";

  return (
    <div className="content">
      <PopUp 
        active={addNoteWindowActive} 
        resetHandler={resetFormHandler}>
          <NoteForms 
            buttonText={addButton}
            headerText={formAddText}
            setActive={setAddNoteWindowActive} 
            title ={newNoteTitle} 
            handleTitle={handleNewNoteTitle} 
            date={newNoteDate} 
            handleDate={handleNewNoteDate} 
            handleTopic={handleNewNoteTopic} 
            topic={newNoteTopic} 
            noteAction={addNewNote} 
            topicsArray={topicsArray} 
            resetHandler={resetFormHandler}
            editNoteIndex={editNoteIndex}
          />
      </PopUp>
      <PopUp 
        active={editNoteWindowActive} 
        resetHandler={resetFormHandler}>
          <NoteForms 
            buttonText={editButton}
            headerText={formEditText}
            setActive={setEditNoteWindowActive} 
            title ={newNoteTitle} 
            handleTitle={handleNewNoteTitle} 
            date={newNoteDate} 
            handleDate={handleNewNoteDate} 
            handleTopic={handleNewNoteTopic} 
            topic={newNoteTopic} 
            noteAction={editNote} 
            topicsArray={topicsArray} 
            resetHandler={resetFormHandler}
            editNoteIndex={editNoteIndex}
          />
      </PopUp>
      <button className="addNewNoteBtn" onClick={() => setAddNoteWindowActive(true)}>
        <FaPlus />
      </button>
      <ul>
        {notesToShow.map(note => 
        <Note 
          key={note.id} 
          note={note} 
          changeNoteCompletion={() => changeNoteCompletion(note.id)}  
          deleteNote={() => deleteNote(note.id)}
          editNoteWindowActive={editNoteWindowActive}
          setEditNoteWindowActive={setEditNoteWindowActive}
          editFormsPrep={editFormsPrep}
          setEditNoteIndex={setEditNoteIndex}
          notesArray={notesArray}
        />)}
      </ul>
    </div>
  );
}

export default Content;