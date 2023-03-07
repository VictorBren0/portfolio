$(document).ready(function(){
    $('.cabecalho-link li a').click(function() {
        $('.cabecalho-link li a').removeClass('active');
        $(this).addClass('active');
      });

     var typed = new Typed(".typing", {
         strings:["MOBILE", "BACK END", "FRONT END"],
         typeSpeed:100,
         backSpeed:60,
         loop:true
     });

});