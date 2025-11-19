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
    'spiderman.jpg',
    'strangerthings.jpg',
    'thelastofus.jpg',
    'houseofthedragon.jpg',
    'theboys.jpg',
    'wednesday.jpg',
    'thecrown.jpg',
    'themandalorian.jpg',
    'insideout2.jpg',
    'barbie.jpg',
    'avatar2.jpg',
    'johnwick4.jpg',
    'thebatman.jpg',
    'elemental.jpg',
    'topgunmaverick.jpg'
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
    'Spider-Man: Far From Home',
    'Stranger Things',
    'The Last of Us',
    'House of the Dragon',
    'The Boys',
    'Wednesday',
    'The Crown',
    'The Mandalorian',
    'Inside Out 2',
    'Barbie',
    'Avatar: The Way of Water',
    'John Wick: Chapter 4',
    'The Batman',
    'Elemental',
    'Top Gun: Maverick'
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
    'peliculas',
    'series',
    'series',
    'series',
    'series',
    'series',
    'series',
    'series',
    'peliculas',
    'peliculas',
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
    'accion superheroes aventura',
    'cienciaficcion misterio',
    'drama aventura',
    'fantasia drama',
    'superheroes accion',
    'fantasia misterio',
    'drama historico',
    'cienciaficcion aventura',
    'animacion familiar',
    'comedia fantasia',
    'cienciaficcion aventura',
    'accion suspenso',
    'accion crimen',
    'animacion fantasia',
    'accion drama'
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
    'Acción / Superhéroes / Aventura',
    'Ciencia Ficción / Misterio',
    'Drama / Aventura',
    'Fantasía / Drama',
    'Superhéroes / Acción',
    'Fantasía / Misterio',
    'Drama / Histórico',
    'Ciencia Ficción / Aventura',
    'Animación / Familiar',
    'Comedia / Fantasía',
    'Ciencia Ficción / Aventura',
    'Acción / Suspenso',
    'Acción / Crimen',
    'Animación / Fantasía',
    'Acción / Drama'
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
    2019,
    2016,
    2023,
    2022,
    2019,
    2022,
    2016,
    2019,
    2024,
    2023,
    2022,
    2023,
    2022,
    2023,
    2022
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
    'Tom Holland, Zendaya, Jake Gyllenhaal',
    'Millie Bobby Brown, Finn Wolfhard, David Harbour',
    'Pedro Pascal, Bella Ramsey',
    'Matt Smith, Emma D’Arcy, Olivia Cooke',
    'Karl Urban, Jack Quaid, Antony Starr',
    'Jenna Ortega, Emma Myers, Catherine Zeta-Jones',
    'Claire Foy, Olivia Colman, Imelda Staunton',
    'Pedro Pascal, Grogu (Baby Yoda)',
    'Amy Poehler, Maya Hawke',
    'Margot Robbie, Ryan Gosling',
    'Sam Worthington, Zoe Saldana',
    'Keanu Reeves, Donnie Yen',
    'Robert Pattinson, Zoë Kravitz',
    'Leah Lewis, Mamoudou Athie',
    'Tom Cruise, Miles Teller'
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
    'Tras los eventos de Endgame, Peter Parker viaja por Europa mientras enfrenta nuevas amenazas y responsabilidades como Spider-Man.',
    'Un grupo de niños enfrenta fuerzas sobrenaturales en su pequeño pueblo.',
    'Un hombre y una adolescente deben sobrevivir en un mundo postapocalíptico.',
    'La guerra civil entre las casas Targaryen por el Trono de Hierro.',
    'Superhéroes corruptos son controlados por una organización clandestina.',
    'Wednesday Addams investiga misterios en la Academia Nevermore.',
    'La historia del reinado de Isabel II del Reino Unido.',
    'Un cazarrecompensas mandaloriano se embarca en misiones galácticas.',
    'Riley enfrenta nuevas emociones durante su adolescencia.',
    'Una muñeca que vive en Barbieland comienza a cuestionarse su existencia.',
    'Jake Sully protege a su familia en Pandora frente a una nueva amenaza.',
    'John Wick enfrenta a poderosos enemigos en su última batalla.',
    'Batman descubre una red de corrupción que involucra a Gotham.',
    'Una niña de fuego y un chico de agua descubren lo que los une.',
    'Maverick entrena a una nueva generación de pilotos de élite.'
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
    'Disney+',
    'Netflix',
    'HBO Max',
    'HBO Max',
    'Prime Video',
    'Netflix',
    'Netflix',
    'Disney+',
    'Disney+',
    'HBO Max',
    'Disney+',
    'Prime Video',
    'HBO Max',
    'Disney+',
    'Paramount+'
];


// Generacion del catalogo

function crearCard(i) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.tipo = catalogoTipos[i];
    card.dataset.genero = catalogoGeneros[i];
    card.dataset.year = catalogoAnios[i];
    card.dataset.elenco = catalogoElencos[i].toLowerCase();
    card.dataset.titulo = catalogoTitulos[i].toLowerCase();

    card.innerHTML = `
        <img src="images/${catalogoImagenes[i]}" alt="Poster ${catalogoTitulos[i]}">
        <div class="card-info">
            <h3>${catalogoTitulos[i]}</h3>
            <p><strong>Género:</strong> ${catalogoGenerosTexto[i]}</p>
            <p><strong>Año:</strong> ${catalogoAnios[i]}</p>
            <p><strong>Elenco:</strong> ${catalogoElencos[i]}</p>
            <p class="sinopsis">${catalogoSinopsis[i]}</p>
            <p><strong>Plataforma:</strong> ${catalogoPlataformas[i]}</p>
        </div>
    `;
    return card;
}

