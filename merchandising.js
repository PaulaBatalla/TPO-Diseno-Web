// Arrays simples con la información de productos
const productosImagenes = [
    'producto1.jpg',
    'producto2.jpg',
    'producto3.jpg',
    'producto4.jpg',
    'producto5.jpg',
    'producto6.jpg'
];

const productosNombres = [
    'Remera Breaking Bad',
    'Taza The Bear',
    'Poster Dune 2',
    'Gorra Bridgerton',
    'Libreta Percy Jackson',
    'Funko Pop Spider-Man'
];

const productosCategorias = [
    'Ropa',
    'Accesorios',
    'Decoración',
    'Accesorios',
    'Papelería',
    'Coleccionables'
];

const productosDescripciones = [
    'Remera 100% algodón con el icónico logo de Breaking Bad. Disponible en varios talles.',
    'Taza de cerámica con diseño exclusivo de The Bear. Ideal para tu café o té favorito.',
    'Poster de alta calidad de Dune: Part Two. Perfecto para decorar tu espacio.',
    'Gorra ajustable con bordado de Bridgerton. Estilo clásico y elegante.',
    'Libreta de 200 páginas con tapa dura. Diseño inspirado en Percy Jackson and the Olympians.',
    'Figura Funko Pop de Spider-Man Far From Home. Edición limitada para coleccionistas.'
];

const productosPrecios = [15.99, 12.50, 9.99, 18.75, 14.25, 24.99];

// Carrito de compras
let carrito = [];

// Paginación
let paginaActual = 1;
const productosPorPagina = 3;
let totalProductos = 0;

// Elementos del DOM
const btnAbrirCarrito = document.getElementById('btn-abrir-carrito');
const btnCerrarCarrito = document.getElementById('btn-cerrar-carrito');
const carritoSidebar = document.getElementById('carrito-sidebar');
const overlay = document.getElementById('overlay');
const contadorCarrito = document.getElementById('contador-carrito');
const carritoItems = document.getElementById('carrito-items');
const carritoVacio = document.getElementById('carrito-vacio');
const carritoFooter = document.getElementById('carrito-footer');
const totalPrecio = document.getElementById('total-precio');

// Abrir carrito
btnAbrirCarrito.addEventListener('click', () => {
    carritoSidebar.classList.add('abierto');
    overlay.classList.add('activo');
});

// Cerrar carrito
btnCerrarCarrito.addEventListener('click', cerrarCarrito);
overlay.addEventListener('click', cerrarCarrito);

function cerrarCarrito() {
    carritoSidebar.classList.remove('abierto');
    overlay.classList.remove('activo');
}

// Agregar producto al carrito
function agregarAlCarrito(id, nombre, precio, imagen) {
    // Verificar si el producto ya existe en el carrito
    const productoExistente = carrito.find(item => item.id === id);
    
    if (productoExistente) {
        productoExistente.cantidad++;
    } else {
        carrito.push({
            id: id,
            nombre: nombre,
            precio: precio,
            imagen: imagen,
            cantidad: 1
        });
    }
    
    actualizarCarrito();
    mostrarNotificacion('Producto agregado al carrito');
}

// Eliminar producto del carrito
function eliminarDelCarrito(id) {
    carrito = carrito.filter(item => item.id !== id);
    actualizarCarrito();
    mostrarNotificacion('Producto eliminado del carrito');
}

// Vaciar carrito completamente
function vaciarCarrito() {
    if (carrito.length === 0) return;
    
    if (confirm('¿Estás seguro de que quieres vaciar el carrito?')) {
        carrito = [];
        actualizarCarrito();
        mostrarNotificacion('Carrito vaciado');
    }
}

// Actualizar la visualización del carrito
function actualizarCarrito() {
    // Actualizar contador
    const cantidadTotal = carrito.reduce((total, item) => total + item.cantidad, 0);
    contadorCarrito.textContent = cantidadTotal;
    
    // Limpiar items del carrito
    carritoItems.innerHTML = '';
    
    if (carrito.length === 0) {
        carritoVacio.style.display = 'flex';
        carritoFooter.style.display = 'none';
    } else {
        carritoVacio.style.display = 'none';
        carritoFooter.style.display = 'block';
        
        // Mostrar items del carrito
        carrito.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.className = 'carrito-item';
            itemElement.innerHTML = `
                <div class="carrito-item-imagen">
                    <img src="${item.imagen}" alt="${item.nombre}">
                </div>
                <div class="carrito-item-info">
                    <h4>${item.nombre}</h4>
                    <p>$${item.precio.toFixed(2)} x ${item.cantidad}</p>
                </div>
                <button class="btn-eliminar" onclick="eliminarDelCarrito(${item.id})">
                    🗑️
                </button>
            `;
            carritoItems.appendChild(itemElement);
        });
        
        // Calcular y mostrar total
        const total = carrito.reduce((sum, item) => sum + (item.precio * item.cantidad), 0);
        totalPrecio.textContent = `$${total.toFixed(2)}`;
    }
}

