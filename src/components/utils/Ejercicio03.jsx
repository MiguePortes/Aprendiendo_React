import { useState } from "react";

export const Ejercicio03 = () => {
//hook useState
    const [numerito, setNumerito] = useState(0);
    //arrowFunction
    const sumar = ()=>{
    setNumerito(numerito  + 1 );
    }

    const restar = ()=>{
        setNumerito(numerito - 1);
    }
    const reiniciar = ()=>{
        setNumerito(0);
    }
  return (
    <>
    <div className="row mt-4">
    <div className="col-12">
        <h2 className="h4 mt-4">
        Ejercicio3 - Funciones - Contador
        </h2>
        <hr/>
    </div>
    <div className="col-12 text-center">
        <p className="h1">
            {numerito}
        </p>
        <button className="w-25 btn btn-warning text-white fw-bold" onClick={sumar}>
            Sumar
        </button>
    </div>
    <div className="col-12 text-center">
        <button className="w-25 btn btn-success text-white fw-bold" onClick={reiniciar}>
            Reiniciar
        </button>
    </div>
     <div className="col-12 text-center">
        <button className="w-25 btn btn-danger text-white fw-bold" onClick={restar}>
            Restar
        </button>
    </div>
    </div>
    </>
  )
}

