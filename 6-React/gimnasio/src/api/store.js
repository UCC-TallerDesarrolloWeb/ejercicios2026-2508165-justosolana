const baseUrl = import.meta.env.VITE_BASE_URL

export async function getProducts() {
  const response = await fetch(`${baseUrl}products`)
  if (!response.ok) throw new Error('Error al obtener los productos')
  return response.json()
}

export async function getCart() {
  const response = await fetch(`${baseUrl}cart`)
  if (!response.ok) throw new Error('Error al obtener el carrito')
  return response.json()
}

export async function addToCart(producto) {
  const carrito = await getCart()
  const existente = carrito.find((item) => item.productId === producto.id)
  if (existente) return updateQty(existente.id, existente.cantidad + 1)

  const response = await fetch(`${baseUrl}cart`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      productId: producto.id,
      nombre: producto.nombre,
      imagen: producto.imagen,
      precio: producto.precio,
      cantidad: 1,
    }),
  })
  if (!response.ok) throw new Error('Error al agregar el producto')
  return response.json()
}

export async function updateQty(id, cantidad) {
  const response = await fetch(`${baseUrl}cart/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ cantidad }),
  })
  if (!response.ok) throw new Error('Error al modificar la cantidad')
  return response.json()
}

export async function removeItem(id) {
  const response = await fetch(`${baseUrl}cart/${id}`, { method: 'DELETE' })
  if (!response.ok) throw new Error('Error al eliminar el producto')
}

export async function deleteCart() {
  const carrito = await getCart()
  for (const item of carrito) {
    await removeItem(item.id)
  }
}
