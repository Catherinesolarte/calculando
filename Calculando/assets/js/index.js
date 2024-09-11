document.addEventListener("DOMContentLoaded", function () {
    // Inicialización de variables
    var cantidadProducto = 1; // Cantidad inicial de productos
    var precioUnitario = 400000; // Precio base por producto

    // Referencias a los elementos del DOM
    var cantidadDisplay = document.querySelector("#cantidad"); // Elemento para mostrar la cantidad
    var totalDisplay = document.querySelector("#valor-total"); // Elemento para mostrar el total a pagar

    // Mostrar el total al cargar la página
    cantidadDisplay.innerHTML = cantidadProducto;
    totalDisplay.innerHTML = (cantidadProducto * precioUnitario).toLocaleString();

    /**
     * Función para aumentar la cantidad
     * Se ejecuta cuando se hace clic en el botón "+"
     */
    document.querySelector("#sumar").addEventListener("click", function () {
        cantidadProducto++; // Incrementar la cantidad
        cantidadDisplay.innerHTML = cantidadProducto; // Actualizar la cantidad en la interfaz
        actualizarTotal(); // Recalcular el total a pagar
    });

    /**
     * Función para disminuir la cantidad
     * Se ejecuta cuando se hace clic en el botón "-"
     * Verifica que la cantidad no sea menor a 1
     */
    document.querySelector("#restar").addEventListener("click", function () {
        if (cantidadProducto > 1) { // Solo disminuir si la cantidad es mayor a 1
            cantidadProducto--; // Disminuir la cantidad
            cantidadDisplay.innerHTML = cantidadProducto; // Actualizar la cantidad en la interfaz
            actualizarTotal(); // Recalcular el total a pagar
        }
    });

    /**
     * Función para actualizar el total a pagar
     * Multiplica la cantidad por el precio unitario y muestra el resultado en el DOM
     */
    function actualizarTotal() {
        var total = cantidadProducto * precioUnitario; // Calcular el total
        totalDisplay.innerHTML = total.toLocaleString(); // Mostrar el total formateado
    }
});
