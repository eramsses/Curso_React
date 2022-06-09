import './App.css';
import './css/Boton.css'
import './css/Contador.css'
import logo from './imagenes/FreeCodeCamp_logo.png'
import Boton from './componentes/Boton'
import Contador from './componentes/Contador';

const manejarClic = () => {
  console.log("Clic");
}

const reiniciarContador = () => {
  console.log("Reiniciar");
}

function App() {
  return (
    <div className='App'>
        <div className='logo-contenedor'>
          <img 
          className='logo'
          src={logo}
          alt='Logo FreeCodeCamp' 
          width={500}/>
        </div>
        <div className='contenedor-principal'>
          <Contador numClics='5' />
          <Boton
            texto='Clic'
            esBotonDeClic={true}
            manejarClic={manejarClic}
          />
          <Boton
            texto='Reiniciar'
            esBotonDeClic={false}
            manejarClic={reiniciarContador}
          ></Boton>
        </div>
    </div>
  );
}

export default App;
