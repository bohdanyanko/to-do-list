import "./App.css";
import Header from "./components/Header";
import Container from "./components/Container";
import { useState } from "react";

const App = () => {
  const [showCompletedNotes, setShowCompletedNotes] = useState(false);
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <div className="App">
      <Header 
        showCompletedNotes={showCompletedNotes} 
        setShowCompletedNotes={setShowCompletedNotes} 
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
      />
      <Container 
        showCompletedNotes={showCompletedNotes}
        showSidebar={showSidebar}
      />
    </div>
  );
}

export default App;