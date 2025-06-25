import { useState } from 'react';

export const EjercicioUseState003 = () => {
  const [textoBoton, setTextoBoton] = useState('cambiar imagen XD');
  const [imagen, setImagen] = useState({
    src: 'src/assets/fondo1.jpg',
    altText: 'Imagen Hola',
    tituloImagen: 'Imagen Hola'
  });



  const cambiarTextoBoton = () => {
    if (textoBoton === 'cambiar imagen XD') {
      setTextoBoton('regresar imagen');
    } else {
      setTextoBoton('cambiar imagen XD');
    }
  };



  const cambiarImagen = () => {
    if (imagen.src === 'src/assets/fondo2.jpg') {
      setImagen({
        src: 'src/assets/fondo1.jpg',
        altText: 'Imagen Hola',
        tituloImagen: 'Imagen Hola'
      });
    } else {  
      setImagen({
        src: 'src/assets/fondo2.png',
        altText: 'Imagen Hola',
        tituloImagen: 'Imagen Hola'
      });
    }
  };

  return (
    <div className="row mt-4">
      <div className="col-12">
        <h2 className="h4 mt-4">Ejercicio 03 - useState</h2>
        <hr className='bg-primary' />
        <br />
      </div>
      <div className="col-12 text-center">
        <img
          className='rounded mx-auto d-block mb-4'
          src={imagen.src}
          alt={imagen.altText}
          title={imagen.tituloImagen}
          width='200px'
          height='200px'
        />

        <button
          className='btn btn-info btn-outline-dark btn-lg w-50 mb-5'
          onClick={() => {
            cambiarImagen();
            cambiarTextoBoton();
          }}
        >
          {textoBoton}
        </button>
      </div>
    </div>
  );
};

export default EjercicioUseState003;