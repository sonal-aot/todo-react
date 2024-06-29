import React, { useState, useEffect } from 'react';
import TaskElement from './TaskElement';
import '../styles/taskList.css'
function TaskList() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const mydata = JSON.parse(localStorage.getItem("tasks")) || [];
        setTasks(mydata);
    }, []);

    const handleCheckboxChange = (id) => {
        const updatedTasks = tasks.map(task => {
            if (task.id === id) {
                task.completed = !task.completed;
            }
            return task;
        });
        setTasks(updatedTasks);
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    };

    const activeTasks = tasks.filter(task => !task.completed);
    const completedTasks = tasks.filter(task => task.completed);

    return (
        <div>
            <div className="activeTaskContainer">
                <span className='head'>Active Tasks</span>
                {activeTasks.map(task => (
                    <TaskElement key={task.id} task={task} onCheckboxChange={handleCheckboxChange} />
                ))}
            </div>

            <div className="completedTaskContainer">
                <span className='head'>Completed Tasks</span>
                {completedTasks.map(task => (
                    <TaskElement key={task.id} task={task} onCheckboxChange={handleCheckboxChange} />
                ))}
            </div>
        </div>
    );
}

export default TaskList;
