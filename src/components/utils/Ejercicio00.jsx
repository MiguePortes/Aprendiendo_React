import { use, useState } from "react"

export const Ejercicio00 = () => {
  const [textoTitulo, setextoTitulo] = useState('Miguel');
  function cambiarTexto (){
    setextoTitulo('Ejemplo de useState');
    setParrafo('Mami que tu quiere aqui llego tu tiburonnnn 🐬!!!!!!!');
    setBeca(2.50);
    setColor('btn btn-primary');
  }
  const [parrafo, setParrafo] = useState('Holis');
  const [beca, setBeca] = useState(35.000);
  const [color, setColor] = useState('span.color.primary');
  return (
    <div>{textoTitulo}
    <p>{parrafo}</p>
    <p> Tu beca es de $
      <span className="text-danger" onClick={color}>
        {beca}
      </span>
    </p>
    <button id="boton" className="btn btn-danger" onClick={cambiarTexto}>
      Cambiar Mensaje de Div
    </button>
    </div>
  )
}

//que es el hookState
//al dar click el numero se tache 

//ejercico de imagen
