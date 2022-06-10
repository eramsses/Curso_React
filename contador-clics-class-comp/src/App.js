import './App.css';
import './css/Boton.css'
import './css/Contador.css'
import logo from './imagenes/FreeCodeCamp_logo.png'
import Boton from './componentes/Boton'
import Contador from './componentes/Contador';
import React from 'react';

class App extends React.Component{
  
 constructor() {
    super();
    this.state = {
      numClics: 1
    };

    //bind asocia el método para que sean usados como metodos
    this.manejarClic = this.manejarClic.bind(this);
    this.reiniciarContador = this.reiniciarContador.bind(this);
  }
    manejarClic() {
      this.setState(({ numClics }) => ({ numClics: numClics + 1 }));
    }

    reiniciarContador(){
      this.setState({ numClics: 0});
    }

 

  render(){
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
            <Contador numClics={this.state.numClics} />
            <Boton
              texto='Clic'
              esBotonDeClic={true}
              manejarClic={this.manejarClic}
            />
            <Boton
              texto='Reiniciar'
              esBotonDeClic={false}
              manejarClic={this.reiniciarContador}
            ></Boton>
          </div>
      </div>
    );
  }
}



/*function App() {
  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics(numClics + 1);
  };
  
  const reiniciarContador = () => {
    setNumClics(0);
  };

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
          <Contador numClics={numClics} />
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
}*/

export default App;
