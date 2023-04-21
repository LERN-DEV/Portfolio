/* ================ Toggle Icon Navbar ================ */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

/* ================ Scrool Sctions Active Link ================ */
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+ id +']').classList.add('active')
            });
        };
    });

    /* ================  Sticky Navbar ================ */
    let header = document.querySelector('header');

    header.classList.toggle('sticky',window.scrollY > 100);
    
    /* == Remove navbar whe click navbar link (scroll) == */
    menuIcon.classList.toggle('bx-x');
    navbar.classList.remove('active');
};

/* ================  Scroll Reveal ================ */
ScrollReveal({ 
    distance: '80px',
    duration: 900,
    delay: 80
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .portfolio-box', { origin: 'bottom' });



