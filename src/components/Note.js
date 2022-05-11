import { FaRegSquare, FaRegCheckSquare, FaEdit, FaTrash } from "react-icons/fa";

const Note = ({ 
  note, 
  changeNoteCompletion, 
  deleteNote, 
  setEditNoteWindowActive,
  editFormsPrep,
  setEditNoteIndex, 
  notesArray
}) => {

  const editButtonHandler = (id) => {
    const note = notesArray.find(note => note.id === id);
    const index = notesArray.indexOf(note);

    setEditNoteIndex(index);
    editFormsPrep(index);
    setEditNoteWindowActive(true);
  }

  return (
    <li>
      <div className="noteBody">
        {note.completed ? <FaRegCheckSquare className="noteCheckSquareBtn" onClick={changeNoteCompletion}/> : <FaRegSquare className="noteRegSquareBtn" onClick={changeNoteCompletion}/>}
        <div className="noteTitle">
          {note.title}
        </div>
        <div className="noteDueDate">
          {
            new Intl.DateTimeFormat("en-GB", {
              month: "short",
              day: "2-digit"
            })
            .format(new Date(`${note.date}`))
          }
        </div>
        <FaEdit className="noteEditBtn" onClick={() => editButtonHandler(note.id)}/>
        <FaTrash className="noteDeleteBtn" onClick={deleteNote}/>
      </div>
    </li>
  );
}

export default Note;