// Finalizar compra
function finalizarCompra() {
    if (carrito.length === 0) {
        alert('Tu carrito está vacío');
        return;
    }
    
    const total = carrito.reduce((sum, item) => sum + (item.precio * item.cantidad), 0);
    
    // Mostrar mensaje de éxito
    alert(`¡Compra realizada con éxito!\n\nTotal: $${total.toFixed(2)}\n\n¡Gracias por tu compra!`);
    
    // Vaciar carrito
    carrito = [];
    actualizarCarrito();
    cerrarCarrito();
}

// Mostrar notificación temporal
function mostrarNotificacion(mensaje) {
    // Crear elemento de notificación
    const notificacion = document.createElement('div');
    notificacion.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background-color: #415a77;
        color: white;
        padding: 15px 25px;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        z-index: 3000;
        animation: slideIn 0.3s ease;
    `;
    notificacion.textContent = mensaje;
    
    // Agregar al body
    document.body.appendChild(notificacion);
    
    // Eliminar después de 2 segundos
    setTimeout(() => {
        notificacion.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notificacion);
        }, 300);
    }, 2000);
}

// Agregar animaciones CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Funciones de paginación
function inicializarPaginacion() {
    const productos = document.querySelectorAll('.producto-item');
    totalProductos = productos.length;
    
    // Ocultar todos los productos inicialmente
    productos.forEach((producto, index) => {
        producto.style.display = 'none';
    });
    
    // Mostrar productos de la página actual
    mostrarProductosPagina(paginaActual);
    
    // Generar números de página
    generarNumerosPagina();
}

function mostrarProductosPagina(pagina) {
    const productos = document.querySelectorAll('.producto-item');
    const inicio = (pagina - 1) * productosPorPagina;
    const fin = inicio + productosPorPagina;
    
    productos.forEach((producto, index) => {
        if (index >= inicio && index < fin) {
            producto.style.display = 'flex';
        } else {
            producto.style.display = 'none';
        }
    });
    
    // Actualizar botones
    actualizarBotonesPaginacion();
    
    // Scroll suave hacia arriba
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function generarNumerosPagina() {
    const totalPaginas = Math.ceil(totalProductos / productosPorPagina);
    const numerosContainer = document.getElementById('numeros-pagina');
    numerosContainer.innerHTML = '';
    
    for (let i = 1; i <= totalPaginas; i++) {
        const boton = document.createElement('button');
        boton.className = 'numero-pagina';
        boton.textContent = i;
        if (i === paginaActual) {
            boton.classList.add('activo');
        }
        boton.onclick = () => irAPagina(i);
        numerosContainer.appendChild(boton);
    }
}

function irAPagina(pagina) {
    paginaActual = pagina;
    mostrarProductosPagina(paginaActual);
    generarNumerosPagina();
}

function cambiarPagina(direccion) {
    const totalPaginas = Math.ceil(totalProductos / productosPorPagina);
    const nuevaPagina = paginaActual + direccion;
    
    if (nuevaPagina >= 1 && nuevaPagina <= totalPaginas) {
        irAPagina(nuevaPagina);
    }
}

function actualizarBotonesPaginacion() {
    const totalPaginas = Math.ceil(totalProductos / productosPorPagina);
    const btnAnterior = document.getElementById('btn-anterior');
    const btnSiguiente = document.getElementById('btn-siguiente');
    
    // Deshabilitar botón anterior si estamos en la primera página
    btnAnterior.disabled = (paginaActual === 1);
    
    // Deshabilitar botón siguiente si estamos en la última página
    btnSiguiente.disabled = (paginaActual === totalPaginas);
}

// Generar productos dinámicamente
function generarProductos() {
    const contenedor = document.getElementById('productos-container');
    contenedor.innerHTML = ''; // Limpiar contenedor
    
    for (let i = 0; i < productosImagenes.length; i++) {
        const productoHTML = `
            <div class="producto-item" data-id="${i + 1}">
                <div class="producto-imagen">
                    <img src="images/${productosImagenes[i]}" alt="${productosNombres[i]}">
                </div>
                <div class="producto-info">
                    <h3>${productosNombres[i]}</h3>
                    <p class="categoria">${productosCategorias[i]}</p>
                    <p class="descripcion">${productosDescripciones[i]}</p>
                </div>
                <div class="producto-accion">
                    <p class="precio">$${productosPrecios[i].toFixed(2)}</p>
                    <button class="btn-agregar" onclick="agregarAlCarrito(${i + 1}, '${productosNombres[i]}', ${productosPrecios[i]}, 'images/${productosImagenes[i]}')">
                        Agregar al carrito
                    </button>
                </div>
            </div>
        `;
        contenedor.innerHTML += productoHTML;
    }
}

// Inicializar carrito y paginación al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    generarProductos(); // Generar productos primero
    actualizarCarrito();
    inicializarPaginacion();
});

