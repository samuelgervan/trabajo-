import { useState } from 'react'
import './App.css'
import { Logos } from './componets/logos'
import { AddTask } from './componets/addtask'


function App() {
  const [tasks, setTasks] = useState([])
  const addTasks = (newTask)=>{
    setTasks([...tasks,newTask])
    console.log(tasks)
  }

  return (
    <>
      <Logos tittle={"Nuevo titulo"} />
      
     
      <AddTask addTasks={addTasks}/>
      
    </>
  )
}

export default App
