$(document).ready(function() {

    // CODE FOR ROTATING THE LAST WORD OF HTML TEXT
  function rotateTitle() {
    let wordsArray = ['problem solver.', 'disc golfer.', 'guitarist.', 'cat dad.', 'developer.'];
    let count = 0;
    setInterval(function () {
      count++;
      $('.shuffle-title').fadeOut(800, function () {
        $(this).text(wordsArray[(count - 1) % wordsArray.length]).fadeIn(800);
      });
    }, 20000);
  };

  rotateTitle();

  function rotateDesc(){
    let wordsArray = [
        "When I'm not working, I spend a fair amount of my free time either solving Kata on CodeWars or writing some of my own. I do this so I'm constantly improving my ability to write creative custom code for unique problems.",
        "In summer of 2022 my friend got me hooked on disc golfing. It's an incredible sport that facilitates social interaction, excercise, and an appreciation for the beauty of nature. My future plan is to travel the world and play some of the most famous courses around the globe.",
        '3Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, est ipsa quibusdam cupiditate corrupti earum corporis eius accusantium doloribus. Exercitationem dignissimos veritatis recusandae repellendus ad!',
        '4Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, est ipsa quibusdam cupiditate corrupti earum corporis eius accusantium doloribus. Exercitationem dignissimos veritatis recusandae repellendus ad!',
        "I started coding in May of 2022 when I started studying at Flatiron School's Software Engineering program. I have a passion for finding creative solutions and I consistently exercise this passion through algorithms and project building. View my resume below."
    ];
    let count = 0;
    setInterval(function () {
      count++;
      $('.shuffle-desc').fadeOut(800, function () {
        $(this).text(wordsArray[(count - 1) % wordsArray.length]).fadeIn(800);
      });
    }, 20000);
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
    //   $(".to-grid").animate({ // FADE OUT DOWN ARROW
    //     opacity: 0
    //   }, 1000)
    //   $(".to-intro").css({ // FADE IN UP ARROW
    //     opacity: 100
    //   })
      $('.skills-grid').css({
        opacity: 100,
      })
      $('.hero').animate({ // FADE OUT HERO SECTION
        opacity: 0,
      }, 500)
      $('html,body').animate({ // SCROLL DOWN TO GRID
        scrollTop: $(".skills-grid").offset().top
      }, 1500);
    });
    $(".to-intro").on('click', function() { // ON UP ARROW CLICK
    //   $(".to-intro").animate({ // FADE OUT UP ARROW
    //     opacity: 0
    //   }, 1000)
    //   $(".to-grid").css({ // FADE IN DOWN ARROW
    //     opacity: 100
    //   })
      $('.skills-grid').animate({
        opacity: 0,
      }, 500)
      $('.hero').css({ // FADE IN HERO SECTION
        opacity: 100,
      })
      $('html,body').animate({ // SCROLL UP TO NAV
        scrollTop: $(".navigation").offset().top
      }, 1500);
    });

  }

  animateScroll()

})