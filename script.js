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
        strings:["MOBILE", "BACK END", "FRONT END"],
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
  
  
  
  
  