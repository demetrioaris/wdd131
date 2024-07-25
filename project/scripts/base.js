document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menu');
    const navigation = document.querySelector('.navigation');
    const navLinks = document.querySelectorAll('.navigation a');

    // Manejador de evento para el botón de menú
    menuButton.addEventListener('click', () => {
        menuButton.classList.toggle('open');
        navigation.classList.toggle('open');
    });

    // Manejador de evento para los enlaces de navegación
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            navLinks.forEach(nav => nav.classList.remove('active'));
            e.target.classList.add('active');
        });
    });

    // Insertar contenido social
    const socialContent = `
        <a href="https://github.com/demetrioaris" target="_blank" title="GitHub"><img
                class="icon github-logo" src="/project/images/logos/github-mark-white.png"
                alt="GitHub icon" /></a>
        <a href="https://x.com/demetrio_aris" target="_blank" title="X"><img class="icon x-logo"
                src="/project/images/logos/logo-x-version-white.png" alt="X logo" /></a>
        <a href="https://www.linkedin.com/in/demetrio-aris" target="_blank" title="LinkedIn"><img
                class="icon linkedin-logo" src="/project/images/logos/linkedin-logo-white.png"
                alt="LinkedIn icon" /></a>
    `;

    document.querySelectorAll('.intro-social, .social').forEach(div => {
        div.innerHTML = socialContent;
    });

    // Actualizar el año actual dinámicamente
    document.getElementById('currentyear').textContent = new Date().getFullYear();

    // Actualizar la fecha de última modificación dinámicamente
    document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;
});