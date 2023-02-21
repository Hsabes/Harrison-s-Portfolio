$(document).ready(function() {


    // CODE FOR ROTATING THE LAST WORD OF HTML TEXT

    // function rotateWords() {
    //     wordsArray = ['disc golfer.', 'cat dad.', 'guitarist.', 'developer.'];
    //     count = 0;
    //     setInterval(function () {
    //         count++;
    //         $('.shuffle').fadeOut(750, function () {
    //             $(this).text(wordsArray[count % wordsArray.length]).fadeIn(750);
    //         });
    //     }, 4000);
    // };

    // rotateWords()

    $(window).on('scroll', () => {
        $scroll = $(window).scrollTop();

        if ($scroll > 20) {
            $(".nav-wrap").addClass("shadow");
        } else {
            $(".nav-wrap").removeClass("shadow");
        }
    })

    const swiperDesc = new Swiper('.swiper', {
        simulateTouch: false,
        speed: 2000,
        autoplay: {
            delay: 4000,
        },
        slidesPerView: 1,
        loop: true,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
    });

})
