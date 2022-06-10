import react from 'react';
import '../css/Boton.css'


function Boton(props){

  const esOperador = valor => {
    return isNaN(valor) && (valor != '.') && valor != '='
  }
  return(
    <div className={`boton-contenedor ${esOperador(props.children) ? 'btn-operador' : ''}`}>
      {props.children}
    </div>
  );
}



export default Boton;
