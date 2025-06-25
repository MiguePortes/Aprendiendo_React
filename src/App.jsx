import { Ejercicio2 } from "./components/utils/Ejercicio2.jsx";
import { BotonGeneral } from "./components/utils/BotonGeneral"
import { ComponenteBotones } from './components/utils/ComponenteBotones.jsx';
import { Ejercicio01 } from "./components/utils/Ejercicio01"
import {Ejercicio03} from "./components/utils/Ejercicio03.jsx";
import { Ejercicio4 } from "./components/utils/Ejercicio4.jsx";
import { EjercicioUseState001 } from "./components/utils/Ejercicios-002/EjercicioUseState001.jsx";
import { Ejercicio00 } from "./components/utils/Ejercicio00.jsx";
import { EjercicioUseState003 } from "./components/utils/Ejercicios-002/EjercicioUseState003.jsx";
import { EjercicioUseState004 } from './components/utils/Ejercicios-002/EjercicioUseState004';
import EjInput01 from "./components/Ejercicios-003/EjInput01.jsx";
function App() {
  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1 className="mt-2 text-center alert alert-success">
            Hola UTSH
          </h1>
        </div>
      </div>
    </div>  
    {/* <EjercicioUseState004/> */}
    <EjInput01/>
    </>
  )
}

export default App
