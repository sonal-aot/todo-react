import React from 'react'
import '../styles/taskElement.css'
import InputType from './InputType'
import editIcon from '../assets/edit-icon.svg'
import trashIcon from '../assets/trash-icon.svg'
import calenderIcon from '../assets/calender-icon.svg'
import notCompleted from '../assets/not-completed-icon.svg'

function TaskElement() {
  return (
    <div className="taskCard">
      <div >
        <InputType className={"chkBox"} type={'checkbox'} />
      </div>

      <div className="cardBody">
        <span className="cardTitle">Finance dashboard design <img src={notCompleted} alt="not COmpleted" /></span>
        <p className="cardDescription">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus fugiat inventore tempora eos mollitia incidunt praesentium reprehenderit. Esse facere nesciunt, distinctio nobis doloremque voluptatem quidem.</p>
        <span className="cardDueDate"><img src={calenderIcon} alt="calender" /> by 12-03-2024</span>
      </div>

      <div className="iconEditTrash">
        <img src={editIcon} alt="edit" />
        <img src={trashIcon} alt="trash" />
      </div>
    </div>
  )
}

export default TaskElement