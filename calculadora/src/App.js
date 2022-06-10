import './App.css';
import logo from './imagenes/FreeCodeCamp_logo.png'
import Boton from './componentes/Boton'
import BotonClear from './css/BotonClear';
import Pantalla from './componentes/Pantalla';
import {useState} from 'react';


function App() {

  const [input, setInput] = useState('0');

  const agregarInput = val => {
    setInput(input + val)
  };

  return (
    <div className='App'>
      <div className='logo-contenedor'>
          <img 
          className='logo'
          src={logo}
          alt='Logo FreeCodeCamp' 
          />
        </div>
        <div className='contenedor-calculadora'>
          <Pantalla input={input} />
          <div className='fila'>
            <Boton manejarClic={agregarInput}>7</Boton>
            <Boton manejarClic={agregarInput}>8</Boton>
            <Boton manejarClic={agregarInput}>9</Boton>
            <Boton>/</Boton>
          </div>
          <div className='fila'>
            <Boton manejarClic={agregarInput}>4</Boton>
            <Boton manejarClic={agregarInput}>5</Boton>
            <Boton manejarClic={agregarInput}>6</Boton>
            <Boton manejarClic={agregarInput}>X</Boton>
          </div>
          <div className='fila'>
            <Boton manejarClic={agregarInput}>1</Boton>
            <Boton manejarClic={agregarInput}>2</Boton>
            <Boton manejarClic={agregarInput}>3</Boton>
            <Boton manejarClic={agregarInput}>-</Boton>
          </div>
          <div className='fila'>
            <Boton manejarClic={agregarInput}>0</Boton>
            <Boton manejarClic={agregarInput}>.</Boton>
            <Boton manejarClic={agregarInput}>=</Boton>
            <Boton manejarClic={agregarInput}>+</Boton>
          </div>
          <div className='fila'>
            <BotonClear>Limpiar</BotonClear>
          </div>
        </div>
    </div>
  );
}

export default App;
