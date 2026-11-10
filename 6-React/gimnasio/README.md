# Gimnasio

Aplicación de los ejercicios de React y APIs de las unidades 6 y 7. Incluye inicio de sesión, actividades, consulta de Pokémon, tienda y carrito.

## Instalación

Se necesita Node.js y npm. Desde la raíz del repositorio:

```bash
cd 6-React/gimnasio
npm install
```

## Ejecución

En una terminal, dentro de `6-React/gimnasio`, iniciar el servicio de datos:

```bash
npm run services
```

El servicio usa `src/data/db.json` y queda disponible en `http://localhost:4000`.

En otra terminal, dentro de la misma carpeta, iniciar React:

```bash
npm run dev
```

Abrir la dirección que muestra Vite, normalmente `http://localhost:5173`. Mantener las dos terminales abiertas mientras se usa la aplicación.

## Acceso de práctica

- Usuario: `admin`.
- Contraseña: `admin`.

Al ingresar se abre Actividades. En Tienda, agregar productos al carrito requiere iniciar sesión. La sesión se guarda en el estado de React, por lo que se reinicia al recargar la página.

## Pantallas

| Ruta | Contenido |
|---|---|
| `/` o `/home` | Actividades del gimnasio con imágenes |
| `/login` | Inicio de sesión |
| `/actividades` | Actividades y horarios obtenidos del servicio local |
| `/poke` | Primeros 20 Pokémon obtenidos de PokeAPI |
| `/tienda` | Productos, detalle en un diálogo y botón para agregar al carrito |
| `/carrito` | Cantidades, eliminación de productos, vaciado y total |

La consulta de Pokémon necesita conexión a Internet.

## Datos y configuración

- [src/data/db.json](src/data/db.json): colecciones `activities`, `products` y `cart` del servicio final.
- [src/data/activities.json](src/data/activities.json): archivo del primer ejercicio de mock del backend. Para ejecutar la aplicación completa se usa `db.json`.
- [.env](.env): contiene `VITE_BASE_URL="http://localhost:4000/"`, utilizada por las funciones de la tienda y el carrito.
- [src/api/store.js](src/api/store.js): peticiones de productos y carrito.

El servicio local expone `GET /activities`, `GET /products`, `GET /cart`, `POST /cart`, `PATCH /cart/:id` y `DELETE /cart/:id`. Para vaciar el carrito se elimina cada elemento por su identificador.

## Comprobaciones

Desde `6-React/gimnasio`:

```bash
npm run lint
npm run build
```

`lint` revisa el código y `build` genera la versión compilada en `dist`.
