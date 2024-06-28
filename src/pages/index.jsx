import Header from "../components/Header"
import '../styles/index.css'
import SearchContainer from "../components/SearchContainer"
import ActiveTaskContainer from "../components/ActiveTaskContainer"
import { useState } from "react"
import TaskForm from "../components/TaskForm"


function Index() {

const [showForm,setShowForm] = useState(false)

const displayForm =()=>{
    setShowForm(!showForm)
}

    return (

        <div className="container">
            <Header displayForm={displayForm} />
            <SearchContainer />
            <ActiveTaskContainer/>
            {showForm && <TaskForm setShowForm={setShowForm} />}
        </div>
    )
}

export default Index