// ===================== CONFIGURACIÓN =====================
const WHATSAPP = "9632029601";

// Catálogo profesional de papelería
const productos = [
  { id: 1,  nombre: "Cuaderno profesional raya", categoria: "Papel", precio: 45, descripcion: "100 hojas, pasta dura, marca Scribe.", icono: "📓", foto: "", disponible: true },
  { id: 2,  nombre: "Cuaderno profesional cuadro chico", categoria: "Papel", precio: 45, descripcion: "100 hojas, cuadro 7mm.", icono: "📓", foto: "", disponible: true },
  { id: 3,  nombre: "Cuaderno profesional cuadro grande", categoria: "Papel", precio: 45, descripcion: "100 hojas, cuadro 10mm.", icono: "📓", foto: "", disponible: true },
  { id: 4,  nombre: "Cuaderno italiano cosido", categoria: "Papel", precio: 28, descripcion: "100 hojas, ideal para primaria.", icono: "📘", foto: "", disponible: true },
  { id: 5,  nombre: "Block de hojas de color", categoria: "Papel", precio: 38, descripcion: "50 hojas tamaño carta surtidas.", icono: "📄", foto: "", disponible: true },
  { id: 6,  nombre: "Resma de papel bond A4", categoria: "Papel", precio: 115, descripcion: "Paquete con 500 hojas 75g.", icono: "📦", foto: "", disponible: true },
  { id: 7,  nombre: "Papel milimétrico (paquete)", categoria: "Papel", precio: 22, descripcion: "20 hojas tamaño carta.", icono: "📉", foto: "", disponible: true },
  { id: 8,  nombre: "Papel ilustración", categoria: "Papel", precio: 12, descripcion: "Pliego formato profesional.", icono: "📜", foto: "", disponible: true },
  { id: 9,  nombre: "Bloc de notas adhesivas (Post-it)", categoria: "Papel", precio: 35, descripcion: "4 blocks surtidos colores neón.", icono: "🟨", foto: "", disponible: true },
  { id: 10, nombre: "Papel bond cuadriculado pliego", categoria: "Papel", precio: 8, descripcion: "Ideal para exposiciones escolares.", icono: "📋", foto: "", disponible: true },

  { id: 11, nombre: "Caja de lápices del número 2", categoria: "Escritura", precio: 60, descripcion: "Caja con 12 piezas Dixon Ticonderoga.", icono: "✏️", foto: "", disponible: true },
  { id: 12, nombre: "Set de bolígrafos punto fino", categoria: "Escritura", precio: 35, descripcion: "Blíster con 4 piezas BIC.", icono: "🖊️", foto: "", disponible: true },
  { id: 13, nombre: "Bolígrafos de gel retráctiles", categoria: "Escritura", precio: 55, descripcion: "Pack con 3 colores clásicos.", icono: "✒️", foto: "", disponible: true },
  { id: 14, nombre: "Lápiz mecánico (Portaminas 0.5mm)", categoria: "Escritura", precio: 25, descripcion: "Incluye repuesto de minas HB.", icono: "✏️", foto: "", disponible: true },
  { id: 15, nombre: "Gomas de borrar blancas (Pack 2)", categoria: "Escritura", precio: 18, descripcion: "No manchan el papel.", icono: "◻️", foto: "", disponible: true },
  { id: 16, nombre: "Sacapuntas metálico doble orificio", categoria: "Escritura", precio: 15, descripcion: "Con depósito recolector.", icono: "⚙️", foto: "", disponible: true },
  { id: 17, nombre: "Corrector líquido pluma", categoria: "Escritura", precio: 22, descripcion: "Secado rápido y alta cobertura.", icono: "🖌️", foto: "", disponible: true },
  { id: 18, nombre: "Marcatextos pasteles (Set 4)", categoria: "Escritura", precio: 48, descripcion: "Tonos suaves para subrayado estético.", icono: "🖍️", foto: "", disponible: true },
  { id: 19, nombre: "Plumones permanentes negros", categoria: "Escritura", precio: 30, descripcion: "Punta fina resistente al agua.", icono: "🖊️", foto: "", disponible: true },
  { id: 20, nombre: "Estilográfo profesional para dibujo", categoria: "Escritura", precio: 45, descripcion: "Punta 0.4mm tinta negra.", icono: "🖋️", foto: "", disponible: true },

  { id: 21, nombre: "Caja de colores de madera (24 pzas)", categoria: "Arte y Dibujo", precio: 110, descripcion: "Colores intensos y mina resistente.", icono: "🎨", foto: "", disponible: true },
  { id: 22, nombre: "Set de plumones escolares lavables", categoria: "Arte y Dibujo", precio: 85, descripcion: "Paquete con 12 colores brillantes.", icono: "🖍️", foto: "", disponible: true },
  { id: 23, nombre: "Acuarelas escolares con pincel", categoria: "Arte y Dibujo", precio: 38, descripcion: "Estuche con 12 pastillas mezclables.", icono: "🖌️", foto: "", disponible: true },
  { id: 24, nombre: "Pintura acrílica frasco 50ml", categoria: "Arte y Dibujo", precio: 24, descripcion: "Colores primarios y secundarios.", icono: "🧪", foto: "", disponible: true },
  { id: 25, nombre: "Plastilina caja con 10 barras", categoria: "Arte y Dibujo", precio: 26, descripcion: "No tóxica, suave y flexible.", icono: "🧱", foto: "", disponible: true },
  { id: 26, nombre: "Bloc de dibujo marquilla", categoria: "Arte y Dibujo", precio: 45, descripcion: "30 hojas de papel grueso 130g.", icono: "🖼️", foto: "", disponible: true },
  { id: 27, nombre: "Pincelines para pizarrón (Set 4)", categoria: "Arte y Dibujo", precio: 50, descripcion: "Fácil borrado, colores surtidos.", icono: "🖊️", foto: "", disponible: true },
  { id: 28, nombre: "Crayones de cera (Caja 12 pzas)", categoria: "Arte y Dibujo", precio: 25, descripcion: "Seguros para niños, colores vivos.", icono: "🖍️", foto: "", disponible: true },

  { id: 29, nombre: "Juego de geometría completo", categoria: "Geometría", precio: 55, descripcion: "Incluye regla, escuadras, transportador y compás.", icono: "📐", foto: "", disponible: true },
  { id: 30, nombre: "Regla transparente de 30 cm", categoria: "Geometría", precio: 15, descripcion: "Flexible y resistente a dobleces.", icono: "📏", foto: "", disponible: true },
  { id: 31, nombre: "Compás de precisión con adaptador", categoria: "Geometría", precio: 45, descripcion: "Con minas de repuesto en estuche.", icono: "🧭", foto: "", disponible: true },
  { id: 32, nombre: "Transportador escolar de 180°", categoria: "Geometría", precio: 10, descripcion: "Plástico transparente alta durabilidad.", icono: "📐", foto: "", disponible: true },

  { id: 33, nombre: "Mochila escolar impermeable", categoria: "Mochilas", precio: 380, descripcion: "Resistente, compartimentos para laptop.", icono: "🎒", foto: "", disponible: true },
  { id: 34, nombre: "Lonchera térmica ejecutiva", categoria: "Mochilas", precio: 150, descripcion: "Interior metálico para conservación.", icono: "🍱", foto: "", disponible: true },
  { id: 35, nombre: "Estuche / Cartuchera doble cierre", categoria: "Mochilas", precio: 65, descripcion: "Gran capacidad de almacenamiento textil.", icono: "👜", foto: "", disponible: true },
  { id: 36, nombre: "Mochila estilo urbano casual", categoria: "Mochilas", precio: 320, descripcion: "Diseño ergonómico y moderno.", icono: "🎒", foto: "", disponible: true },

  { id: 37, nombre: "Tijeras escolares punta redonda", categoria: "Útiles", precio: 30, descripcion: "Mango ergonómico seguro.", icono: "✂️", foto: "", disponible: true },
  { id: 38, nombre: "Pegamento en barra grande (40g)", categoria: "Útiles", precio: 25, descripcion: "Fórmula fuerte, no tóxica y lavable.", icono: "🧴", foto: "", disponible: true },
  { id: 39, nombre: "Pegamento líquido blanco (250ml)", categoria: "Útiles", precio: 28, descripcion: "Ideal para manualidades escolares.", icono: "💧", foto: "", disponible: true },
  { id: 40, nombre: "Cinta adhesiva transparente", categoria: "Útiles", precio: 22, descripcion: "Rollo con despachador.", icono: "🎞️", foto: "", disponible: true },
  { id: 41, nombre: "Cinta canela / de empaque", categoria: "Útiles", precio: 32, descripcion: "Alta resistencia para cajas.", icono: "📦", foto: "", disponible: true },
  { id: 42, nombre: "Calculadora científica básica", categoria: "Útiles", precio: 140, descripcion: "240 funciones para secundaria y bachillerato.", icono: "🧮", foto: "", disponible: true },
  { id: 43, nombre: "Perforadora metálica 1 orificio", categoria: "Útiles", precio: 35, descripcion: "Estructura metálica resistente.", icono: "🕳️", foto: "", disponible: true },
  { id: 44, nombre: "Engrapadora mini con grapas", categoria: "Útiles", precio: 42, descripcion: "Incluye repuesto.", icono: "📎", foto: "", disponible: true },
  { id: 45, nombre: "Clips metálicos (Caja 100 pzas)", categoria: "Útiles", precio: 18, descripcion: "Estándar galvanizado.", icono: "📎", foto: "", disponible: true },

  { id: 46, nombre: "Carpeta de argollas carta", categoria: "Oficina", precio: 55, descripcion: "Lomo de 2 pulgadas, color negro.", icono: "📁", foto: "", disponible: true },
  { id: 47, nombre: "Sobres manila carta (Paquete 10)", categoria: "Oficina", precio: 30, descripcion: "Papel kraft resistente.", icono: "✉️", foto: "", disponible: true },
  { id: 48, nombre: "Tarjetero de plástico organizador", categoria: "Oficina", precio: 40, descripcion: "Capacidad para 100 tarjetas.", icono: "📇", foto: "", disponible: true },
  { id: 49, nombre: "Borrador para pizarrón magnético", categoria: "Oficina", precio: 28, descripcion: "Diseño ergonómico con imán.", icono: "🧽", foto: "", disponible: true },
  { id: 50, nombre: "Portaminas profesional 0.7mm", categoria: "Oficina", precio: 45, descripcion: "Cuerpo metálico antiderrapante.", icono: "🖊️", foto: "", disponible: true }
];

