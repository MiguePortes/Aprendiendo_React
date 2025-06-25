export const Ejercicio2 = () => {
    //logica de componente
    //variable / constante
    //hooks
    //funciones
    const nombreProducto = 'Smart TV 90';
    function agregarACarritoDeCompras(){
        console.log('El producto: ', nombreProducto, 'se agrego al carrito');
    }
    function eliminarProductoDeCarrito(){
        console.warm('Eliminandooooo',nombreProducto).remove();
    }

    return (
        <>
        <div className="row mt-4">
            <div className="col-12">
                <h2 className="h4 mt-4">
                Ejercicio2 - Boton y funciones
                </h2>
                <hr/>
            </div>
                <button className=" w-25 btn btn-primary" onClick={agregarACarritoDeCompras}>
                    <i class="bi bi-cart-plus-fill"></i>
                   <span className="ms-2">
                     Agregar Articulo
                   </span>
                </button>
                <button className=" w-25 btn btn btn-danger" onClick={eliminarProductoDeCarrito}>
                    <i class="bi bi-trash3-fill"></i>
                    <span className="ms -2">
                        Eliminar Producto
                    </span>
                </button>
        </div>
        </>
    )
}

