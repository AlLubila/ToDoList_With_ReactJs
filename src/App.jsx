import "./App.css";
import React from "react";
import AddTask from "./BouttonEvent";
import { useState } from "react";

function App() {
  const [eventVisible, setEventVisible] = useState(false);

  const handleButtonClick = () => {
    setEventVisible(!eventVisible);
  };
  return (
    <>
      <div className="p_container">
        <p className="p_title">To do List</p>
        <div className="aDiv">
          <input type="text" placeholder="Enter a task..." size={15} />
          <button onClick={handleButtonClick}>Add the task</button>
          <AddTask isVisible={eventVisible} />
        </div>
        <div className="p_TaskList">
          <div className="p_task">{/* New Task Added */}</div>

          <p className="noTask">No Task</p>
        </div>
        <footer className="p_footer">
          <p className="p_link">www.Website.com</p>
        </footer>
      </div>
    </>
  );
}

export default App;
