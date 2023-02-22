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
            disableOnInteraction: false,
        },
        slidesPerView: 1,
        loop: true,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
    });

    function stopAnimation(){
        var el = document.querySelector('.underline');
        el.style.animation = 'none';
        el.style.animationDelay = 'none';
        el.offsetHeight; /* trigger reflow */
        el.style.animation = null; 
    }

    $(window).on('blur', function(){
        stopAnimation()
    }).on('resize', function(){
        stopAnimation()
    })


})
