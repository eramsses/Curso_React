import { isEmpty, size } from "lodash"
import React, { useState } from "react"
import shortid from "shortid"

function App() {
  const [task, setTask] = useState("")
  const [tasks, setTasks] = useState([])
  const [editMode, setEditMode] = useState(false)
  const [id, setId] = useState("")

  const addTask = (e) => {
    e.preventDefault()
    if(isEmpty(task)){
      console.log("Task vacío")
      return
    }
    
    const newTask = {
      id : shortid.generate(),
      name: task
    }
    
    setTasks([...tasks, newTask])

    setTask("")
  }

  const saveTask = (e) => {
    e. preventDefault()
    if(isEmpty(task)){
      console.log("Task vacío")
      return
    }

    const editedTasks = tasks.map(item => item.id === id ? {id, name: task} : item)

    setTasks(editedTasks)
    setEditMode(false)
    setId("")
    setTask("")

  }

  const deleteTask = (id) => {
    const filteredTasks = tasks.filter(task => task.id !== id)
    setTasks(filteredTasks)
  }

  const editTask = (theTask) => {
    setEditMode(true)
    setId(theTask.id)
    setTask(theTask.name)
  }

  return (
    <div className="container mt-5">
      <h1>Tareas</h1>
      <hr/>
      <div className="row">
        <div className="col-md-8">
          <h4 className="text-center">Lista de Tareas</h4>
            {
              size(tasks) === 0 ?
                <h5 className="text-center">No hay tareas</h5>
              :
                <ul className="list-group">
                {
                  tasks.map((task) => (
                    <li className="list-group-item" key={task.id}>
                    <span>{task.name}</span>
                    <button className="btn btn-warning btn-sm float-end"
                    onClick={() => editTask(task)}
                    >
                      Editar
                    </button>
                    <button className="btn btn-danger btn-sm float-end mx-2"
                    onClick={() => deleteTask(task.id)}
                    >
                      Eliminar
                    </button>
                  </li>
                  ))
                  
                }
                
              </ul>
            }
        </div>
        <div className="col-md-4">
          <h4 className="text-center">{editMode ? "Modificar Tarea" : "Agregar Tarea"}</h4>
          <form onSubmit={editMode? saveTask: addTask}>
            <input className="form-control mb-2" type={"text"} 
            placeholder="Ingrese la tarea"
            onChange={(text) => setTask(text.target.value)}
            value={task}
            />
            <div className="d-grid gap-2">
              <button className={editMode ?"btn btn-outline-warning" : "btn btn-outline-primary"} type="submit" >{editMode ? "Modificar" : "Agregar"}</button>
            </div>
          </form>
        </div>
      </div>
    </div>  
  )
}

export default App
