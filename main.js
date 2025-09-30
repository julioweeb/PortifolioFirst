/*============================= alterar barra navegação ===============================*/

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active')
}

/*============================= scroll secttion ativar link ===============================*/

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id + ']').classList.add('active');
            });
        };
    });

 /*============================= barra de navegação fixa ===============================*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100); 

 /*============================= remover icone de alternância ===============================*/
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

 /*============================= scroll reveal ===============================*/
    ScrollReveal({ 
        distance: '80px',
        durantion: 2000,
        delay:200,
});

ScrollReveal().reveal('.home-content, heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .servicos-container, .portifolio-box, .contato form', { origin: 'buttom' });
ScrollReveal().reveal('.home-contato h1, .sobre-img', { origin: 'left' });
ScrollReveal().reveal('.home-contato p, .sobre-content', { origin: 'right' });

 /*============================= typed js ===============================*/

 const typed = new Typed('.multiple-text', {
    strings: [
    'Estudante', 
    'Desenvolvedor Backend', 
    'Programador C#',
    'Entusiasta',
    'Inovador'
    ],
        
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
 });


