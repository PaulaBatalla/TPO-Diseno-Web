// Arrays simples con la información de productos
const productosImagenes = [
    'producto1.jpg',
    'producto2.jpg',
    'producto3.jpg',
    'producto4.jpg',
    'producto5.jpg',
    'producto6.jpg',
    'producto7.jpg',
    'producto8.jpg',
    'producto9.jpg',
    'producto10.jpg',
    'producto11.jpg',
    'producto12.jpg'
];

const productosNombres = [
    'Remera Breaking Bad',
    'Taza Friends',
    'Poster Dune 2',
    'Gorra Bridgerton',
    'Libreta Percy Jackson',
    'Funko Pop Spider-Man',
    'Buzo Stranger Things',
    'Llavero Grogu (The Mandalorian)',
    'Poster Oppenheimer',
    'Set de Stickers Disney',
    'Taza Barbie',
    'Funko Pop Wednesday Addams'
];

const productosCategorias = [
    'Ropa',
    'Accesorios',
    'Decoración',
    'Accesorios',
    'Papelería',
    'Coleccionables',
    'Ropa',
    'Accesorios',
    'Decoración',
    'Papelería',
    'Accesorios',
    'Coleccionables'
];

const productosDescripciones = [
    'Remera 100% algodón con el icónico logo de Breaking Bad. Disponible en varios talles.',
    'Taza de cerámica con diseño exclusivo de Friends. Ideal para tu café o té favorito.',
    'Poster de alta calidad de Dune: Part Two. Perfecto para decorar tu espacio.',
    'Gorra ajustable con bordado de Bridgerton. Estilo clásico y elegante.',
    'Libreta de 200 páginas con tapa dura. Diseño inspirado en Percy Jackson and the Olympians.',
    'Figura Funko Pop de Spider-Man Far From Home. Edición limitada para coleccionistas.',
    'Buzo premium de Stranger Things con diseño Upside Down. Disponible en varios talles.',
    'Llavero metálico de Grogu (Baby Yoda). Ideal para mochilas, llaves o colección.',
    'Poster artístico de Oppenheimer impreso en papel fotográfico de alta calidad.',
    'Set de stickers de Disney con personajes clásicos. Ideal para decorar cuadernos y laptops.',
    'Taza de cerámica rosa inspirada en Barbie. Apta para microondas.',
    'Figura Funko Pop de Wednesday Addams con su icónico uniforme de Nevermore.'
];

const productosPrecios = [15.99, 12.50, 9.99, 18.75, 14.25, 24.99, 20.99, 8.55,9.99, 7.49, 11.00, 22.50];

// Datos del carrito

let carrito = cargarCarrito();

function cargarCarrito() {
    return JSON.parse(localStorage.getItem("carrito")) || [];
}

function guardarCarrito() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}


// Elementos del DOM

const DOM = {
    abrirCarrito: document.getElementById("btn-abrir-carrito"),
    cerrarCarrito: document.getElementById("btn-cerrar-carrito"),
    sidebar: document.getElementById("carrito-sidebar"),
    overlay: document.getElementById("overlay"),

    contador: document.getElementById("contador-carrito"),
    items: document.getElementById("carrito-items"),
    vacio: document.getElementById("carrito-vacio"),
    footer: document.getElementById("carrito-footer"),
    totalPrecio: document.getElementById("total-precio"),

    productosContainer: document.getElementById("productos-container"),
    numerosPagina: document.getElementById("numeros-pagina"),
    btnAnterior: document.getElementById("btn-anterior"),
    btnSiguiente: document.getElementById("btn-siguiente")
};


// Eventos principales

// Abrir carrito
DOM.abrirCarrito.addEventListener("click", () => {
    DOM.sidebar.classList.add("abierto");
    DOM.overlay.classList.add("activo");
});

// Cerrar carrito
DOM.cerrarCarrito.addEventListener("click", cerrarCarrito);
DOM.overlay.addEventListener("click", cerrarCarrito);

function cerrarCarrito() {
    DOM.sidebar.classList.remove("abierto");
    DOM.overlay.classList.remove("activo");
}


// Logica carrito

function agregarAlCarrito(id) {
    const existente = carrito.find(item => item.id === id);

    if (existente) {
        existente.cantidad++;
    } else {
        carrito.push({
            id,
            nombre: productosNombres[id - 1],
            precio: productosPrecios[id - 1],
            imagen: "images/" + productosImagenes[id - 1],
            cantidad: 1
        });
    }

    guardarCarrito();
    actualizarCarrito();
    mostrarNotificacion("Producto agregado al carrito");
}

function eliminarDelCarrito(id) {
    carrito = carrito.filter(item => item.id !== id);
    guardarCarrito();
    actualizarCarrito();
    mostrarNotificacion("Producto eliminado");
}

function vaciarCarrito() {
    if (carrito.length === 0) return;

    if (confirm("¿Vaciar carrito?")) {
        carrito = [];
        guardarCarrito();
        actualizarCarrito();
        mostrarNotificacion("Carrito vaciado");
    }
}

