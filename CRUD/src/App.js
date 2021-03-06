import { isEmpty, size } from "lodash"
import React, { useState, useEffect } from "react"
import { getCollection, addDocument, updateDocument, deleteDocument } from "./firebase/actions"

function App() {
  const [task, setTask] = useState("")
  const [tasks, setTasks] = useState([])
  const [editMode, setEditMode] = useState(false)
  const [id, setId] = useState("")
  const [error, setError] = useState(null)

  useEffect(() => {
    (async () => {
      const result = await getCollection("tasks")
      if(result.statusResponse){
        setTasks(result.data)
      }

    })()
  }, [])

  const validateForm = () => {
    let isValid = true
    setError(null)

    if (isEmpty(task)){
      setError("Debes ingresar una tarea.")
      isValid = false
    }
    return isValid
  }

  const addTask = async(e) => {
    e.preventDefault()
    if(!validateForm()){
      return
    }
    
    const result = await addDocument("tasks", {name: task})
    if(!result.statusResponse){
      setError(result.error)
      return
    }

    const newTask = {
      id : result.data.id,
      name: task
    }

    setTasks([...tasks, newTask])

    setTask("")
  }

  const saveTask = async(e) => {
    e.preventDefault()
    if(!validateForm()){
      return
    }

    const result = await updateDocument("tasks", id, {name: task})

    if(!result.statusResponse){
      setError(result.error)
      return
    }

    const editedTasks = tasks.map(item => item.id === id ? {id, name: task} : item)

    setTasks(editedTasks)
    setEditMode(false)
    setId("")
    setTask("")

  }

  const deleteTask = async(id) => {
    const result = await deleteDocument("tasks", id)

    if(!result.statusResponse){
      setError(result.error)
      return
    }

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
      <h1>Lista de Tareas</h1>
      <hr/>
      <div className="row">
        <div className="col-md-8">
          <h4 className="text-center">Lista de Tareas</h4>
            {
              size(tasks) === 0 ?
                <li className="list-group-item">No hay tareas</li>
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
            {
              error && <span className="text-danger mb-3">{error}</span>
            }
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
