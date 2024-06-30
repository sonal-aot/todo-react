import React from 'react';
import '../styles/deleteModal.css';
import ButtonType from './ButtonType';
import CrossIcon from "../assets/cross-icon.svg"

const DeleteModal = ({ show, onClose, onConfirm }) => {
    if (!show) {
        return null;
    }

    return (
        <div className={"deleteModal"}>
            <div className="deleteHead">
            <img src={CrossIcon} alt="Cross" onClick={onClose} />
            </div>
            <div className="deleteBody">
                <span>Delete Task?</span>
                <p>Are you sure you want to delete this task?</p>
            </div>
            <div className={"buttonGroup"}>
                <ButtonType className={"cancelBtn"} btnText={"Close"} onClick={onClose} />
                <ButtonType className={"deleteBtn"} btnText={"Delete"} onClick={onConfirm} />
            </div>
        </div>
    );
};

export default DeleteModal;
