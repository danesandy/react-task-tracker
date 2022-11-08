import { useState } from "react"
import Header from "./components/Header"
import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask"

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTask] = useState([
    {
        id: 1,
        text: 'doctor appointment',
        day: 'Nov 7th at 2pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'interview appointment',
        day: 'Nov 8th at 10am',
        reminder: false,
    },
    {
      id: 3,
      text: 'zoom appointment',
      day: 'Nov 9th at 1pm',
      reminder: true,
  },
])

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
