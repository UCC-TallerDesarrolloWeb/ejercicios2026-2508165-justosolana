const productos = [
    {
        nombre: "Cabezal Sparring",
        description: "Cabezal de Sparring.",
        categoria: "Protectores",
        marca: "Gran Marc",
        talle: ["1", "2", "3"],
        precio: 35000,
        web: "https://www.granmarctiendaonline.com.ar/productos/cabezal-cerrado/",
        imagen: "cabezal-cerrado.webp"
    },
    {
        nombre: "Dobok Dan",
        description: "Dobok aprobado para torneos internacionales.",
        categoria: "Dobok",
        marca: "Daedo",
        talle: ["1", "2", "3", "4", "5", "6", "7", "8"],
        precio: 115000,
        web: "https://www.daedo.com/products/taitf-10813",
        imagen: "dobok.webp"
    },
    {
        nombre: "Escudo de Potencia",
        description: "Escudo de potencia para entrenamientos.",
        categoria: "Entrenamiento",
        marca: "Gran Marc",
        talle: ["s/talle"],
        precio: 51700,
        web: "https://www.granmarctiendaonline.com.ar/productos/escudo-de-potencia-grande/",
        imagen: "escudo-potencia.webp"
    },
    {
        nombre: "Par de focos redondos",
        description: "Par de focos de 25cm x 25cm para hacer entrenamiento.",
        categoria: "Entrenamiento",
        marca: "Gran Marc",
        talle: ["s/talle"],
        precio: 15000,
        web: "https://www.granmarctiendaonline.com.ar/productos/foco-con-dedos/",
        imagen: "foco-con-dedos.webp"
    },
    {
        nombre: "Guantes 10 onzas",
        description: "Guantes de Sparring de 10 onzas habilitados para torneos internacionales.",
        categoria: "Protectores",
        marca: "Daedo",
        talle: ["s/talle"],
        precio: 35000,
        web: "https://www.daedo.com/products/pritf-2020",
        imagen: "protectores-manos.webp"
    },
    {
        nombre: "Protectores Pie",
        description: "Protectores de Pie habilitados para torneos internacionales.",
        categoria: "Protectores",
        marca: "Daedo",
        talle: ["XXS", "XS", "S", "M", "L", "XL"],
        precio: 35000,
        web: "https://www.daedo.com/collections/collection-itf-gloves/products/pritf-2022",
        imagen: "protectores-manos.webp"
    }
];