function generarCatalogo() {
    const cont = document.getElementById("contenedor-catalogo");
    cont.innerHTML = "";

    for (let i = 0; i < catalogoImagenes.length; i++) {
        cont.appendChild(crearCard(i));
    }
}

// Ordenamiento

function ordenarCatalogo(sortBy, direction) {
    const cont = document.getElementById("contenedor-catalogo");
    const cards = Array.from(cont.children);

    cards.sort((a, b) => {
        let va = a.dataset[sortBy];
        let vb = b.dataset[sortBy];

        if (sortBy === "year") {
            va = parseInt(va);
            vb = parseInt(vb);
        }

        if (direction === "asc") return va < vb ? -1 : va > vb ? 1 : 0;
        return va > vb ? -1 : va < vb ? 1 : 0;
    });

    cards.forEach(card => cont.appendChild(card));

    // Guardar preferencia
    localStorage.setItem("catalogSort", JSON.stringify({ sortBy, direction }));

    // Activar botón correspondiente
    document.querySelectorAll(".sort-btn").forEach(btn => {
        btn.classList.toggle(
            "active",
            btn.dataset.sort === sortBy && btn.dataset.dir === direction
        );
    });
}

// Filtro

function obtenerFiltros() {
    return {
        texto: document.getElementById("buscador").value.toLowerCase(),
        tipo: document.querySelector(".tipo.active")?.dataset.tipo || "",
        genero: document.getElementById("genero").value.toLowerCase()
    };
}

function coincideCard(card, filtros) {
    const titulo = card.dataset.titulo;
    const elenco = card.dataset.elenco;
    const tipo = card.dataset.tipo;
    const generos = card.dataset.genero;

    const textoOK = titulo.includes(filtros.texto) || elenco.includes(filtros.texto);
    const tipoOK = !filtros.tipo || filtros.tipo === tipo;
    const generoOK = !filtros.genero || generos.includes(filtros.genero);

    return textoOK && tipoOK && generoOK;
}

function mostrarMensajeSinResultados(contenedor, query) {
    let msg = document.getElementById("no-result-msg");

    if (!msg) {
        msg = document.createElement("div");
        msg.id = "no-result-msg";
        contenedor.appendChild(msg);
    }

    msg.textContent = query
        ? `No se encontraron resultados para "${query}"`
        : "No se encontraron resultados.";
}

function removerMensajeSinResultados() {
    const msg = document.getElementById("no-result-msg");
    if (msg) msg.remove();
}

function resaltarPrimerResultado(cardsVisibles) {
    // Remover highlights previos
    document.querySelectorAll(".highlight-temporal").forEach(el => {
        el.classList.remove("highlight-temporal");
    });

    const first = cardsVisibles[0];
    if (!first) return;

    first.classList.add("highlight-temporal");

    try {
        first.scrollIntoView({ behavior: "smooth", block: "center" });
    } catch(e) {}
    
    setTimeout(() => {
        first.classList.remove("highlight-temporal");
    }, 1500);
}

function filtrarCatalogo() {
    const filtros = obtenerFiltros();
    const cont = document.getElementById("contenedor-catalogo");
    const cards = Array.from(cont.querySelectorAll(".card"));

    let visibles = [];

    cards.forEach(card => {
        if (coincideCard(card, filtros)) {
            card.style.display = "block";
            visibles.push(card);
        } else {
            card.style.display = "none";
        }
    });

    if (visibles.length === 0) {
        mostrarMensajeSinResultados(cont, filtros.texto);
    } else {
        removerMensajeSinResultados();
        resaltarPrimerResultado(visibles);
    }
}

// Eventos

function configurarEventos() {
    // Buscador
    document.getElementById("buscador").addEventListener("input", filtrarCatalogo);

    // Botones Series / Películas
    document.querySelectorAll(".tipo").forEach(btn => {
        btn.addEventListener("click", () => {
            btn.classList.contains("active")
                ? btn.classList.remove("active")
                : (document.querySelectorAll(".tipo").forEach(b => b.classList.remove("active")),
                   btn.classList.add("active"));

            filtrarCatalogo();
        });
    });

    // Select género
    document.getElementById("genero").addEventListener("change", filtrarCatalogo);

    // Botones ordernar
    document.querySelectorAll(".sort-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            ordenarCatalogo(btn.dataset.sort, btn.dataset.dir);
        });
    });
}

// Inicializar
function init() {
    generarCatalogo();
    configurarEventos();

    // Aplicar orden guardado
    const savedSort = JSON.parse(localStorage.getItem("catalogSort") || 
        '{"sortBy":"title", "direction":"asc"}');
    ordenarCatalogo(savedSort.sortBy, savedSort.direction);

    const params = new URLSearchParams(window.location.search);
    const q = params.get("q");

    if (q) {
        const buscador = document.getElementById("buscador");
        buscador.value = q;
    }

    filtrarCatalogo();
}

document.addEventListener("DOMContentLoaded", init);