function finalizarCompra() {
    if (!carrito.length) {
        alert("Tu carrito está vacío");
        return;
    }

    const total = carrito.reduce((s, item) => s + item.precio * item.cantidad, 0);

    alert(`¡Compra realizada!\nTotal: $${total.toFixed(2)}\n¡Gracias por tu compra!`);

    carrito = [];
    guardarCarrito();
    actualizarCarrito();
    cerrarCarrito();
}


// Vista carrito

function actualizarCarrito() {
    // Actualizar contador
    const totalCant = carrito.reduce((t, item) => t + item.cantidad, 0);
    DOM.contador.textContent = totalCant;

    DOM.items.innerHTML = "";

    if (!carrito.length) {
        DOM.vacio.style.display = "flex";
        DOM.footer.style.display = "none";
        return;
    }

    DOM.vacio.style.display = "none";
    DOM.footer.style.display = "block";

    carrito.forEach(item => {
        const div = document.createElement("div");
        div.className = "carrito-item";

        div.innerHTML = `
            <div class="carrito-item-imagen">
                <img src="${item.imagen}" alt="${item.nombre}">
            </div>

            <div class="carrito-item-info">
                <h4>${item.nombre}</h4>
                <p>$${item.precio.toFixed(2)} x ${item.cantidad}</p>
            </div>

            <button class="btn-eliminar" data-id="${item.id}">
                🗑️
            </button>
        `;

        DOM.items.appendChild(div);
    });

    // Botones eliminar individuales
    DOM.items.querySelectorAll(".btn-eliminar").forEach(btn => {
        btn.addEventListener("click", () => {
            eliminarDelCarrito(parseInt(btn.dataset.id));
        });
    });

    // Total
    const total = carrito.reduce((s, item) => s + item.precio * item.cantidad, 0);
    DOM.totalPrecio.textContent = "$" + total.toFixed(2);
}


// Notificaciones

function mostrarNotificacion(msg) {
    const noti = document.createElement("div");
    noti.className = "notificacion";
    noti.textContent = msg;

    document.body.appendChild(noti);

    setTimeout(() => noti.classList.add("oculta"), 2000);
    setTimeout(() => noti.remove(), 2600);
}


// Generar productos

function generarProductos() {
    DOM.productosContainer.innerHTML = "";

    productosNombres.forEach((nombre, i) => {
        const id = i + 1;

        const card = document.createElement("div");
        card.className = "producto-item";
        card.dataset.id = id;

        card.innerHTML = `
            <div class="producto-imagen">
                <img src="images/${productosImagenes[i]}" alt="${nombre}">
            </div>

            <div class="producto-info">
                <h3>${nombre}</h3>
                <p class="categoria">${productosCategorias[i]}</p>
                <p class="descripcion">${productosDescripciones[i]}</p>
            </div>

            <div class="producto-accion">
                <p class="precio">$${productosPrecios[i].toFixed(2)}</p>
                <button class="btn-agregar" data-id="${id}">
                    Agregar al carrito
                </button>
            </div>
        `;

        DOM.productosContainer.appendChild(card);
    });

    // Listeners de botones agregar
    document.querySelectorAll(".btn-agregar").forEach(btn => {
        btn.addEventListener("click", () => {
            agregarAlCarrito(parseInt(btn.dataset.id));
        });
    });
}


// Paginacion

let paginaActual = 1;
const porPagina = 3;

function inicializarPaginacion() {
    paginaActual = 1;
    actualizarPaginacion();
}

function actualizarPaginacion() {
    const productos = document.querySelectorAll(".producto-item");
    const total = productos.length;
    const totalPaginas = Math.ceil(total / porPagina);

    productos.forEach((prod, i) => {
        prod.style.display =
            i >= (paginaActual - 1) * porPagina && i < paginaActual * porPagina
                ? "flex"
                : "none";
    });

    generarNumerosPagina(totalPaginas);

    DOM.btnAnterior.disabled = paginaActual === 1;
    DOM.btnSiguiente.disabled = paginaActual === totalPaginas;
}

function generarNumerosPagina(total) {
    DOM.numerosPagina.innerHTML = "";

    for (let p = 1; p <= total; p++) {
        const btn = document.createElement("button");
        btn.className = "numero-pagina";
        if (p === paginaActual) btn.classList.add("activo");
        btn.textContent = p;

        btn.addEventListener("click", () => {
            paginaActual = p;
            actualizarPaginacion();
            window.scrollTo({ top: 0, behavior: "smooth" });
        });

        DOM.numerosPagina.appendChild(btn);
    }
}

DOM.btnAnterior.addEventListener("click", () => {
    paginaActual--;
    actualizarPaginacion();
});

DOM.btnSiguiente.addEventListener("click", () => {
    paginaActual++;
    actualizarPaginacion();
});


// Init

document.addEventListener("DOMContentLoaded", () => {
    generarProductos();
    inicializarPaginacion();
    actualizarCarrito();
});

