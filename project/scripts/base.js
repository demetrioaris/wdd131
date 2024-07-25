document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menu');
    const navigation = document.querySelector('.navigation');

    menuButton.addEventListener('click', () => {
        menuButton.classList.toggle('open');
        navigation.classList.toggle('open');
    });

    // Select all <a> elements inside .navigation
    const navLinks = document.querySelectorAll('.navigation a');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Remove 'active' class from all links
            navLinks.forEach(nav => nav.classList.remove('active'));
            // Add 'active' class to the clicked link
            e.target.classList.add('active');
        });
    });

    const socialContent = `
        <a href="https://github.com/demetrioaris" target="_blank" title="GitHub"><img
                class="icon github-logo" src="../project/images/logos/github-mark-white.png"
                alt="GitHub icon" /></a>
        <a href="https://x.com/demetrio_aris" target="_blank" title="X"><img class="icon x-logo"
                src="../project/images/logos/logo-x-version-white.png" alt="X logo" /></a>
        <a href="https://www.linkedin.com/in/demetrio-aris" target="_blank" title="LinkedIn"><img
                class="icon linkedin-logo" src="../project/images/logos/linkedin-logo-white.png"
                alt="LinkedIn icon" /></a>
    `;

    document.querySelectorAll('.intro-social, .social').forEach(div => {
        div.innerHTML = socialContent;
    });

    document.getElementById('currentyear').textContent = new Date().getFullYear();

    document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;
});