// ===================== ELEMENTOS DE LA PÁGINA =====================
const $ = function (id) { return document.getElementById(id); };
const lista = $("lista"), buscador = $("buscador"), sinResultados = $("sin-resultados");
const resumen = $("resumen"), selectOrden = $("orden"), checkFav = $("solo-favoritos");
const contenedorCategorias = $("categorias");
const fondo = $("fondo"), panel = $("panel-carrito"), modal = $("modal");
const itemsCarrito = $("items-carrito"), carritoVacio = $("carrito-vacio");
const totalCarrito = $("total-carrito"), contador = $("contador");
const btnPedir = $("btn-pedir"), btnVaciar = $("btn-vaciar");
const inputNombre = $("nombre-cliente");

// Elementos del Historial
const panelHistorial = $("panel-historial"), listaHistorial = $("lista-historial"), historialVacio = $("historial-vacio");

// ===================== LOCAL STORAGE =====================
function leer(clave, porDefecto) {
  try {
    const valor = localStorage.getItem(clave);
    return valor ? JSON.parse(valor) : porDefecto;
  } catch (e) { return porDefecto; }
}
function guardar(clave, valor) {
  try { localStorage.setItem(clave, JSON.stringify(valor)); } catch (e) {}
}

let carrito = leer("carrito", {});
let favoritos = leer("favoritos", []);
let historialNotas = leer("historial_notas", []);
const estado = { texto: "", categoria: "Todos", orden: "nombre", soloFavoritos: false };

