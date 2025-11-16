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

// Generar carrusel
function generarCarrusel() {
    const indicadores = document.getElementById('carousel-indicators');
    const inner = document.getElementById('carousel-inner');

    indicadores.innerHTML = '';
    inner.innerHTML = '';

    for (let i = 0; i < carruselImagenes.length; i++) {

        // Indicadores
        indicadores.innerHTML += `
            <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="${i}"
                ${i === 0 ? 'class="active"' : ''}></button>
        `;

        // Slide
        inner.innerHTML += `
            <div class="carousel-item ${i === 0 ? 'active' : ''}">
                <img src="images/${carruselImagenes[i]}" class="d-block w-100" alt="${carruselTitulos[i]}">
                
                <div class="carousel-caption">
                    <h2>${carruselTitulos[i]}</h2>
                    <p>${carruselDescripciones[i]}</p>
                    <a href="catalogo.html" class="btn">${carruselTextoBotones[i]}</a>
                </div>
            </div>
        `;
    }
}


// Generar destacado
function generarDestacado() {
    const cont = document.getElementById('contenedor-destacado');
    cont.innerHTML = '';

    // Series
    for (let i = 0; i < destacadoSeriesImagenes.length; i++) {
        cont.innerHTML += `
            <div class="card serie">
                <img src="images/${destacadoSeriesImagenes[i]}" alt="${destacadoSeriesTitulos[i]}">
                <div class="card-info">
                    <h3>${destacadoSeriesTitulos[i]}</h3>
                </div>
            </div>
        `;
    }

    // Peliculas
    for (let i = 0; i < destacadoPeliculasImagenes.length; i++) {
        cont.innerHTML += `
            <div class="card pelicula" style="display: none;">
                <img src="images/${destacadoPeliculasImagenes[i]}" alt="${destacadoPeliculasTitulos[i]}">
                <div class="card-info">
                    <h3>${destacadoPeliculasTitulos[i]}</h3>
                </div>
            </div>
        `;
    }
}


// Toggle series/peliculas
function mostrarSeries() {
    document.querySelectorAll('.serie').forEach(c => c.style.display = 'block');
    document.querySelectorAll('.pelicula').forEach(c => c.style.display = 'none');

    document.getElementById('btn-series').classList.add('active');
    document.getElementById('btn-peliculas').classList.remove('active');
}

function mostrarPeliculas() {
    document.querySelectorAll('.pelicula').forEach(c => c.style.display = 'block');
    document.querySelectorAll('.serie').forEach(c => c.style.display = 'none');

    document.getElementById('btn-peliculas').classList.add('active');
    document.getElementById('btn-series').classList.remove('active');
}


// Buscador en el header
function configurarBuscadorHeader() {
    const header = document.querySelector('header');
    if (!header) return;

    // Evitar duplicar buscador
    if (document.getElementById('buscador-header')) return;

    const wrapper = document.createElement('div');
    wrapper.className = 'buscador';
    wrapper.innerHTML = `
        <input type="search" id="buscador-header" placeholder="Buscar en catálogo...">
`;
    header.appendChild(wrapper);

    const input = wrapper.querySelector('#buscador-header');

    // Enter = redirige a catálogo
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const q = input.value.trim();
            window.location.href = q
                ? 'catalogo.html?q=' + encodeURIComponent(q)
                : 'catalogo.html';
        }
    });
}


// Inicializacion completa
document.addEventListener('DOMContentLoaded', () => {
    generarCarrusel();
    generarDestacado();
    configurarBuscadorHeader();

    // Eventos toggle
    document.getElementById('btn-series').addEventListener('click', mostrarSeries);
    document.getElementById('btn-peliculas').addEventListener('click', mostrarPeliculas);

    // Estado inicial: mostrar series
    mostrarSeries();
});