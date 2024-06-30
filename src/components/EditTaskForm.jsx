import React, { useEffect } from 'react';
import Cross from '../assets/cross-icon.svg';
import ButtonType from './ButtonType';
import '../styles/taskForm.css';
import InputType from './InputType';

const EditForm = ({ setShowForm, taskId }) => {

    useEffect(() => {
        const mydata = JSON.parse(localStorage.getItem("tasks")) || [];
        const taskToEdit = mydata.find(task => task.id === taskId);
        if (taskToEdit) {
            document.getElementById("taskTitle").value = taskToEdit.title;
            document.getElementById("taskDescription").value = taskToEdit.description;
            document.getElementById("taskDate").value = taskToEdit.duedate;
        }
    }, [taskId]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const taskTitle = document.getElementById("taskTitle").value;
        const taskDescription = document.getElementById("taskDescription").value;
        const taskDueDate = document.getElementById("taskDate").value;

        let mydata = JSON.parse(localStorage.getItem("tasks")) || [];
        const updatedTasks = mydata.map(t => {
            if (t.id === taskId) {
                return { ...t, title: taskTitle, description: taskDescription, duedate: taskDueDate };
            }
            return t;
        });

        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
        setShowForm(false);
    };

    return (
        <form className='addForm' onSubmit={handleSubmit}>
            <div className='formHead'>
                <h1>Edit Task</h1>
                <img src={Cross} alt="Cross" onClick={() => setShowForm(false)} />
            </div>
            <div className='formBody'>
                <div className='formTitle'>
                    <label>Title *</label>
                    <InputType id="taskTitle" type="text" required />
                </div>
                <div className='formDescription'>
                    <label>Description</label>
                    <textarea id="taskDescription" />
                </div>
                <div className='formDate'>
                    <label>Date</label>
                    <InputType id="taskDate" type="date" required />
                </div>
            </div>
            <div className='formFooter'>
                <ButtonType className={"closeBtn"} btnText={"Close"} onClick={() => setShowForm(false)} />
                <ButtonType className={"addBtn"} btnText={"Update"} type={"submit"} />
            </div>
        </form>
    );
};

export default EditForm;
