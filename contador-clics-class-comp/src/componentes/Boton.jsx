import React from 'react';

class Boton extends React.Component{
  render(){
    return(
      <button 
      className={ this.props.esBotonDeClic ? 'boton-clic' : 'boton-reiniciar' }
      onClick={this.props.manejarClic} >
        {this.props.texto}
      </button>
    );
  };
}

/*function Boton({texto, esBotonDeClic, manejarClic}){
  return(
    <button 
    className={ esBotonDeClic ? 'boton-clic' : 'boton-reiniciar' }
    onClick={manejarClic} >
      {texto}
    </button>
  );
}*/

export default Boton;