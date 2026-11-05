const hoy = new Date();
let mesVisible = new Date(hoy.getFullYear(), hoy.getMonth(), 1);
let fechaSeleccionada = null;
let fechaGuardada = null;
const selector = document.getElementById('selector-fecha');
const guardar = document.getElementById('guardar');
const formatoMes = new Intl.DateTimeFormat('es-AR', { month: 'long', year: 'numeric' });
const formatoFecha = new Intl.DateTimeFormat('es-AR', { dateStyle: 'long' });
const diasSemana = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];

function mismoDia(a, b) {
  return a !== null && b !== null && a.getTime() === b.getTime();
}

function dibujarCalendarios() {
  for (let indice = 0; indice < 2; indice++) {
    const mes = new Date(mesVisible.getFullYear(), mesVisible.getMonth() + indice, 1);
    const titulo = formatoMes.format(mes);
    document.getElementById(`mes-${indice}`).textContent = titulo[0].toUpperCase() + titulo.slice(1);
    const calendario = document.getElementById(`calendario-${indice}`);
    calendario.replaceChildren();

    diasSemana.forEach((dia) => {
      const etiqueta = document.createElement('span');
      etiqueta.className = 'fw-bold py-2';
      etiqueta.textContent = dia;
      calendario.append(etiqueta);
    });

    const desplazamiento = (mes.getDay() + 6) % 7;
    const cantidadDias = new Date(mes.getFullYear(), mes.getMonth() + 1, 0).getDate();
    const celdas = Math.ceil((desplazamiento + cantidadDias) / 7) * 7;

    for (let celda = 0; celda < celdas; celda++) {
      const numero = celda - desplazamiento + 1;
      const fecha = new Date(mes.getFullYear(), mes.getMonth(), numero);
      const boton = document.createElement('button');
      boton.type = 'button';
      boton.textContent = fecha.getDate();
      boton.className = 'btn rounded-circle dia';
      boton.setAttribute('aria-label', formatoFecha.format(fecha));
      boton.setAttribute('aria-pressed', String(mismoDia(fecha, fechaSeleccionada)));

      if (numero < 1 || numero > cantidadDias) {
        boton.classList.add('btn-outline-light', 'text-secondary', 'opacity-50');
        boton.disabled = true;
      } else {
        boton.classList.add(mismoDia(fecha, fechaSeleccionada) ? 'btn-primary' : 'btn-outline-light');
        if (!mismoDia(fecha, fechaSeleccionada)) boton.classList.add('text-secondary');
        boton.addEventListener('click', () => {
          fechaSeleccionada = fecha;
          guardar.disabled = false;
          dibujarCalendarios();
        });
      }
      calendario.append(boton);
    }
  }
}

function cambiarMes(cantidad) {
  mesVisible = new Date(mesVisible.getFullYear(), mesVisible.getMonth() + cantidad, 1);
  dibujarCalendarios();
}

document.getElementById('anterior').addEventListener('click', () => cambiarMes(-1));
document.getElementById('siguiente').addEventListener('click', () => cambiarMes(1));

guardar.addEventListener('click', () => {
  if (!fechaSeleccionada) return;
  fechaGuardada = new Date(fechaSeleccionada);
  selector.textContent = formatoFecha.format(fechaGuardada);
  document.getElementById('resultado').textContent = `Fecha de vuelo seleccionada: ${formatoFecha.format(fechaGuardada)}.`;
  bootstrap.Dropdown.getOrCreateInstance(selector).hide();
});

document.getElementById('cancelar').addEventListener('click', () => {
  fechaSeleccionada = fechaGuardada ? new Date(fechaGuardada) : null;
  guardar.disabled = fechaSeleccionada === null;
  dibujarCalendarios();
  bootstrap.Dropdown.getOrCreateInstance(selector).hide();
});

selector.addEventListener('show.bs.dropdown', () => {
  fechaSeleccionada = fechaGuardada ? new Date(fechaGuardada) : null;
  guardar.disabled = fechaSeleccionada === null;
  dibujarCalendarios();
});

dibujarCalendarios();
