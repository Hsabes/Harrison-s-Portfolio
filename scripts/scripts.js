$(document).ready(function() {


// CODE FOR ROTATING THE LAST WORD OF HTML TEXT

    function rotateWords() {
    wordsArray = ['disc golfer.', 'cat dad.', 'guitarist.', 'developer.'];
    count = 0;
    setInterval(function () {
        count++;
        $('.shuffle').fadeOut(750, function () {
        $(this).text(wordsArray[count % wordsArray.length]).fadeIn(750);
        });
    }, 4000);
    };
    rotateWords();

    const swiper = new Swiper('.swiper', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
          },
    });

})
