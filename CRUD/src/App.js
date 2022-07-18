import React from "react"

function App() {
  return (
    <div className="container mt-5">
      <h1>Tareas</h1>
      <hr/>
      <div className="row">
        <div className="col-md-8">
          <h4 className="text-center">Lista de Tareas</h4>
          <ul className="list-group">
            <li className="list-group-item">
              <span>Nombre de la tarea</span>
              <button className="btn btn-warning btn-sm float-end">Editar</button>
              <button className="btn btn-danger btn-sm float-end mx-2">Eliminar</button>
            </li>
          </ul>
        </div>
        <div className="col-md-4">
          <h4 className="text-center">Formulario</h4>
          <form>
            <input className="form-control mb-2" type={"text"} 
            placeholder="Ingrese la tarea"
            />
            <div class="d-grid gap-2">
              <button className="btn btn-outline-primary" >Agregar</button>
            </div>
          </form>
        </div>
      </div>
    </div>  
  )
}

export default App
