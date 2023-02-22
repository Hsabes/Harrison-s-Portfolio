$(document).ready(function() {

    $(window).on('scroll', () => {
        $scroll = $(window).scrollTop();

        if ($scroll > 0) {
            $(".nav-wrap").addClass("shadow");
        } else {
            $(".nav-wrap").removeClass("shadow");
        }
    })

    const swiperDesc = new Swiper('.swiper', {
        simulateTouch: false,
        speed: 2000,
        autoplay: {
            delay: 16000,
        },
        slidesPerView: 1,
        loop: true,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
    });

})
