document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            // Adiciona/remove a classe 'active' para mostrar/esconder o menu
            navMenu.classList.toggle('active');
            
            // Adiciona/remove a classe 'active' para animar o ícone do hambúrguer
            navToggle.classList.toggle('active');
        });
    }

    // Opcional: Fechar o menu ao clicar em um link (útil para Single Page Applications)
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            }
        });
    });
});