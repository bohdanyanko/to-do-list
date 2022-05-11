import PopUp from "./PopUp";
import TopicForms from "./TopicForms";
import { useState } from "react";
import { FaArchive, FaClipboardList, FaPlus } from "react-icons/fa";
import uuid from 'react-uuid'

const Sidebar = ({ 
  topicsArray, 
  setTopicsArray, 
  activeTopic, 
  setActiveTopic 
}) => {
  const [newTopic, setNewTopic] = useState("");
  const [addTopicWindowActive, setAddTopicWindowActive] = useState(false);

  const handleNewTopic = (event) => {
    setNewTopic(event.target.value);
  }

  const addNewTopic = () => {
    setTopicsArray(topicsArray.concat(newTopic));
    setNewTopic("");
  }

  const resetHandler = () => {
    setAddTopicWindowActive(false);
    setNewTopic("");
  }

  const topicsToShow = [...new Set(topicsArray)];

  return (
    <div className="sidebar">
      <button className={(activeTopic === "All") 
        ? "sidebarBtn active" 
        : "sidebarBtn"} onClick={() => setActiveTopic("All")}>
          <FaArchive/>All
      </button>
      {topicsToShow.map(topic => 
        <button key={uuid()} className={(activeTopic === topic) 
          ? "sidebarBtn active" 
          : "sidebarBtn"} onClick={() => setActiveTopic(`${topic}`)}>
            <FaClipboardList />{topic}
          </button>)}
      <button className="sidebarBtn" onClick={() => setAddTopicWindowActive(true)}>
        <FaPlus />
      </button>
      <PopUp 
        active={addTopicWindowActive} 
        setActive={setAddTopicWindowActive} 
        resetHandler={resetHandler}>
          <TopicForms 
            setActive={setAddTopicWindowActive} 
            topic={newTopic} 
            handleTopic={handleNewTopic} 
            addNewTopic={addNewTopic}
            resetHandler={resetHandler}
          />
      </PopUp>
    </div>
  );
}

export default Sidebar;