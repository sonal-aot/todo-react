import React from 'react';
import '../styles/navbar.css'
import ButtonType from './ButtonType';
import TaskForm from './TaskForm';

const Header = ({displayForm}) => {

    return (

        <div className="navbar">
            <h3>My Tasks</h3>
            <ButtonType id={"addTask"} btnText={"Add Task"} displayForm={displayForm} />
        </div>


    )
}

export default Header