import React from 'react'
import '../styles/activeTaskContainer.css'
import TaskElement from './TaskElement'

function ActiveTaskContainer() {
  return (

    <div className="activeTaskContainer">
        <span className='head'>Active Tasks</span>
        <TaskElement/>
    </div>

  )
}

export default ActiveTaskContainer