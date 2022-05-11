import Sidebar from "./Sidebar";
import Content from "./Content";
import { useState } from "react";

const Container = ({ 
  showCompletedNotes, 
  showSidebar 
}) => {
  const notesExmpl = [
    {
      id: 1,
      title: "Take my dog for a walk",
      date: `${new Date().toJSON().slice(0,10)}`,
      topic: "Work",
      completed: false
    },
    {
      id: 2,
      title: "Go shopping",
      date: `${new Date().toJSON().slice(0,10)}`,
      topic: "Health",
      completed: false
    },
    {
      id: 3,
      title: "Buy a car",
      date: `${new Date().toJSON().slice(0,10)}`,
      topic: "Work",
      completed: true
    },
    {
      id: 4, 
      title: "Do some laundry",
      date: `${new Date().toJSON().slice(0,10)}`,
      topic: "Travel",
      completed: true
    }
  ];

  const [notesArray, setNotesArray] = useState(notesExmpl);
  const [topicsArray, setTopicsArray] = useState(["General"].concat(notesArray.map(note => note.topic)));
  const [activeTopic, setActiveTopic] = useState("All");

  return (
    <div className="container">
      {showSidebar 
        ? <Sidebar 
          topicsArray={topicsArray} 
          setTopicsArray={setTopicsArray} 
          activeTopic={activeTopic} 
          setActiveTopic={setActiveTopic}
        /> 
        : null
      }
      <Content 
        notesArray={notesArray} 
        setNotesArray={setNotesArray} 
        topicsArray={topicsArray} 
        showCompletedNotes={showCompletedNotes} 
        activeTopic={activeTopic} 
      />
    </div>
  );
}

export default Container;