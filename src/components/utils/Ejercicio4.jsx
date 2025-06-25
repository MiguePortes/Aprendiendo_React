import React, { useState } from 'react'
export const Ejercicio4 = () => {
    //hook useState
    const [nombre, setNombre] = useState('');
    //saludo
    const saludo = ()=>{
        setNombre('Holaaa Migue');
    }
    const despido = ()=>{
        setNombre('Adiossss Migue');
    }
    const inicio = ()=>{
        setNombre('Aplicacion UTSH');
    }
  return (
    <>
    <div className="row mt-4">
        <div className="col-12">
            <h2 className='h4 mt-4'>
                Ejercicio4 Practica
            </h2>
            <hr/>
        </div>
        <div className="col-12 text-center">
            <p className="h1">
                {nombre}
            </p>
            <button className="btn btn-outline-primary text-black fw-bold" onClick={saludo}>
                Saludo
            </button>
        </div>
         <div className="col-12 text-center">
            <p className="h1">
            </p>
            <button className="btn btn-outline-success text-black fw-bold" onClick={inicio}>
                Inicio
            </button>
        </div>
         <div className="col-12 text-center">
            <p className="h1">
            </p>
            <button className="btn btn-outline-info text-black fw-bold" onClick={despido}>
                Despido
            </button>
        </div>
    </div>
    </>
  )
}
