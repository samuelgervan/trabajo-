import { useState } from 'react'
import './App.css'
import { Logos } from './componets/logos'
import { AddTask } from './componets/addtask'
import { ShowTask } from './componets/ShowTask'


function App() {
  const [tasks, setTasks] = useState([])
  const addTasks = (newTask)=>{
    let object = {
      task: newTask,
      status: false
    }
    setTasks([...tasks,object])
    console.log(tasks)
  }
  const changeStatus = (index)=> {
    tasks[index].status = !tasks[index].status
    setTasks([... tasks])
  } 
 const removeTask = (index) =>{
  tasks.splice(index,1)
  setTasks([...tasks])
 }
 
  

  return (
    <>
      <Logos tittle={"Nuevo titulo"} />
      
     <AddTask addTasks={addTasks}/>
      <ShowTask tasklist={tasks} changeStatus={changeStatus}  removeTask={removeTask}/>
      
    </>
  )
}

export default App
