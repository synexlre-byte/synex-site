document.addEventListener('DOMContentLoaded', () => {
    // Código existente para o menu de navegação
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }

    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            }
        });
    });

    // --- NOVO CÓDIGO PARA O EFEITO DE CLIQUE NOS CARDS ---
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        // Adiciona um ouvinte de evento de clique a cada card
        card.addEventListener('click', () => {
            const cardInner = card.querySelector('.project-card-inner');
            
            // Adiciona ou remove a classe 'is-flipped' para ativar a animação CSS
            if (cardInner) {
                cardInner.classList.toggle('is-flipped');
            }
        });
    });
});