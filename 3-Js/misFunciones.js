/**
 * Convierte un valor ingresado a metros, pulgadas, pies y yardas.
 *
 * @function convertirUnidad
 * @param {number} valor - Valor ingresado por el usuario.
 * @param {string} unidad - Nombre de la unidad que fue modificada.
 * @returns {void}
 */
function convertirUnidad(valor, unidad) {

    if (unidad == "metro") {
        document.getElementById("pulgada").value = valor * 39.3701;
        document.getElementById("pie").value = valor * 3.28084;
        document.getElementById("yarda").value = valor * 1.09361;
    }

    if (unidad == "pulgada") {
        document.getElementById("metro").value = valor / 39.3701;
        document.getElementById("pie").value = valor / 12;
        document.getElementById("yarda").value = valor / 36;
    }

    if (unidad == "pie") {
        document.getElementById("metro").value = valor / 3.28084;
        document.getElementById("pulgada").value = valor * 12;
        document.getElementById("yarda").value = valor / 3;
    }

    if (unidad == "yarda") {
        document.getElementById("metro").value = valor / 1.09361;
        document.getElementById("pulgada").value = valor * 36;
        document.getElementById("pie").value = valor * 3;
    }
}