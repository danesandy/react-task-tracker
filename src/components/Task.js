import React from 'react'
import { FaTimes } from 'react-icons/fa'

const Task = ({ task }) => {
  return (
    <div className='task'>
      <h3>{ task.text } <FaTimes style={{color: 'red', cursor: 'pointer'}}/></h3>
      <h6>{ task.date}</h6>
    </div>
  )
}

export default Task
