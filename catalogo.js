// Arrays simples con la información del catálogo
const catalogoImagenes = [
    'breakingbad.jpg',
    'bridgerton.jpg',
    'thebear.jpg',
    'percyjackson.jpg',
    'agathaallalong.jpg',
    'wicked.jpg',
    'dune2.jpg',
    'oppenheimer.jpg',
    'moana2.jpg',
    'spiderman.jpg'
];

const catalogoTitulos = [
    'Breaking Bad',
    'Bridgerton',
    'The Bear',
    'Percy Jackson and the Olympians',
    'Agatha All Along',
    'Wicked',
    'Dune: Part Two',
    'Oppenheimer',
    'Moana 2',
    'Spider-Man: Far From Home'
];

const catalogoTipos = [
    'series',
    'series',
    'series',
    'series',
    'series',
    'peliculas',
    'peliculas',
    'peliculas',
    'peliculas',
    'peliculas'
];

const catalogoGeneros = [
    'drama crimen',
    'drama romantica',
    'drama comedia',
    'fantasia aventura',
    'superheroes misterio',
    'musical fantasia',
    'accion cienciaficcion',
    'drama historico',
    'animacion aventura',
    'accion superheroes aventura'
];

const catalogoGenerosTexto = [
    'Drama / Crimen',
    'Drama / Romántica',
    'Drama / Comedia',
    'Fantasía / Aventura',
    'Superhéroes / Misterio',
    'Musical / Fantasía',
    'Ciencia Ficción / Aventura',
    'Drama / Histórico',
    'Animación / Aventura',
    'Acción / Superhéroes / Aventura'
];

const catalogoAnios = [
    2008,
    2020,
    2022,
    2024,
    2024,
    2024,
    2024,
    2023,
    2024,
    2019
];

const catalogoElencos = [
    'Bryan Cranston, Aaron Paul, Anna Gunn',
    'Regé-Jean Page, Phoebe Dynevor, Nicola Coughlan',
    'Jeremy Allen White, Ayo Edebiri, Ebon Moss-Bachrach',
    'Walker Scobell, Leah Sava Jeffries, Aryan Simhadri',
    'Kathryn Hahn, Aubrey Plaza, Joe Locke',
    'Cynthia Erivo, Ariana Grande, Jonathan Bailey',
    'Timothée Chalamet, Zendaya, Austin Butler',
    'Cillian Murphy, Emily Blunt, Robert Downey Jr.',
    'Auli\'i Cravalho, Dwayne Johnson',
    'Tom Holland, Zendaya, Jake Gyllenhaal'
];

const catalogoSinopsis = [
    'Un profesor de química se convierte en fabricante de metanfetaminas para asegurar el futuro de su familia.',
    'En la alta sociedad londinense del siglo XIX, las familias compiten por amor, poder y reputación.',
    'Un joven chef regresa a Chicago para administrar el restaurante de su familia después de una pérdida.',
    'Percy descubre que es hijo de un dios griego y debe enfrentarse a desafíos épicos en su búsqueda de identidad.',
    'Una historia mágica centrada en Agatha Harkness, la carismática bruja del universo Marvel.',
    'La historia de las dos brujas de Oz antes de la llegada de Dorothy. Amistad, poder y destino se entrelazan.',
    'Paul Atreides une al pueblo Fremen mientras busca venganza contra los conspiradores que destruyeron su familia.',
    'La vida del físico J. Robert Oppenheimer y el desarrollo del Proyecto Manhattan durante la Segunda Guerra Mundial.',
    'Moana emprende un nuevo viaje a los mares del sur en busca de su identidad y el futuro de su pueblo.',
    'Tras los eventos de Endgame, Peter Parker viaja por Europa mientras enfrenta nuevas amenazas y responsabilidades como Spider-Man.'
];

const catalogoPlataformas = [
    'Netflix',
    'Netflix',
    'Disney+',
    'Disney+',
    'Disney+',
    'Peacock',
    'HBO Max',
    'Prime Video',
    'Disney+',
    'Disney+'
];

// Generar catálogo dinámicamente
function generarCatalogo() {
    const contenedor = document.getElementById('contenedor-catalogo');
    contenedor.innerHTML = ''; // Limpiar contenedor
    
    for (let i = 0; i < catalogoImagenes.length; i++) {
        const cardHTML = `
            <div class="card" data-tipo="${catalogoTipos[i]}" data-genero="${catalogoGeneros[i]}">
                <img src="images/${catalogoImagenes[i]}" alt="Poster ${catalogoTitulos[i]}">
                <div class="card-info">
                    <h3>${catalogoTitulos[i]}</h3>
                    <p><strong>Género:</strong> ${catalogoGenerosTexto[i]}</p>
                    <p><strong>Año:</strong> ${catalogoAnios[i]}</p>
                    <p><strong>Elenco:</strong> ${catalogoElencos[i]}</p>
                    <p class="sinopsis">${catalogoSinopsis[i]}</p>
                    <p><strong>Plataforma:</strong> ${catalogoPlataformas[i]}</p>
                </div>
            </div>
        `;
        contenedor.innerHTML += cardHTML;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Generar catálogo primero
    generarCatalogo();
    
    const buscador = document.getElementById('buscador');
    const botonesTipo = document.querySelectorAll('.tipo');
    const selectGenero = document.getElementById('genero');

    // Función para filtrar las tarjetas
    function filtrarCatalogo() {
        const cards = document.querySelectorAll('.card'); // Obtener cards actuales
        const textoBusqueda = buscador.value.toLowerCase();
        const tipoSeleccionado = document.querySelector('.tipo.active')?.dataset.tipo || '';
        const generoSeleccionado = selectGenero.value.toLowerCase();

        cards.forEach(card => {
            const titulo = card.querySelector('h3').textContent.toLowerCase();
            const elenco = card.querySelector('.card-info p:nth-child(4)').textContent.toLowerCase();
            const tipo = card.dataset.tipo;
            const generos = card.dataset.genero;

            // Filtro de búsqueda por texto
            const coincideTexto = titulo.includes(textoBusqueda) || elenco.includes(textoBusqueda);
            
            // Filtro por tipo
            const coincideTipo = !tipoSeleccionado || tipo === tipoSeleccionado;
            
            // Filtro por género
            const coincideGenero = !generoSeleccionado || generos.includes(generoSeleccionado);

            // Mostrar u ocultar tarjeta
            if (coincideTexto && coincideTipo && coincideGenero) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    // Event listener para el buscador
    buscador.addEventListener('input', filtrarCatalogo);

    // Event listeners para los botones de tipo
    botonesTipo.forEach(boton => {
        boton.addEventListener('click', function() {
            // Si el botón ya está activo, lo desactivamos
            if (this.classList.contains('active')) {
                this.classList.remove('active');
            } else {
                // Desactivar todos los botones
                botonesTipo.forEach(btn => btn.classList.remove('active'));
                // Activar el botón clickeado
                this.classList.add('active');
            }
            filtrarCatalogo();
        });
    });

    // Event listener para el select de género
    selectGenero.addEventListener('change', filtrarCatalogo);

    // Mostrar todas las tarjetas al inicio
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.style.display = 'block';
    });
});

