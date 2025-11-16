// Arrays simples para estrenos
const estrenosPosters = [
    'deadpool.jpg',
    'insideout2.jpg',
    'gladiator.jpg',
    'thelastofus.jpg',
    'avatar3.jpg'
];

const estrenosTitulos = [
    'Deadpool & Wolverine',
    'Inside Out 2',
    'Gladiator II',
    'The Last of Us - Temporada 2',
    'Avatar 3'
];

const estrenosDescripcionesBreves = [
    'El mercenario bocazas se une al mutante más famoso de Marvel en una aventura épica que promete ser la película más explosiva del MCU.',
    'Riley entra en la adolescencia y nuevas emociones llegan a la sala de control. Ansiedad, Vergüenza, Envidia y Aburrimiento llegan sin avisar.',
    'Años después de los acontecimientos de la primera película, Lucius busca venganza contra los emperadores tiranos que conquistaron su hogar.',
    'Joel y Ellie continúan su peligroso viaje en un mundo postapocalíptico. El pasado regresa para atormentarlos en esta esperada segunda temporada.',
    'La familia Sully explora nuevas regiones de Pandora en esta esperada secuela que promete revolucionar nuevamente la experiencia cinematográfica.'
];

const estrenosYoutubeIDs = [
    '73_1biulkYk',
    'LEjhY15eCx0',
    'yshJ_JNmFl0',
    '7tp3ZFhZ0Tk',
    'd9MyW72ELq0'
];

const estrenosDescripcionesExtensas = [
    '<strong>Fecha de estreno:</strong> 26 de julio de 2024<br><br>Wade Wilson está tratando de llevar una vida tranquila cuando Nick Fury lo recluta para una misión crucial. Ahora debe trabajar junto a Wolverine para detener una amenaza que podría destruir el multiverso.<br><br>Con humor característico, acción desenfrenada y una química explosiva entre Ryan Reynolds y Hugh Jackman, esta película promete ser una de las más épicas del MCU.<br><br><strong>Director:</strong> Shawn Levy<br><strong>Elenco:</strong> Ryan Reynolds, Hugh Jackman, Emma Corrin<br><strong>Género:</strong> Acción, Comedia, Superhéroes',
    
    '<strong>Fecha de estreno:</strong> 14 de junio de 2024<br><br>Riley ahora es una adolescente y su mente se prepara para algo completamente inesperado: nuevas emociones. Ansiedad, Vergüenza, Envidia y Aburrimiento llegan a la sala de control.<br><br>Alegría, Tristeza, Ira, Miedo y Desagrado deben adaptarse a estos cambios mientras Riley navega por los desafíos de la adolescencia. Una historia conmovedora sobre crecer y aceptar todas nuestras emociones.<br><br><strong>Director:</strong> Kelsey Mann<br><strong>Estudio:</strong> Pixar Animation Studios<br><strong>Género:</strong> Animación, Comedia, Drama',
    
    '<strong>Fecha de estreno:</strong> 22 de noviembre de 2024<br><br>Años después de presenciar la muerte de Maximus, Lucius se ve obligado a entrar en el Coliseo después de que su hogar sea conquistado por los emperadores tiranos que ahora lideran Roma con mano de hierro.<br><br>Con rabia en su corazón y el futuro del Imperio en juego, Lucius debe mirar hacia su pasado para encontrar la fuerza y el honor necesarios para devolver la gloria de Roma a su pueblo.<br><br><strong>Director:</strong> Ridley Scott<br><strong>Elenco:</strong> Paul Mescal, Pedro Pascal, Denzel Washington<br><strong>Género:</strong> Drama, Acción, Histórico',
    
    '<strong>Fecha de estreno:</strong> 2025<br><br>La segunda temporada continúa la historia de Joel y Ellie cinco años después de los eventos del primer juego. La relación entre los dos se pone a prueba cuando el pasado de Joel regresa para atormentarlo.<br><br>Ellie debe enfrentar consecuencias devastadoras en un viaje de venganza que la llevará al límite. Una historia de pérdida, redención y la lucha por mantener la humanidad en un mundo donde la supervivencia lo es todo.<br><br><strong>Creadores:</strong> Craig Mazin, Neil Druckmann<br><strong>Elenco:</strong> Pedro Pascal, Bella Ramsey, Kaitlyn Dever<br><strong>Género:</strong> Drama, Terror, Post-apocalíptico',
    
    '<strong>Fecha de estreno:</strong> 19 de diciembre de 2025<br><br>La familia Sully (Jake, Neytiri y sus hijos) exploran nuevas regiones de Pandora, incluyendo las islas flotantes y los misteriosos océanos del planeta que esconden secretos ancestrales.<br><br>Enfrentarán nuevas tribus Na\'vi, criaturas nunca antes vistas y amenazas que pondrán en peligro todo lo que han construido. James Cameron vuelve a revolucionar el cine con efectos visuales que expanden el universo de Pandora de formas inimaginables.<br><br><strong>Director:</strong> James Cameron<br><strong>Elenco:</strong> Sam Worthington, Zoe Saldaña, Sigourney Weaver<br><strong>Género:</strong> Ciencia Ficción, Aventura, Fantasía'
];

// Generar estrenos dinámicamente
function generarEstrenos() {
    const contenedor = document.getElementById('contenedor-estrenos');
    contenedor.innerHTML = '';
    
    for (let i = 0; i < estrenosTitulos.length; i++) {
        const estrenoHTML = `
            <div class="estreno-item" id="estreno-${i}">
                <div class="estreno-contenedor">
                    <!-- Parte visible -->
                    <div class="estreno-visible">
                        <div class="estreno-poster">
                            <img src="images/${estrenosPosters[i]}" alt="${estrenosTitulos[i]}">
                        </div>
                        <div class="estreno-info">
                            <h3>${estrenosTitulos[i]}</h3>
                            <p>${estrenosDescripcionesBreves[i]}</p>
                        </div>
                        <div class="estreno-toggle" onclick="toggleEstreno(${i})">
                            <span>→</span>
                        </div>
                    </div>
                    
                    <!-- Parte expandible (Trailer + Descripción) -->
                    <div class="estreno-expandible">
                        <div class="trailer-contenedor">
                            <div class="trailer-wrapper">
                                <iframe 
                                    src="https://www.youtube.com/embed/${estrenosYoutubeIDs[i]}" 
                                    title="${estrenosTitulos[i]} - Trailer"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                    allowfullscreen>
                                </iframe>
                            </div>
                        </div>
                        <div class="descripcion-extensa">
                            ${estrenosDescripcionesExtensas[i]}
                        </div>
                    </div>
                </div>
            </div>
        `;
        contenedor.innerHTML += estrenoHTML;
    }
}

// Función para expandir/contraer items
function toggleEstreno(index) {
    const item = document.getElementById(`estreno-${index}`);
    const todosLosItems = document.querySelectorAll('.estreno-item');
    
    // Si el item clickeado está expandido, contraerlo
    if (item.classList.contains('expandido')) {
        item.classList.remove('expandido');
    } else {
        // Contraer todos los items
        todosLosItems.forEach(i => i.classList.remove('expandido'));
        // Expandir el item clickeado
        item.classList.add('expandido');
    }
}

// Inicializar al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    generarEstrenos();
});

