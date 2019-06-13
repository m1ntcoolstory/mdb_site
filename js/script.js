$(document).ready(function () {

    // Carousel
    $('.owl-carousel').owlCarousel({
        items: 1,
        autoplay: 7000,
        loop: true
    });

    /* // Sticky nav
    $(window).scroll(function(){
        var y = $(document).scrollTop();
        if (y < 200) $('.navbar').removeClass('fix');
        else $('.navbar').addClass('fix');
    }); */

    // Anchor
    $('a[href^="#"]').on('click', function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top - 200 }, 900);
    });

});