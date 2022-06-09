import React from React;

function Boton({texto, esBotonDeClic}){
  return(
    <button 
    className={ esBotonDeClic ? 'boton-clic' : 'boton-reiniciar' } >
      {texto}
    </button>
  );
}