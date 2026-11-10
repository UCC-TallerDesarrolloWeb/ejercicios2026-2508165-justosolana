# Unidad 4: auditorías de accesibilidad y Lighthouse

Fecha: 10 de noviembre de 2026.

Se revisaron el formulario de HTML y el catálogo de productos usando las versiones de terminal de AXE y Lighthouse con Chrome en segundo plano. No se utilizaron las extensiones de DevTools. Estas auditorías corresponden a las dos páginas indicadas, no a todos los ejercicios del repositorio.

## Páginas revisadas

- [Formulario](../1-HTML/ej_formulario.html): `http://127.0.0.1:8008/1-HTML/ej_formulario.html`.
- [Catálogo](../2-CSS/productos.html): `http://127.0.0.1:8008/2-CSS/productos.html`.

## AXE

| Página | Resultado inicial | Resultado después de corregir |
|---|---|---|
| Formulario | 3 reglas incumplidas, 6 elementos señalados | 0 infracciones detectadas |
| Catálogo | 1 regla incumplida, 1 elemento señalado | 0 infracciones detectadas |

### Correcciones realizadas

- En el formulario se agregó `main` para identificar el contenido principal y se cambió el título de `h3` a `h1`.
- En el catálogo se agregó un título `h2` antes de las tarjetas, cuyos títulos son `h3`, para mantener el orden de encabezados.
- En ambas páginas se agregó una descripción y una referencia al favicon existente. Se agregó también viewport al formulario.

Informes finales:

- [AXE: formulario](axe-formulario.json).
- [AXE: catálogo](axe-catalogo.json).

## Lighthouse

Se analizaron rendimiento, accesibilidad, buenas prácticas y SEO con la configuración móvil predeterminada de Lighthouse.

| Página | Rendimiento | Accesibilidad | Buenas prácticas | SEO |
|---|---:|---:|---:|---:|
| Formulario | 100 | 100 | 100 | 100 |
| Catálogo | 99 | 100 | 100 | 100 |

Los puntajes son sobre 100 y corresponden a esta ejecución local. Pueden cambiar según el equipo, la red y la versión del navegador. No equivalen a una certificación de accesibilidad.

Informes finales para descargar y abrir en el navegador:

- [Lighthouse: formulario](lighthouse-formulario.html) ([datos JSON](lighthouse-formulario.json)).
- [Lighthouse: catálogo](lighthouse-catalogo.html) ([datos JSON](lighthouse-catalogo.json)).

Lighthouse también sugirió mejoras de entrega de imágenes y caché en el catálogo. Son recomendaciones de optimización; no se modificaron los recursos ni la configuración del servidor en este ejercicio. El servidor local de Python no configura una caché de producción.

## Cómo repetir los controles

Desde la raíz del repositorio, iniciar un servidor local:

```bash
python3 -m http.server 8008 --bind 127.0.0.1
```

Con Node.js y Chrome instalados, se pueden ejecutar los controles desde otra terminal. AXE necesita un ChromeDriver compatible con la versión de Chrome; si informa incompatibilidad, instalar el controlador correspondiente como explica su documentación.

```bash
npx --yes @axe-core/cli http://127.0.0.1:8008/1-HTML/ej_formulario.html http://127.0.0.1:8008/2-CSS/productos.html --save axe-resultados.json --exit

npx --yes lighthouse http://127.0.0.1:8008/1-HTML/ej_formulario.html --chrome-flags="--headless" --only-categories=performance,accessibility,best-practices,seo --output=html --output-path=lighthouse-formulario.html

npx --yes lighthouse http://127.0.0.1:8008/2-CSS/productos.html --chrome-flags="--headless" --only-categories=performance,accessibility,best-practices,seo --output=html --output-path=lighthouse-catalogo.html
```

## Herramientas y alcance

- AXE: 4.14.0.
- Lighthouse: 13.6.0.
- Navegador: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/157.0.0.0 Safari/537.36.

Los informes guardados son los resultados reales de las herramientas. Las comprobaciones automáticas no sustituyen una revisión manual con teclado ni verifican todas las condiciones de accesibilidad. No se evaluaron en esta entrega el carrito, los componentes Bootstrap, Interiores ni las rutas de React; sus correcciones se revisan por separado.

Referencias:

- [AXE CLI](https://github.com/dequelabs/axe-core-npm/tree/develop/packages/cli).
- [Lighthouse](https://github.com/GoogleChrome/lighthouse#using-the-node-cli).