const formatearPrecio = (precio) => {
    return new Intl.NumberFormat("es-AR", {
        style: "currency",
        currency: "ARS",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(precio);
};

const obtenerCarrito = () => {
    const guardados = JSON.parse(localStorage.getItem("carrito")) || [];
    const carrito = [];

    guardados.forEach((producto) => {
        const existente = carrito.find(
            (item) => item.nombre === producto.nombre
        );

        const cantidad = producto.cantidad || 1;

        if (existente) {
            existente.cantidad += cantidad;
        } else {
            carrito.push({
                ...producto,
                cantidad: cantidad
            });
        }
    });

    return carrito;
};

const guardarCarrito = (carrito) => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
};

const actualizarContadorCarrito = () => {
    const carrito = obtenerCarrito();
    let cantidadTotal = 0;

    carrito.forEach((producto) => {
        cantidadTotal += producto.cantidad;
    });

    const contador = document.getElementById("contadorCarrito");

    if (contador) {
        contador.textContent = cantidadTotal;
    }
};

const mostrarProductos = (lista = productos) => {
    let contenido = "";

    lista.forEach((producto) => {
        const indice = productos.indexOf(producto);

        contenido += `
            <div class="tarjeta">
                <img
                    src="images/${producto.imagen}"
                    alt="${producto.nombre}"
                >

                <h3>${producto.nombre}</h3>

                <p>Precio: ${formatearPrecio(producto.precio)}</p>

                <button
                    type="button"
                    onclick="abrirDetalleProducto(${indice})"
                >
                    Ver detalle de Producto
                </button>

                <button
                    type="button"
                    onclick="agregarAlCarrito(${indice})"
                >
                    Agregar al carrito
                </button>
            </div>
        `;
    });

    if (lista.length === 0) {
        contenido = "<p>No se encontraron productos.</p>";
    }

    document.getElementById("productos").innerHTML = contenido;
};

// Ordena una copia para conservar el orden original del catálogo.
const ordenarProductos = (lista) => {
    const orden = document.getElementById("orden").value;
    const ordenados = [...lista];

    switch (orden) {
        case "precio-asc":
            ordenados.sort((a, b) => a.precio - b.precio);
            break;

        case "precio-desc":
            ordenados.sort((a, b) => b.precio - a.precio);
            break;

        case "nombre-asc":
            ordenados.sort((a, b) =>
                a.nombre.localeCompare(b.nombre, "es")
            );
            break;

        case "nombre-desc":
            ordenados.sort((a, b) =>
                b.nombre.localeCompare(a.nombre, "es")
            );
            break;
    }

    return ordenados;
};

const filtrarProductos = () => {
    const palabra = document.getElementById("buscar")
        .value.trim().toLowerCase();

    const minimo = document.getElementById("minimo").value;
    const maximo = document.getElementById("maximo").value;
    const marca = document.getElementById("marca").value;

    const seleccionadas = document.querySelectorAll(
        'input[name="categoria"]:checked'
    );

    const categorias = Array.from(seleccionadas).map(
        (checkbox) => checkbox.value
    );

    const filtrados = productos.filter((producto) => {
        const coincidePalabra = (
            producto.nombre + " " + producto.description
        ).toLowerCase().includes(palabra);

        const coincideMinimo =
            minimo === "" || producto.precio >= Number(minimo);

        const coincideMaximo =
            maximo === "" || producto.precio <= Number(maximo);

        const coincideMarca =
            marca === "" || producto.marca === marca;

        const coincideCategoria =
            categorias.length === 0 ||
            categorias.includes(producto.categoria);

        return coincidePalabra &&
            coincideMinimo &&
            coincideMaximo &&
            coincideMarca &&
            coincideCategoria;
    });

    mostrarProductos(ordenarProductos(filtrados));
};

const abrirDetalleProducto = (indice) => {
    const producto = productos[indice];

    document.getElementById("contenidoDialog").innerHTML = `
        <h2>${producto.nombre}</h2>

        <img
            src="images/${producto.imagen}"
            alt="${producto.nombre}"
            width="200"
        >

        <p>${producto.description}</p>
        <p><strong>Marca:</strong> ${producto.marca}</p>
        <p><strong>Categoría:</strong> ${producto.categoria}</p>
        <p><strong>Talle:</strong> ${producto.talle.join(", ")}</p>
        <p>
            <strong>Precio:</strong>
            ${formatearPrecio(producto.precio)}
        </p>
    `;

    document.getElementById("detalleProducto").showModal();
};

const agregarAlCarrito = (indice) => {
    const carrito = obtenerCarrito();
    const producto = productos[indice];

    const existente = carrito.find(
        (item) => item.nombre === producto.nombre
    );

    if (existente) {
        existente.cantidad += 1;
    } else {
        carrito.push({
            ...producto,
            cantidad: 1
        });
    }

    guardarCarrito(carrito);
    actualizarContadorCarrito();

    alert("Producto agregado al carrito");
};

const mostrarCarrito = () => {
    const carrito = obtenerCarrito();
    const contenedor = document.getElementById("carritoProductos");

    if (carrito.length === 0) {
        contenedor.innerHTML = `
            <p>No hay productos en el carrito.</p>
            <p><strong>Total a pagar: ${formatearPrecio(0)}</strong></p>
        `;

        actualizarContadorCarrito();
        return;
    }

    let total = 0;

    let contenido = `
        <div style="grid-column: 1 / -1;">
            <button type="button" onclick="vaciarCarrito()">
                Vaciar el carrito
            </button>
        </div>
    `;

    carrito.forEach((producto, indice) => {
        const subtotal = producto.precio * producto.cantidad;
        total += subtotal;

        contenido += `
            <div class="tarjeta">
                <img
                    src="images/${producto.imagen}"
                    alt="${producto.nombre}"
                >

                <h3>${producto.nombre}</h3>

                <p>
                    Precio unitario:
                    ${formatearPrecio(producto.precio)}
                </p>

                <p>Cantidad: ${producto.cantidad}</p>

                <p>
                    <strong>
                        Subtotal: ${formatearPrecio(subtotal)}
                    </strong>
                </p>

                <button
                    type="button"
                    onclick="eliminarProducto(${indice})"
                >
                    Eliminar el producto
                </button>
            </div>
        `;
    });

    contenido += `
        <div style="grid-column: 1 / -1;">
            <h2>Total a pagar: ${formatearPrecio(total)}</h2>
        </div>
    `;

    contenedor.innerHTML = contenido;
    actualizarContadorCarrito();
};

const vaciarCarrito = () => {
    localStorage.removeItem("carrito");
    mostrarCarrito();
};

const eliminarProducto = (indice) => {
    const carrito = obtenerCarrito();

    carrito.splice(indice, 1);

    guardarCarrito(carrito);
    mostrarCarrito();
};

document.addEventListener("DOMContentLoaded", actualizarContadorCarrito);