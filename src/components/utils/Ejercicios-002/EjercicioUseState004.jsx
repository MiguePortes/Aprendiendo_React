import React, { useState } from 'react';

export const EjercicioUseState004 = () => {
  const [color, setCambiarColor] = useState('danger');

  const cambiarcolor = (color) => {
    setCambiarColor(color);
  };

  return (
    <>
      <div className='row mt-4'>
        <div className="col-12 mb-2 bg-dark p-3">
          <div
            className={`border border-5 border-white rounded-circle mx-auto bg-${color}`}
            style={{ width: '5rem', height: '5rem' }}
          ></div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-12 d-flex justify-content-around gap-4">
          <button className="btn btn-outline-danger" onClick={() => cambiarcolor('danger')}>Rojo</button>
          <button className="btn btn-outline-success" onClick={() => cambiarcolor('success')}>Verde</button>
          <button className="btn btn-outline-warning" onClick={() => cambiarcolor('warning')}>Naranja</button>
        </div>
      </div>
    </>
  );
};
