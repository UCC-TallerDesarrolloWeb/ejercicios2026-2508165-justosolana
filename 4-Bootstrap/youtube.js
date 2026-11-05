const estadoVideo = document.getElementById('estado-video');

document.querySelectorAll('[data-action]').forEach((boton) => {
  boton.addEventListener('click', () => {
    const seleccionado = boton.getAttribute('aria-pressed') === 'true';
    const esVerMasTarde = boton.dataset.action === 'later';
    boton.setAttribute('aria-pressed', String(!seleccionado));
    boton.textContent = esVerMasTarde
      ? seleccionado ? 'VER MÁS TARDE' : 'GUARDADO'
      : seleccionado ? 'AGREGAR A LA FILA' : 'EN LA FILA';
    estadoVideo.textContent = esVerMasTarde
      ? seleccionado ? 'Video quitado de Ver más tarde.' : 'Video guardado para ver más tarde.'
      : seleccionado ? 'Video quitado de la fila.' : 'Video agregado a la fila.';
  });
});
