$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
     $('.scroll-up-btn').click(function(){
         $('html').animate({scrollTop: 0});
     });

     var typed = new Typed(".typing", {
        strings:["MOBILE", "FRONT END"],
         typeSpeed:100,
         backSpeed:60,
         loop:true
     });

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    $('.carousel').owlCarousel({
        margin:20,
        loop:true,
        autoplayTimeOut:2000,
        autoplayHoverPauser:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:false
            }
        }
    });
});
$(document).ready(function() {

    $('.navbar .menu li:first-child a').addClass('active');

    var currentLocation = window.location.href;
    $('.navbar .menu li a').each(function() {
      if ($(this).attr('href') === currentLocation) {
        $(this).addClass('active');
      }
    });
    
    $('.navbar .menu li a').on('click', function(e) {
      e.preventDefault();
      var target = $(this).data('target');
      $('.navbar .menu li a').removeClass('active');
      $(this).addClass('active');
      $('html, body').animate({
        scrollTop: $('#' + target).offset().top
      }, 500);
    });
  });
  
  window.onload = function() {
    window.scrollTo(0, 0);
  };
  
  $(document).ready(function() {
    // Aplica a classe 'hidden' a todos os elementos que desejam esconder inicialmente
    $('.scroll-up-btn, .navbar, .home-content, .about-content, .content-card, .container-icons').addClass('hidden');
    
    // Configuração dos waypoints para os elementos com a classe .hidden
    $('.hidden').waypoint({
        handler: function() {
            $(this.element).addClass('visible');
        },
        offset: '85%' // A classe 'visible' será adicionada quando o elemento estiver a 85% do topo do viewport
    });
});


const projectsData = [
    { id: 1, name: "EletroMais", link: "https://www.eletromaisaju.com.br/", image: "project1" },
    { id: 2, name: "PetNassau", link: "https://petnassau.victorbreno.dev/", image: "project2" },
    { id: 3, name: "CobyBot", link: "https://www.cobybot.com/", image: "project3" },
    { id: 4, name: "PlayGames", link: "https://playgame.victorbreno.dev/", image: "project4" },
    { id: 5, name: "Recicleiros GAME", link: "https://recicleiros.victorbreno.dev/", image: "project5" },
    { id: 6, name: "Bem Familia APP", link: "https://play.google.com/store/search?q=bem%20familia&c=apps", image: "project6" },
    { id: 7, name: "Atos Capital APP", link: "https://play.google.com/store/search?q=atos%20capital&c=apps", image: "project7" }
];

// Container onde os projetos serão adicionados
const carousel = document.querySelector('.carousel');

// Função para criar um elemento de conteúdo do projeto
function createProjectCard(project) {
    const contentCard = document.createElement('div');
    contentCard.classList.add('content-card');

    const img = document.createElement('img');
    img.src = `image/${project.image}.png`;
    img.alt = project.name + " Logo";

    const infoItem = document.createElement('div');
    infoItem.classList.add('info-item');

    const link1 = document.createElement('a');
    link1.href = project.link;
    link1.target = '_blank';

    const button1 = document.createElement('button');
    button1.classList.add('button-card1');
    button1.textContent = 'Ver Site';

    link1.appendChild(button1);

    infoItem.appendChild(link1);

    const title = document.createElement('h3');
    title.classList.add('title-card');
    title.textContent = project.name;

    contentCard.appendChild(img);
    contentCard.appendChild(infoItem);
    contentCard.appendChild(title);

    return contentCard;
}

// Iterar sobre os dados do projeto e adicionar ao carousel
projectsData.forEach(project => {
    const projectCard = createProjectCard(project);
    carousel.appendChild(projectCard);
});
  
  
  
  
  