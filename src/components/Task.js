import React from 'react'
import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div className={`task ${task.reminder && 'reminder'}`} onDoubleClick={() => onToggle(task.id)}>
      <h3>{ task.text }{' '}
      <FaTimes 
      style={{color: 'red', cursor: 'pointer'}}
      onClick={() => onDelete(task.id)}
      />
      </h3>
      <h6>{ task.day}</h6>
    </div>
  )
}

export default Task
