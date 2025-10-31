// Alternar entre series y películas en la sección "Lo más destacado"
document.addEventListener('DOMContentLoaded', function() {
    const btnSeries = document.getElementById('btn-series');
    const btnPeliculas = document.getElementById('btn-peliculas');
    const cardsSeries = document.querySelectorAll('.serie');
    const cardsPeliculas = document.querySelectorAll('.pelicula');
    
    // Función para mostrar series
    function mostrarSeries() {
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

