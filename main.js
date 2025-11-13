// Arrays simples para el carrusel
const carruselImagenes = [
    'bannerPrisonBreak.jpg',
    'bannerPeakyBlinders.jpg',
    'bannerModernFamily.jpg'
];

const carruselTitulos = [
    'Descubrí tus series y películas favoritas',
    'Las mejores series dramáticas',
    'Comedias para toda la familia'
];

const carruselDescripciones = [
    'Elegí qué ver, filtrá por género y encontrá dónde mirarlas.',
    'Sumergite en historias intensas y apasionantes',
    'Encontrá el contenido perfecto para cada momento'
];

const carruselTextoBotones = [
    'Explorar catálogo',
    'Ver más',
    'Descubrir'
];

// Arrays simples para lo más destacado
const destacadoSeriesImagenes = [
    'breakingbad.jpg',
    'bridgerton.jpg',
    'thebear.jpg',
    'percyjackson.jpg',
    'agathaallalong.jpg'
];

const destacadoSeriesTitulos = [
    'Breaking Bad',
    'Bridgerton',
    'The Bear',
    'Percy Jackson and the Olympians',
    'Agatha All Along'
];

const destacadoPeliculasImagenes = [
    'wicked.jpg',
    'dune2.jpg',
    'oppenheimer.jpg',
    'moana2.jpg',
    'spiderman.jpg'
];

const destacadoPeliculasTitulos = [
    'Wicked',
    'Dune: Part Two',
    'Oppenheimer',
    'Moana 2',
    'Spider-Man: Far From Home'
];

// Generar carrusel dinámicamente
function generarCarrusel() {
    const indicadores = document.getElementById('carousel-indicators');
    const inner = document.getElementById('carousel-inner');
    
    indicadores.innerHTML = '';
    inner.innerHTML = '';
    
    for (let i = 0; i < carruselImagenes.length; i++) {
        // Generar indicador
        const indicador = `<button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="${i}" ${i === 0 ? 'class="active"' : ''}></button>`;
        indicadores.innerHTML += indicador;
        
        // Generar slide
        const slide = `
            <div class="carousel-item ${i === 0 ? 'active' : ''}">
                <img src="images/${carruselImagenes[i]}" class="d-block w-100" alt="${carruselTitulos[i]}">
                <div class="carousel-caption">
                    <h2>${carruselTitulos[i]}</h2>
                    <p>${carruselDescripciones[i]}</p>
                    <a href="catalogo.html" class="btn">${carruselTextoBotones[i]}</a>
                </div>
            </div>
        `;
        inner.innerHTML += slide;
    }
}

// Generar lo más destacado dinámicamente
function generarDestacado() {
    const contenedor = document.getElementById('contenedor-destacado');
    contenedor.innerHTML = '';
    
    // Generar series
    for (let i = 0; i < destacadoSeriesImagenes.length; i++) {
        const card = `
            <div class="card serie">
                <img src="images/${destacadoSeriesImagenes[i]}" alt="Poster ${destacadoSeriesTitulos[i]}">
                <div class="card-info">
                    <h3>${destacadoSeriesTitulos[i]}</h3>
                </div>
            </div>
        `;
        contenedor.innerHTML += card;
    }
    
    // Generar películas
    for (let i = 0; i < destacadoPeliculasImagenes.length; i++) {
        const card = `
            <div class="card pelicula" style="display: none;">
                <img src="images/${destacadoPeliculasImagenes[i]}" alt="Poster ${destacadoPeliculasTitulos[i]}">
                <div class="card-info">
                    <h3>${destacadoPeliculasTitulos[i]}</h3>
                </div>
            </div>
        `;
        contenedor.innerHTML += card;
    }
}

// Alternar entre series y películas en la sección "Lo más destacado"
document.addEventListener('DOMContentLoaded', function() {
    // Generar todo dinámicamente primero
    generarCarrusel();
    generarDestacado();
    
    // Agregar un buscador en el header (si no existe) que redirija al catálogo con ?q=texto
    (function() {
        const header = document.querySelector('header');
        if (!header) return;

        // Usamos un id distinto (buscador-header) para no chocar con el buscador del catálogo
        let headerBuscador = header.querySelector('#buscador-header');
        if (!headerBuscador) {
            const buscadorDiv = document.createElement('div');
            buscadorDiv.className = 'buscador';
            buscadorDiv.innerHTML = '<input type="search" id="buscador-header" placeholder="Buscar en catálogo...">';
            header.appendChild(buscadorDiv);
            headerBuscador = buscadorDiv.querySelector('#buscador-header');
        }

        // Redirigir a catalogo.html con query param al presionar Enter
        headerBuscador.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') {
                const q = headerBuscador.value.trim();
                if (q) {
                    window.location.href = 'catalogo.html?q=' + encodeURIComponent(q);
                } else {
                    window.location.href = 'catalogo.html';
                }
            }
        });
    })();
    
    const btnSeries = document.getElementById('btn-series');
    const btnPeliculas = document.getElementById('btn-peliculas');
    
    // Función para mostrar series
    function mostrarSeries() {
        const cardsSeries = document.querySelectorAll('.serie');
        const cardsPeliculas = document.querySelectorAll('.pelicula');
        
        cardsSeries.forEach(card => {
            card.style.display = 'block';
        });
        cardsPeliculas.forEach(card => {
            card.style.display = 'none';
        });
        btnSeries.classList.add('active');
        btnPeliculas.classList.remove('active');
    }
    
    // Función para mostrar películas
    function mostrarPeliculas() {
        const cardsSeries = document.querySelectorAll('.serie');
        const cardsPeliculas = document.querySelectorAll('.pelicula');
        
        cardsPeliculas.forEach(card => {
            card.style.display = 'block';
        });
        cardsSeries.forEach(card => {
            card.style.display = 'none';
        });
        btnPeliculas.classList.add('active');
        btnSeries.classList.remove('active');
    }
    
    // Event listeners
    btnSeries.addEventListener('click', mostrarSeries);
    btnPeliculas.addEventListener('click', mostrarPeliculas);
    
    // Estado inicial: mostrar series (por defecto)
    mostrarSeries();
});
