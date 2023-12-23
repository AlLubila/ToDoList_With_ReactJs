// All imports
import { useState } from "react";
import { TaskItem } from "./TaskItem";

// Form function
export const Form = () =>{

    // UseState
    const [tasks, setTasks] = useState([]);
    const [currentValue, setCurrentValue] = useState("")

    // HandleEvent
    const handleSubmit = (event) => {
      event.preventDefault();
        if (currentValue.trim()) {
            setTasks([...tasks, currentValue])
        }
      setCurrentValue("")
    }
 
    return (

        // Form
      <form onSubmit={handleSubmit}>
        <label>Enter your Task:
          <input 
            type="text" 
            value={currentValue}
            onChange={(e)=>{setCurrentValue(e.target.value)}}
          />
        </label>
        <button onClick={handleSubmit}>Add task</button>
        
        {/* Task List */}
       { tasks.length > 0 && <ul>
        {tasks.map((task) => <TaskItem key={task} item={task}/>)}
        
        </ul>
        }
   
      </form>
    )
}