/**
 * Convierte un valor ingresado a metros, pulgadas, pies y yardas.
 *
 * @function convertirUnidad
 * @param {number} valor - Valor ingresado por el usuario.
 * @param {string} unidad - Nombre de la unidad que fue modificada.
 * @returns {void}
 */
const convertirUnidad = (valor, unidad) => {

    let metro;
    let pulgada;
    let pie;
    let yarda;

    if (unidad == "metro") {
        metro = valor;
        pulgada = valor * 39.3701;
        pie = valor * 3.28084;
        yarda = valor * 1.09361;
    }

    if (unidad == "pulgada") {
        metro = valor / 39.3701;
        pulgada = valor;
        pie = valor / 12;
        yarda = valor / 36;
    }

    if (unidad == "pie") {
        metro = valor / 3.28084;
        pulgada = valor * 12;
        pie = valor;
        yarda = valor / 3;
    }

    if (unidad == "yarda") {
        metro = valor / 1.09361;
        pulgada = valor * 36;
        pie = valor * 3;
        yarda = valor;
    }

    document.getElementById("metro").value = metro;
    document.getElementById("pulgada").value = pulgada;
    document.getElementById("pie").value = pie;
    document.getElementById("yarda").value = yarda;
}
function convertirGrados(grados) {
    document.getElementById("radianes").value = grados * Math.PI / 180;
}

function convertirRadianes(radianes) {
    document.getElementById("grados").value = radianes * 180 / Math.PI;
}