// ===================== HELPERS =====================
function dinero(numero) { return "$" + numero.toFixed(2); }
function limpiar(texto) { return texto.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, ""); }
function buscarProducto(id) { return productos.find(function (p) { return p.id === id; }); }
function imagenHTML(p) { return p.foto ? '<img src="imagenes/' + p.foto + '" alt="' + p.nombre + '">' : p.icono; }

// ===================== FILTROS Y VISTA =====================
function obtenerProductos() {
  const resultado = productos.filter(function (p) {
    const coincideTexto = limpiar(p.nombre).includes(estado.texto) || limpiar(p.descripcion).includes(estado.texto);
    const coincideCategoria = estado.categoria === "Todos" || p.categoria === estado.categoria;
    const coincideFavorito = !estado.soloFavoritos || favoritos.includes(p.id);
    return coincideTexto && coincideCategoria && coincideFavorito;
  });

  if (estado.orden === "precio-asc") {
    resultado.sort(function (a, b) { return a.precio - b.precio; });
  } else if (estado.orden === "precio-desc") {
    resultado.sort(function (a, b) { return b.precio - a.precio; });
  } else {
    resultado.sort(function (a, b) { return a.nombre.localeCompare(b.nombre, "es"); });
  }
  return resultado;
}

function mostrar() {
  const items = obtenerProductos();
  lista.innerHTML = "";
  items.forEach(function (p) {
    const esFavorito = favoritos.includes(p.id);
    const tarjeta = document.createElement("article");
    tarjeta.className = "tarjeta";
    tarjeta.innerHTML =
      '<div class="imagen" data-accion="detalle" data-id="' + p.id + '">' +
        imagenHTML(p) +
        (p.disponible ? "" : '<span class="etiqueta">Agotado</span>') +
        '<button class="fav' + (esFavorito ? " activo" : "") + '" type="button" data-accion="favorito" data-id="' + p.id + '" aria-label="Favorito">' + (esFavorito ? "♥" : "♡") + '</button>' +
      '</div>' +
      '<div class="info">' +
        '<span class="categoria">' + p.categoria + '</span>' +
        '<h2>' + p.nombre + '</h2>' +
        '<p>' + p.descripcion + '</p>' +
        '<span class="precio">' + dinero(p.precio) + '</span>' +
        '<div class="acciones">' +
          '<button class="btn secundario" type="button" data-accion="detalle" data-id="' + p.id + '">Detalle</button>' +
          '<button class="btn principal" type="button" data-accion="agregar" data-id="' + p.id + '"' + (p.disponible ? "" : " disabled") + '>Agregar</button>' +
        '</div>' +
      '</div>';
    lista.appendChild(tarjeta);
  });
  sinResultados.hidden = items.length > 0;
  resumen.textContent = items.length + (items.length === 1 ? " producto encontrado" : " productos encontrados");
}

