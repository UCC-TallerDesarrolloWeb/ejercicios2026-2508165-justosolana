import { useEffect, useState } from 'react'
import { getCart, updateQty, removeItem, deleteCart } from '../api/store.js'
import { formatPrice } from '../utils/formatPrice.js'
import '@styles/Store.scss'

function Cart() {
  const [carrito, setCarrito] = useState([])
  const [mensaje, setMensaje] = useState('')
  const [ocupado, setOcupado] = useState(false)

  useEffect(() => {
    getCart()
      .then((data) => setCarrito(data))
      .catch((error) => setMensaje(error.message))
  }, [])

  async function actualizar(accion) {
    setOcupado(true)
    setMensaje('')
    try {
      await accion()
      setCarrito(await getCart())
    } catch (error) {
      setMensaje(error.message)
    } finally {
      setOcupado(false)
    }
  }

  let total = 0
  carrito.forEach((item) => {
    total += item.precio * item.cantidad
  })

  return (
    <section className="actividades tienda">
      <h1>Carrito</h1>
      <p role="status">{mensaje}</p>
      {carrito.length === 0 && <p>No hay productos en el carrito.</p>}
      <div className="actividades-lista">
        {carrito.map((item) => (
          <article className="actividad" key={item.id}>
            <img className="producto-imagen" src={`/products/${item.imagen}`} alt={item.nombre} />
            <h2>{item.nombre}</h2>
            <p>Precio unitario: {formatPrice(item.precio)}</p>
            <p>Cantidad: {item.cantidad}</p>
            <p>Subtotal: {formatPrice(item.precio * item.cantidad)}</p>
            <div className="acciones">
              <button type="button" aria-label={`Restar ${item.nombre}`} disabled={ocupado || item.cantidad <= 1} onClick={() => actualizar(() => updateQty(item.id, item.cantidad - 1))}>
                <span className="material-icons" aria-hidden="true">remove</span>
              </button>
              <button type="button" aria-label={`Sumar ${item.nombre}`} disabled={ocupado} onClick={() => actualizar(() => updateQty(item.id, item.cantidad + 1))}>
                <span className="material-icons" aria-hidden="true">add</span>
              </button>
              <button type="button" aria-label={`Eliminar ${item.nombre}`} disabled={ocupado} onClick={() => actualizar(() => removeItem(item.id))}>
                <span className="material-icons" aria-hidden="true">delete</span>
              </button>
            </div>
          </article>
        ))}
      </div>
      <h2>Total: {formatPrice(total)}</h2>
      {carrito.length > 0 && (
        <button type="button" disabled={ocupado} onClick={() => actualizar(deleteCart)}>
          <span className="material-icons" aria-hidden="true">delete_sweep</span> Vaciar carrito
        </button>
      )}
    </section>
  )
}

export default Cart
