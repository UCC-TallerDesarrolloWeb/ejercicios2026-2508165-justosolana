import { useEffect, useState } from 'react'
import { getProducts, addToCart } from '../api/store.js'
import { formatPrice } from '../utils/formatPrice.js'
import '@styles/Store.scss'

function Store({ isLoggedIn }) {
  const [productos, setProductos] = useState([])
  const [detalle, setDetalle] = useState(null)
  const [mensaje, setMensaje] = useState('')
  const [agregando, setAgregando] = useState(false)

  useEffect(() => {
    getProducts()
      .then((data) => setProductos(data))
      .catch((error) => setMensaje(error.message))
  }, [])

  async function agregar(producto) {
    setAgregando(true)
    try {
      await addToCart(producto)
      setMensaje('Producto agregado al carrito')
    } catch (error) {
      setMensaje(error.message)
    } finally {
      setAgregando(false)
    }
  }

  return (
    <section className="actividades tienda">
      <h1>Tienda</h1>
      {!isLoggedIn && <p>Iniciá sesión para agregar productos al carrito.</p>}
      <p role="status">{mensaje}</p>
      <div className="actividades-lista">
        {productos.map((producto) => (
          <article className="actividad" key={producto.id}>
            <img className="producto-imagen" src={`/products/${producto.imagen}`} alt={producto.nombre} />
            <h2>{producto.nombre}</h2>
            <p>{formatPrice(producto.precio)}</p>
            <div className="acciones">
              <button type="button" onClick={() => setDetalle(producto)}>Ver detalle</button>
              <button type="button" disabled={!isLoggedIn || agregando} onClick={() => agregar(producto)}>
                Agregar al carrito
              </button>
            </div>
          </article>
        ))}
      </div>
      {detalle && (
        <div className="modal-fondo">
          <section className="producto-modal" role="dialog" aria-modal="true" aria-labelledby="detalle-titulo">
            <h2 id="detalle-titulo">{detalle.nombre}</h2>
            <img className="producto-imagen" src={`/products/${detalle.imagen}`} alt={detalle.nombre} />
            <p>{detalle.description}</p>
            <p>Marca: {detalle.marca}</p>
            <p>Categoría: {detalle.categoria}</p>
            <p>Talles: {detalle.talle.join(', ')}</p>
            <p>{formatPrice(detalle.precio)}</p>
            <button autoFocus type="button" onClick={() => setDetalle(null)}>Cerrar</button>
          </section>
        </div>
      )}
    </section>
  )
}

export default Store
