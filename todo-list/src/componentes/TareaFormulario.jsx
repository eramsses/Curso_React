import React from "react";
import '../css/TareaFormulario.css'

function TareaFormulario(props){
    return (
        <form className="tarea-formulario">
            <input
                className="tarea-input"
                type='text'
                placeholder='Escribe una tarea'
                name='tarea'
            />
            <button className="tarea-boton">
                Agregar
            </button>
        </form>
    );
}

export default TareaFormulario;