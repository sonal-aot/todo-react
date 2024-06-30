import Header from "../components/Header"
import '../styles/index.css'
import SearchContainer from "../components/SearchContainer"
import { useState } from "react"
import TaskForm from "../components/TaskForm"
import TaskList from "../components/TaskList"


function Index() {

const [showForm,setShowForm] = useState(false)

const displayForm =()=>{
    setShowForm(!showForm)
}

    return (

        <div className="container">
            <Header displayForm={displayForm} />
            <TaskList/>
            {showForm && <TaskForm setShowForm={setShowForm} />}
        </div>
    )
}

export default Index