$(document).ready(function() {

    // CODE FOR ROTATING THE LAST WORD OF HTML TEXT
  function rotateTitle() {
    let titleArray = ["I'm a problem solver.", "I'm a disc golfer.", "I'm a guitarist.", "I'm a cat dad.", "I'm a developer"];
    let count = 0;
    setInterval(function () {
      count++;
      $('.shuffle-title').fadeOut(800, function () {
        $(this).text(titleArray[(count - 1) % titleArray.length]).fadeIn(800);
      });
    }, 2000);
  };

  rotateTitle();

function rotateDesc(){
    let descArray = [
        "When I'm not working or doing things in my spare time, I spend a fair amount of my free time either solving Kata on CodeWars or writing some of my own. I do this so I can consistently improve on my ability to write creative custom code for unique problems.",
        "Currently my favorite hobby is to disc golf. It's an incredible sport that facilitates social interaction, exercise, and an appreciation for the beauty of nature. My future plan is to travel the world and play some of the most famous courses around the globe.",
        "I have a bachelors degree in Guitar from Berklee College of Music and have been playing the guitar since elementary school. My favorite genres to listen to are EDM, blues, and instrumental rock and I love playing BB King style blues on my Fender Strat.",
        "I have a standard issue cat named Smitty who is currently four years old and has never done anything or anyone wrong. He loves playing with his wand toys, crinkling plastic (particularly at 3AM), and crab walking as an attempt to intimidate the vacuum cleaner.",
        "I started coding in May of 2022 when I started studying at Flatiron School's Software Engineering program. I have a passion for finding creative solutions and I consistently exercise this passion through algorithms and project building. View my resume below."
    ];
    let count = 0;
    setInterval(function () {
        count++;
        $('.shuffle-desc').fadeOut(800, function () {
            $(this).text(descArray[(count - 1) % descArray.length]).fadeIn(800);
        });
    }, 2000);
}

rotateDesc()

$(window).on('scroll', () => {
    $scroll = $(window).scrollTop();

    if ($scroll > 0) {
        $(".nav-wrap").addClass("shadow");
    } else {
        $(".nav-wrap").removeClass("shadow");
    }
})

$(window).on('scroll', () => {
    $scroll = $(window).scrollTop();

    if ($scroll > 0) {
        $(".nav-wrap").addClass("shadow");
    } else {
        $(".nav-wrap").removeClass("shadow");
    }
})

function animateScroll(){
    $(".to-grid").on('click', function() { // ON DOWN ARROW CLICK
        $('.hero').animate({ // FADE OUT HERO SECTION
            opacity: 0,
        }, 500)
        $('.skills-grid').css({ // SHOW SKILLS GRID
            opacity: 100,
        })
        $('html,body').animate({ // SCROLL DOWN TO GRID
            scrollTop: $(".skills-grid").offset().top
        }, 2000);
    });
    $(".to-intro").on('click', function() { // ON UP ARROW CLICK
        $('.hero').css({ // FADE IN HERO SECTION
            opacity: 100,
        })
        $('.skills-grid').animate({ // FADE OUT SKILLS GRID
            opacity: 0,
        }, 500)
        $('html,body').animate({ // SCROLL UP TO NAV
            scrollTop: $(".navigation").offset().top
        }, 2000);
    });
    $(".about-me").on('click', function() { // ON UP ARROW CLICK
        $('.hero').css({ // FADE IN HERO SECTION
            opacity: 100,
        })
        $('html,body').animate({ // SCROLL UP TO NAV
            scrollTop: $(".hero").offset().top
        }, 750);
    });
    $(".skills").on('click', function() { // ON UP ARROW CLICK
        $('.skills-grid').css({ // FADE IN HERO SECTION
            opacity: 100,
        })
        $('html,body').animate({ // SCROLL UP TO NAV
            scrollTop: $(".skills-grid").offset().top
        }, 750);
    });

  }

  animateScroll()

})