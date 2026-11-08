# Análisis de PokeAPI

## Consulta en el navegador

URL: https://pokeapi.co/api/v2/pokemon/1

La API devuelve un objeto en formato JSON con información de Bulbasaur.

- `id`: 1, identificador del Pokémon.
- `name`: "bulbasaur", nombre del Pokémon.
- `height`: 7, altura en la unidad utilizada por la API.
- `weight`: 69, peso en la unidad utilizada por la API.
- `types`: array con sus tipos, `grass` y `poison`.
- `abilities`: array con sus habilidades, `overgrow` y `chlorophyll`.
- `stats`: array con estadísticas como vida (45), ataque (49) y defensa (49).
- `sprites`: objeto con las URL de las imágenes.
- `moves`: array con información de los movimientos que puede aprender.

La respuesta contiene números, textos, booleanos, objetos y arrays. Algunos
campos incluyen URL para consultar otros recursos de la API.

## Consulta con Postman (Newman)

Se ejecutó la petición de `pokeapi.postman_collection.json` usando Newman,
el ejecutor de colecciones de Postman desde la terminal.

- Método: `GET`.
- URL: `https://pokeapi.co/api/v2/pokemon/1`.
- Body: vacío.
- Autenticación: no requiere.
- Estado de respuesta: `200 OK`.

La respuesta contiene el Pokémon con `id: 1` y `name: "bulbasaur"`.
Los tipos son `grass` y `poison`, y las estadísticas de vida, ataque y defensa
son 45, 49 y 49. Estos datos coinciden con los consultados en el navegador.

El código `200 OK` indica que la solicitud fue exitosa. El método GET permite
obtener información sin modificar el recurso del servidor.

La colección también se puede importar en la aplicación Postman para abrir
la petición y ejecutarla con el botón Send.
