import { FaBars, FaTimes, FaRegSquare, FaRegCheckSquare } from "react-icons/fa";

const Header = ({ 
  showSidebar, 
  setShowSidebar, 
  showCompletedNotes, 
  setShowCompletedNotes 
}) => {
  
  return (
    <header className="header">
      {showSidebar 
        ? <FaTimes onClick={() => setShowSidebar(!showSidebar)}/> 
        : <FaBars onClick={() => setShowSidebar(!showSidebar)}/>
      }
      <h2>TO-DO</h2>
      {showCompletedNotes 
        ? <FaRegCheckSquare onClick={() => setShowCompletedNotes(!showCompletedNotes)}/> 
        : <FaRegSquare onClick={() => setShowCompletedNotes(!showCompletedNotes)}/>
      }
    </header>
  );
}

export default Header;