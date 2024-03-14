$(document).ready(function () {
    $('.regular-heart').click(function (e) { 
        e.preventDefault();
   $(this).toggleClass('fas')
      ;
    });

  
     $('.show-menu').on('click',function (e) { 
          e.preventDefault();
    $('body').toggleClass('menu-show');
     });
 });