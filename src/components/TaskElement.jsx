import React, { useState } from 'react';
import '../styles/taskElement.css';
import editIcon from '../assets/edit-icon.svg';
import trashIcon from '../assets/trash-icon.svg';
import calenderIcon from '../assets/calender-icon.svg';
import notCompleted from '../assets/not-completed-icon.svg';
import completedIcon from '../assets/completed-icon.svg';
import DeleteModal from './DeleteModal';

function TaskElement({ task, onCheckboxChange, editTask, confirmDelete }) {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="taskCard">
            <div>
                <input
                    className="chkBox"
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => onCheckboxChange(task.id)}
                />
            </div>

            <div className="cardBody">
                <span className="cardTitle">
                    {task.title}
                    {task.completed ? <img src={completedIcon} alt="Completed" /> : <img src={notCompleted} alt="Not Completed" />}
                </span>
                <p className="cardDescription">{task.description}</p>
                <span className="cardDueDate">
                    <img src={calenderIcon} alt="Calendar" /> by {task.duedate}
                </span>
            </div>

            <div className="iconEditTrash">
                <img src={editIcon} alt="Edit" onClick={() => editTask(task.id)} />
                <img src={trashIcon} alt="Trash" onClick={() => setShowModal(true)} />
            </div>

            <DeleteModal
                show={showModal}
                onClose={() => setShowModal(false)}
                onConfirm={() => {
                    confirmDelete(task.id);
                    setShowModal(false);
                }}
            />
        </div>
    );
}

export default TaskElement;
