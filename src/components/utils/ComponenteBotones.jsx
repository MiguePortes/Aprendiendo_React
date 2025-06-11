import { BotonRegistrer } from './BotonRegistrer'; 
import { BotonSesion } from './BotonSesion';

export const ComponenteBotones = () => {
  return (
    <div 
      className="border p-3 d-flex flex-column flex-md-row justify-content-center align-items-center w-100"
      style={{ maxWidth: '600px',margin: '0 auto',gap: '10px',backgroundColor: 'pink'}}>
      <BotonSesion />
      <BotonRegistrer />
    </div>
  );
}
