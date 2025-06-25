import { useState } from "react"
import { TituloEjercicio } from "../TituloEjercicio"

export const EjercicioUseState001 = () => {
  const [textoBoton, setTextoBoton] = useState('Iniciar Sesion');

  const cambiarTextoIconoBoton = ()=>{
    if(textoBoton === 'Iniciar Sesion'){
      setTextoBoton('Cerrar Sesion');
      setIconoBtn('bi bi-arrow-left');
    }else{
      setTextoBoton('Iniciar Sesion');
      setIconoBtn('bi bi-arrow-right-circle-fill')
    }
  }
  const [iconoBtn, setIconoBtn] = useState('bi bi-arrow-left-circle-fill"');

  return (
    <>
    <TituloEjercicio tituloEjercicio="Ejercicio 05 - Introduccion a Hook UseState "/>
    <div className="col-12 text-center">
      <button className="btn btn-dark w-50" onClick={cambiarTextoIconoBoton}>
        <i className={`bi ${iconoBtn}`} ></i>
        <span className="ms-2">
          {textoBoton}
        </span>
      </button>
    </div>
    </>
  )
}
