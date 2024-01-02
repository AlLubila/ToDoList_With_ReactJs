import { useState } from "react"
import { TaskItem } from "./TaskItem"

// Form function
export const Form = () =>{
  const[tasks, setTasks] = useState([])
  const [currentValue, setCurrentValue]=useState("")

  const handleSubmit = (e)=>{
    e.preventDefault();
    if (currentValue.trim()) {
      setTasks([...tasks, {text: currentValue, status: "Active"}])
    }
  setCurrentValue("") 
  
  }
  const handleStatusChange = (index)=>{
    const updateTasks = [...tasks]
    updateTasks[index].status = updateTasks[index].status === "Active" ? "Done" : "Active"
   setTasks(updateTasks)  
   }
    return (
    <>
    <form onSubmit={handleSubmit}>
      <label> Enter a task: 
         <input type="text" 
         value={currentValue}
         onChange={(e) => setCurrentValue(e.target.value)}
         />
        <button>Add the task</button>
      </label>
      {tasks.length > 0 &&
      <ul>
    {tasks.map((task, index)=> <TaskItem key={index} items ={task.text} status={task.status} onStatusChange = {()=> handleStatusChange(index)}/>)} 
      </ul>
      }
    </form>

    </>
    )
}