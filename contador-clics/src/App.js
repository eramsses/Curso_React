import './App.css';
import logo from './imagenes/FreeCodeCamp_logo.png'

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
    </div>
  );
}

export default App;
