import React from React;

function Boton({texto, esBotonDeClic, manejarClic}){
  return(
    <button 
    className={ esBotonDeClic ? 'boton-clic' : 'boton-reiniciar' }
    onClick={manejarClic} >
      {texto}
    </button>
  );
}