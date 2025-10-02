// Animaciones con Motion.js
document.addEventListener('DOMContentLoaded', () => {
    const { animate, stagger, inView } = Motion;

    // Animación del título principal
    animate(
        '.title',
        {
            opacity: [0, 1],
            y: [50, 0]
        },
        {
            duration: 0.4,
            easing: 'ease-out'
        }
    );

    // Animación del título "y la Amazonía"
    animate(
        '.title-amazon',
        {
            opacity: [0, 1],
            scale: [0.8, 1]
        },
        {
            duration: 0.4,
            delay: 0.15,
            easing: 'ease-out'
        }
    );

    // Animación de las características con stagger
    animate(
        '.feature-item',
        {
            opacity: [0, 1],
            x: [-30, 0]
        },
        {
            duration: 0.3,
            delay: stagger(0.1, { start: 0.3 }),
            easing: 'ease-out'
        }
    );

    // Animación del botón Ver más
    animate(
        '.cta-button',
        {
            opacity: [0, 1],
            y: [20, 0]
        },
        {
            duration: 0.3,
            delay: 0.6,
            easing: 'ease-out'
        }
    );

    // Animación del logo
    animate(
        '.logo',
        {
            opacity: [0, 1],
            x: [-30, 0]
        },
        {
            duration: 0.3,
            easing: 'ease-out'
        }
    );

    // Animación del botón contacto
    animate(
        '.contact-button',
        {
            opacity: [0, 1],
            x: [30, 0]
        },
        {
            duration: 0.3,
            easing: 'ease-out'
        }
    );

    // Hover animation para el botón Ver más
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('mouseenter', () => {
            animate(ctaButton, { scale: 1.05 }, { duration: 0.2 });
        });
        ctaButton.addEventListener('mouseleave', () => {
            animate(ctaButton, { scale: 1 }, { duration: 0.2 });
        });
    }

    // Hover animation para el botón Contáctanos
    const contactButton = document.querySelector('.contact-button');
    if (contactButton) {
        contactButton.addEventListener('mouseenter', () => {
            animate(contactButton, { scale: 1.05 }, { duration: 0.2 });
        });
        contactButton.addEventListener('mouseleave', () => {
            animate(contactButton, { scale: 1 }, { duration: 0.2 });
        });
    }
});
