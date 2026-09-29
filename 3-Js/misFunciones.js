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

    valor = valor.replace(",", ".");
    valor = Number(valor);

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

    document.getElementById("metro").value = metro.toFixed(2);
    document.getElementById("pulgada").value = pulgada.toFixed(2);
    document.getElementById("pie").value = pie.toFixed(2);
    document.getElementById("yarda").value = yarda.toFixed(2);
}


function convertirGrados(grados) {
    document.getElementById("radianes").value = grados * Math.PI / 180;
}

function convertirRadianes(radianes) {
    document.getElementById("grados").value = radianes * 180 / Math.PI;
}


const mostrarOcultar = (accion) => {

    if (accion == "mostrar") {
        document.getElementById("unDiv").style.display = "block";
    }

    if (accion == "ocultar") {
        document.getElementById("unDiv").style.display = "none";
    }
}


const cerrarDialog = () => {
    document.getElementById("detalleProducto").close();
}


const sumar = () => {

    let num1 = document.getElementById("nums1").value;
    let num2 = document.getElementById("nums2").value;

    if (num1 != "" && num2 != "") {

        num1 = Number(num1);
        num2 = Number(num2);

        document.getElementById("totalS").innerHTML = num1 + num2;
    }
}


const restar = () => {

    let num1 = document.getElementById("numr1").value;
    let num2 = document.getElementById("numr2").value;

    if (num1 != "" && num2 != "") {

        num1 = Number(num1);
        num2 = Number(num2);

        document.getElementById("totalR").innerHTML = num1 - num2;
    }
}


const multiplicar = () => {

    let num1 = document.getElementById("numm1").value;
    let num2 = document.getElementById("numm2").value;

    if (num1 != "" && num2 != "") {

        num1 = Number(num1);
        num2 = Number(num2);

        document.getElementById("totalM").innerHTML = num1 * num2;
    }
}


const dividir = () => {

    let num1 = document.getElementById("numd1").value;
    let num2 = document.getElementById("numd2").value;

    if (num1 != "" && num2 != "") {

        num1 = Number(num1);
        num2 = Number(num2);

        document.getElementById("totalD").innerHTML = num1 / num2;
    }
}