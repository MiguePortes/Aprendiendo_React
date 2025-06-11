import { BotonGeneral } from "./components/utils/BotonGeneral"
import { ComponenteBotones } from './components/utils/ComponenteBotones.jsx';
import { Ejercicio01 } from "./components/utils/Ejercicio01"
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
    <ComponenteBotones/>
    </>
  )
}

export default App
