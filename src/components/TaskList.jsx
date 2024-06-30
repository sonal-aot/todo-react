import React, { useState, useEffect } from 'react';
import TaskElement from './TaskElement';
import '../styles/taskList.css';
import EditForm from '../components/EditTaskForm';
import SearchContainer from '../components/SearchContainer';

function TaskList({ displayForm }) {
    const [tasks, setTasks] = useState([]);
    const [showEditForm, setShowEditForm] = useState(false);
    const [editTaskId, setEditTaskId] = useState(null);
    const [sortOption, setSortOption] = useState('Newest First');
    const [searchQuery, setSearchQuery] = useState('');

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

    const editTask = (id) => {
        setEditTaskId(id);
        setShowEditForm(true);
    };

    const confirmDelete = (id) => {
        const updatedTasks = tasks.filter(task => task.id !== id);
        setTasks(updatedTasks);
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    };

    const sortTasks = (tasks, criteria) => {
        switch (criteria) {
            case 'Newest First':
                return tasks.sort((a, b) => new Date(b.id) - new Date(a.id));
            case 'Oldest First':
                return tasks.sort((a, b) => new Date(a.id) - new Date(b.id));
            default:
                return tasks;
        }
    };

    const searchTasks = (tasks, query) => {
        if (!query) return tasks;
        const lowerCaseQuery = query.toLowerCase();
        return tasks.filter(task =>
            task.title.toLowerCase().includes(lowerCaseQuery) ||
            task.description.toLowerCase().includes(lowerCaseQuery)
        );
    };

    const sortedTasks = sortTasks([...tasks], sortOption);
    const filteredTasks = searchTasks(sortedTasks, searchQuery);

    const activeTasks = filteredTasks.filter(task => !task.completed);
    const completedTasks = filteredTasks.filter(task => task.completed);

    return (
        <div>
            <SearchContainer
                sortOption={sortOption}
                setSortOption={setSortOption}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
            />

            <div className="activeTaskContainer">
                <span className='head'>Active Tasks</span>
                {activeTasks.map(task => (
                    <TaskElement
                        key={task.id}
                        task={task}
                        onCheckboxChange={handleCheckboxChange}
                        editTask={editTask}
                        confirmDelete={confirmDelete}
                    />
                ))}
            </div>

            <div className="completedTaskContainer">
                <span className='head'>Completed Tasks</span>
                {completedTasks.map(task => (
                    <TaskElement
                        key={task.id}
                        task={task}
                        onCheckboxChange={handleCheckboxChange}
                        editTask={editTask}
                        confirmDelete={confirmDelete}
                    />
                ))}
            </div>

            {showEditForm && (
                <EditForm
                    setShowForm={setShowEditForm}
                    taskId={editTaskId}
                />
            )}
        </div>
    );
}

export default TaskList;
