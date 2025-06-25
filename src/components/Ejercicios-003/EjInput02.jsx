import React from 'react'
import { TituloEjercicio } from '../utils/TituloEjercicio'

const EjInput02 = () => {
    return (
        <>
            <TituloEjercicio TituloEjercicio='UseState - Inputs02' />
            <div className="row mt-4">
                <div className="col-12 mb-5">
                    <div className="input-group d-flex justify-content-around g-4">
                        <div className="form-floating">
                            <input type="number" id="inputNumero1" className="form-control" placeholder='Numero 1' />
                            <label htmlFor="InputNumero1">
                                Numero
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EjInput02