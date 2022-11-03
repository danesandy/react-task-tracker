import { useState } from "react"
import Header from "./components/Header"
import Tasks from "./components/Tasks"

function App() {
  const [tasks, setTask] = useState([
    {
        id: 1,
        text: 'doctor appointment',
        date: 'pasfdh',
        reminder: true,
    },
    {
        id: 2,
        text: 'car appointment',
        date: 'pasfdh',
        reminder: true,
    },
])

const deleteTask = (id) => {
  console.log('delete', id)
}


  return (
    <div className="Container">
      <Header />
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
