document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os containers de card
    const projectCardWrappers = document.querySelectorAll('.project-card-wrapper');

    // Adiciona um evento de clique a cada um
    projectCardWrappers.forEach(wrapper => {
        wrapper.addEventListener('click', () => {
            // Adiciona ou remove a classe 'flipped' para ativar a animação CSS
            wrapper.classList.toggle('flipped');
        });
    });
});