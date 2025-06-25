import React, { useState } from 'react'
import { TituloEjercicio } from '../utils/TituloEjercicio'

const EjInput01 =() =>{
    const limitesDeCaracteres = 10;
    const [textoInput, settextoInput] = useState('');
    const contadorRestantes = (limitesDeCaracteres - textoInput.length);
    const cambiarTextoInput = (e)=>{
        settextoInput(e.target.value); //target evento donde se origino el evento
    }
  return (
    <>
    <TituloEjercicio TituloEjercicio='UseState - Inputs'/>
    <div className="row mt-4">
        <div className="col-12">
            <div className="input-group mb-3">  {/*maxLength es una propiedad que limita el numero de caracteres */}
                <input type="text" className="form-control" maxLength={limitesDeCaracteres} onChange={cambiarTextoInput} value={textoInput}/>
                <span className="ms-1 input-row-text bg-primary text-white">
                    Caracteres Restantes: 
                    <span className="ms-2 p-2 badge text-bg-secondary">
                        {contadorRestantes}
                    </span>
                </span>
                <span className="input-group-text bg-primary text-white">Texto</span>
            </div>
        </div>
    </div>
    </>
  )
}

export default EjInput01