function mostrarCategorias() {
  const nombres = ["Todos"];
  productos.forEach(function (p) { if (!nombres.includes(p.categoria)) nombres.push(p.categoria); });
  contenedorCategorias.innerHTML = "";
  nombres.forEach(function (nombre) {
    const boton = document.createElement("button");
    boton.type = "button";
    boton.className = "chip" + (nombre === estado.categoria ? " activo" : "");
    boton.textContent = nombre;
    boton.addEventListener("click", function () {
      estado.categoria = nombre;
      mostrarCategorias();
      mostrar();
    });
    contenedorCategorias.appendChild(boton);
  });
}

function alternarFavorito(id) {
  if (favoritos.includes(id)) {
    favoritos = favoritos.filter(function (f) { return f !== id; });
  } else {
    favoritos.push(id);
  }
  guardar("favoritos", favoritos);
  mostrar();
}

// ===================== CARRITO / PEDIDO =====================
function agregarAlCarrito(id) {
  carrito[id] = (carrito[id] || 0) + 1;
  guardar("carrito", carrito);
  mostrarCarrito();
}

function cambiarCantidad(id, cambio) {
  carrito[id] = (carrito[id] || 0) + cambio;
  if (carrito[id] <= 0) delete carrito[id];
  guardar("carrito", carrito);
  mostrarCarrito();
}

