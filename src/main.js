document.addEventListener('DOMContentLoaded', () => {
    // Adiciona a funcionalidade de rolagem suave para a seta
    const scrollToProjects = document.getElementById('scroll-to-projects');
    const projectsSection = document.getElementById('projects-section');

    if (scrollToProjects && projectsSection) {
        scrollToProjects.addEventListener('click', (e) => {
            e.preventDefault();
            projectsSection.scrollIntoView({
                behavior: 'smooth'
            });
        });
    }

    
});