(function ($) {
    "use strict";

    jQuery(document).ready(function ($) {

        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });

        $(function(){
            $('.main-menu').slicknav();
        });
       
        $('.welcome-slider-wrap-class').owlCarousel({
            items: 1,
            margin: 30,
            loop: false,
            dots: false,
            nav: false,
            navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
            autoplay: false,
            smartSpeed: 500,
            animateOut: "fadeOut"
        });
        
    });

     /******** mobile menu  ********/
     $('.icon span').click(function(){
        $('.mobile-menu').addClass('active');
    });

    $('.close-icon span').click(function(){
         $('.mobile-menu').removeClass('active');
    });

   

     /*==============================
            BOTTOM SCROLL TOP BUTTON
        ================================*/ 
        var scrollTop = $(".scrollTop");
        $(window).scroll(function() {
            var topPos = $(this).scrollTop();
            if (topPos > 100) {
              $(scrollTop).css("opacity", "1");

            } else {
              $(scrollTop).css("opacity", "0");
            }

        });
        $(scrollTop).on('click', function() {
            $('html, body').animate({
                scrollTop: 0
            }, 800);
            return false;
        });

})(jQuery);