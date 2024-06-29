import React from 'react'
import { useEffect } from 'react'
import Cross from '../assets/cross-icon.svg'
import ButtonType from './ButtonType'
import '../styles/taskForm.css'
import InputType from './InputType'

const TaskForm = ({ setShowForm }) => {

    useEffect(() => {
        const taskform = document.querySelector('.addForm');
        const formSubmit = (event) => {
            event.preventDefault();
            let taskTitle = document.querySelector('#taskTitle').value;
            let taskDescription = document.querySelector('#taskDescription').value;
            let taskDueDate = document.querySelector('#taskDate').value;

            let mydata = JSON.parse(localStorage.getItem("tasks")) || [];

            const task = {
                id: Date.now(),
                title: taskTitle,
                description: taskDescription,
                duedate: taskDueDate,
                completed: false
            };

            mydata.push(task);
            localStorage.setItem("tasks", JSON.stringify(mydata));
            setShowForm(false);
        };

        taskform.addEventListener('submit', formSubmit);
        return () => {
            taskform.removeEventListener('submit', formSubmit);
        };
    }, []);



    return (
        <form className='addForm'>

            <div className='formHead' >
                <h1>Add Task</h1>
                <img src={Cross} alt="Cross" onClick={() => setShowForm(false)} />
            </div>
            <div className='formBody'>
                <div className='formTitle'>
                    <label>Title *</label>
                    <InputType id={"taskTitle"} type={"text"} required />
                </div>
                <div className='formDescription'>
                    <label>Description </label>
                    <textarea id="taskDescription" />
                </div>
                <div className='formDate'>
                    <label>Date </label>
                    <InputType id={"taskDate"} type={"date"} required />
                </div>
            </div>
            <div className='formFooter'>
                <ButtonType className={"closeBtn"} btnText={"Close"} onClick={() => setShowForm(false)} />
                <ButtonType className={"addBtn"} btnText={"Add Task"} type={"submit"} />
            </div>

            

        </form>
    )


}

export default TaskForm