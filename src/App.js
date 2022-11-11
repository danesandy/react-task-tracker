import { useState, useEffect } from "react"
import Header from "./components/Header"
import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask"

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTask] = useState([
    
])

useEffect(() => {
  const getTasks = async () => {
    const tasksFromServer = await fetchTasks() 
    setTask(tasksFromServer)
    }
    
  
  getTasks()
}, [])

// Fetch tasks
const fetchTasks = async () => {
  const res = await fetch('http://localhost:5000/tasks')
  const data = await res.json()

  return data
}

//Add Task
const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTask([...tasks, newTask])
}


//Delete Task
const deleteTask = (id) => {
  setTask(tasks.filter((task) => task.id !== id))
}

//Toggle Reminder
const toggleReminder = (id) => {
  setTask(tasks.map(
    (task) => task.id === id? 
    {...task, reminder: !task.reminder} : task
  )
  )
}



  return (
    <div className="Container">
      <Header 
      onAdd={() => setShowAddTask(!showAddTask)}
      showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}

      {tasks.length > 0? 
      (<Tasks tasks={tasks} 
      onDelete={deleteTask}
      onToggle={toggleReminder}
      />
      ) : ('no tasks to show')}
    </div>
  );
}

export default App;
