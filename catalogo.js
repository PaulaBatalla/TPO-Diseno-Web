document.addEventListener('DOMContentLoaded', function() {
    const buscador = document.getElementById('buscador');
    const botonesTipo = document.querySelectorAll('.tipo');
    const selectGenero = document.getElementById('genero');
    const cards = document.querySelectorAll('.card');

    // Función para filtrar las tarjetas
    function filtrarCatalogo() {
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
    cards.forEach(card => {
        card.style.display = 'block';
    });
});

