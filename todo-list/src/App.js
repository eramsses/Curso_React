import './App.css';
import logo from  './imagenes/FreeCodeCamp_logo.png'
import Tarea from './componentes/Tarea';

import ListaTareas from './componentes/ListaTareas';


function App() {
  return (
    <div className="App">
      <div className='logo-contenedor'>
          <img 
            className='logo'
            src={logo}
            alt='Logo FreeCodeCamp' 
          />
        </div>
        <div className='todo-list-principal' >
          <h1>Mis Tareas</h1>
          <ListaTareas />
        </div>
        
    </div>
  );
}

export default App;