function mostrarCarrito() {
  let total = 0, cantidadTotal = 0;
  itemsCarrito.innerHTML = "";
  Object.keys(carrito).forEach(function (clave) {
    const p = buscarProducto(Number(clave));
    if (!p) return;
    const cantidad = carrito[clave];
    total += p.precio * cantidad;
    cantidadTotal += cantidad;
    const fila = document.createElement("div");
    fila.className = "item";
    fila.innerHTML =
      '<span class="nombre">' + p.nombre + '</span>' +
      '<span class="subtotal">' + dinero(p.precio * cantidad) + '</span>' +
      '<span class="cantidad">' +
        '<button type="button" data-accion="menos" data-id="' + p.id + '">−</button>' +
        cantidad +
        '<button type="button" data-accion="mas" data-id="' + p.id + '">+</button>' +
      '</span><span></span>';
    itemsCarrito.appendChild(fila);
  });
  contador.textContent = cantidadTotal;
  totalCarrito.textContent = dinero(total);
  carritoVacio.hidden = cantidadTotal > 0;
  btnPedir.disabled = cantidadTotal === 0;
  btnVaciar.disabled = cantidadTotal === 0;
}

// ===================== HISTORIAL DE NOTAS =====================
function mostrarHistorial() {
  listaHistorial.innerHTML = "";
  if (historialNotas.length === 0) {
    historialVacio.hidden = false;
    return;
  }
  historialVacio.hidden = true;

  historialNotas.forEach(function (nota) {
    const tarjetaNota = document.createElement("div");
    tarjetaNota.className = "item-historial";
    tarjetaNota.innerHTML =
      '<div class="nota-header"><strong>#' + nota.folio + '</strong> <span class="fecha">' + nota.fecha + '</span></div>' +
      '<div class="cliente-nota">Cliente: <strong>' + nota.cliente + '</strong></div>' +
      '<div class="nota-cuerpo"><pre>' + nota.detalle + '</pre></div>' +
      '<div class="nota-footer"><strong>Total: ' + nota.total + '</strong></div>';
    listaHistorial.appendChild(tarjetaNota);
  });
}

