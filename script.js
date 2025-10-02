// Interacciones para el botón
document.addEventListener('DOMContentLoaded', () => {
    const ctaButton = document.querySelector('.cta-button');

    // Event listener para el botón CTA
    if (ctaButton) {
        ctaButton.addEventListener('click', () => {
            // Aquí puedes agregar la funcionalidad del botón
            console.log('Ver más clicked');
            // Ejemplo: window.location.href = 'pagina-destino.html';
        });
    }
});