function enviarPedido() {
  const nombreCliente = inputNombre.value.trim();
  if (!nombreCliente) {
    alert("Por favor, ingresa el nombre del cliente antes de generar el pedido.");
    inputNombre.focus();
    return;
  }

  const lineas = [];
  let total = 0;
  Object.keys(carrito).forEach(function (clave) {
    const p = buscarProducto(Number(clave));
    if (!p) return;
    const cantidad = carrito[clave];
    total += p.precio * cantidad;
    lineas.push("- " + cantidad + " x " + p.nombre + " (" + dinero(p.precio * cantidad) + ")");
  });

  const folio = "PAP-" + Math.floor(1000 + Math.random() * 9000);
  const detalleTexto = lineas.join("\n");
  const fechaActual = new Date().toLocaleString();
  const totalTexto = dinero(total);

  const mensaje = "Folio de pedido: #" + folio + "\nCliente: " + nombreCliente + "\n\nHola, quiero solicitar los siguientes productos:\n\n" + detalleTexto + "\n\nTotal a pagar: " + totalTexto;
  
  // Guardar en el historial local incluyendo el nombre del cliente
  historialNotas.unshift({ folio: folio, cliente: nombreCliente, fecha: fechaActual, detalle: detalleTexto, total: totalTexto });
  guardar("historial_notas", historialNotas);
  mostrarHistorial();

  alert("¡Pedido registrado con éxito!\nFolio: #" + folio + "\nCliente: " + nombreCliente + "\nTotal: " + totalTexto + "\n\nA continuación se abrirá WhatsApp.");

  window.open("https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(mensaje), "_blank");
  
  // Limpiar carrito e input de nombre tras el éxito
  carrito = {};
  inputNombre.value = "";
  guardar("carrito", carrito);
  mostrarCarrito();
  cerrarTodo();
}

function abrirCarrito() { panel.classList.add("abierto"); fondo.hidden = false; }
function abrirHistorial() { panelHistorial.classList.add("abierto"); fondo.hidden = false; mostrarHistorial(); }

function abrirDetalle(id) {
  const p = buscarProducto(id);
  if (!p) return;
  $("contenido-modal").innerHTML =
    '<div class="imagen">' + imagenHTML(p) + '</div>' +
    '<div class="info">' +
      '<span class="categoria">' + p.categoria + '</span>' +
      '<h2>' + p.nombre + '</h2>' +
      '<p>' + p.descripcion + '</p>' +
      '<span class="precio">' + dinero(p.precio) + '</span>' +
      '<p>' + (p.disponible ? "Disponible en existencia" : "Agotado temporalmente") + '</p>' +
      '<div class="acciones"><button class="btn principal" type="button" data-accion="agregar-cerrar" data-id="' + p.id + '"' + (p.disponible ? "" : " disabled") + '>Agregar al pedido</button></div>' +
    '</div>';
  modal.hidden = false;
  fondo.hidden = false;
}

function cerrarTodo() { 
  panel.classList.remove("abierto"); 
  panelHistorial.classList.remove("abierto");
  modal.hidden = true; 
  fondo.hidden = true; 
}

// Eventos de interfaz
buscador.addEventListener("input", function () { estado.texto = limpiar(buscador.value); mostrar(); });
selectOrden.addEventListener("change", function () { estado.orden = selectOrden.value; mostrar(); });
checkFav.addEventListener("change", function () { estado.soloFavoritos = checkFav.checked; mostrar(); });

document.addEventListener("click", function (e) {
  const elemento = e.target.closest("[data-accion]");
  if (!elemento) return;
  const id = Number(elemento.dataset.id);
  switch (elemento.dataset.accion) {
    case "detalle": abrirDetalle(id); break;
    case "favorito": alternarFavorito(id); break;
    case "agregar": agregarAlCarrito(id); break;
    case "agregar-cerrar": agregarAlCarrito(id); cerrarTodo(); abrirCarrito(); break;
    case "mas": cambiarCantidad(id, 1); break;
    case "menos": cambiarCantidad(id, -1); break;
  }
});

$("btn-carrito").addEventListener("click", abrirCarrito);
$("btn-historial").addEventListener("click", abrirHistorial);
$("cerrar-carrito").addEventListener("click", cerrarTodo);
$("cerrar-historial").addEventListener("click", cerrarTodo);
$("cerrar-modal").addEventListener("click", cerrarTodo);
fondo.addEventListener("click", cerrarTodo);
document.addEventListener("keydown", function (e) { if (e.key === "Escape") cerrarTodo(); });
btnPedir.addEventListener("click", enviarPedido);
btnVaciar.addEventListener("click", function () { carrito = {}; guardar("carrito", carrito); mostrarCarrito(); });
$("btn-borrar-historial").addEventListener("click", function () {
  if (confirm("¿Deseas limpiar todo el historial de notas?")) {
    historialNotas = [];
    guardar("historial_notas", historialNotas);
    mostrarHistorial();
  }
});

mostrarCategorias();
mostrar();
mostrarCarrito();