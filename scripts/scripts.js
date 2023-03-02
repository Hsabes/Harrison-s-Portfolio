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
        }, 20000);
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
        }, 20000);
    }
    
    rotateDesc()
    
    $(window).on('scroll', () => { // Applies nav bar styling when user navigates beyond hero
        return $(window).scrollTop() > 10 ? $(".nav-wrap").addClass("shadow") : $(".nav-wrap").removeClass("shadow");
    })

    function isUpOrDown(element){ // Adjusts scroll speed if use goes up or down
        return element.hasClass('arrow-up') ? 1000 : 2000;
    }
    
    function animateScroll(){
        // ARROWS
        $(".to-grid").on('click', function() { // ANY DIRECTION ARROW THAT GOES TO SKILLS
            $('.hero, .projects-sect, .contact-sect').animate({ // FADE OUT ANYTHING THAT ISN'T SKILLS
                opacity: 0,
            }, 500)
            $('.skills-grid').css({ // SHOW SKILLS GRID
                opacity: 100,
            });
            $('html,body').animate({ // SCROLL TO SKILLS
                scrollTop: $(".skills-grid").offset().top
            }, isUpOrDown($(this)));
        });
        $(".to-projects").on('click', function() { // ANY DIRECTION ARROW THAT GOES TO PROJECTS
            $('.skills-grid, .contact-sect, .hero').animate({ // FADE OUT ANYTHING THAT ISNT PROJECTS
                opacity: 0,
            }, 500)
            $('.projects-sect').css({ // SHOW PROJECTS
                opacity: 100,
            });
            $('html,body').animate({ // SCROLL TO PROJECTS
                scrollTop: $(".projects-sect").offset().top
            }, isUpOrDown($(this)));
        });
        $(".to-intro").on('click', function() { // ANY DIRECTION ARROW THAT GOES TO INTRO
            $('.skills-grid, .projects-sect, .contact-sect').animate({ // FADE OUT ANYTHING THAT ISNT HERO SECTION
                opacity: 0,
            }, 500);
            $('.hero').css({ // SHOW HERO
                opacity: 100,
            });
            $('html,body').animate({ // SCROLL TO HERO
                scrollTop: $(".navigation").offset().top
            }, isUpOrDown($(this)));
        });
        $(".to-contact").on('click', function() { // ANY DIRECTION ARROW THAT GOES TO CONTACT
            $('.skills-grid, .projects-sect, .hero').animate({ // FADE OUT ANYTHING THAT ISNT CONTACT SECTION
                opacity: 0,
            }, 500);
            $('.contact-sect').css({ // SHOW CONTACT
                opacity: 100,
            });
            $('html,body').animate({ // SCROLL TO CONTACT
                scrollTop: $(".contact-sect").offset().top
            }, isUpOrDown($(this)));
        });

        // NAVIGATION ITEMS
        $(".about-me").on('click', function() { // GO TO ABOUT ME
            $('.skills-grid, .projects-sect, .contact-sect').animate({ // FADE OUT EVERYTHING THAT ISNT THE HERO
                opacity: 0,
            }, 250);
            $('.hero').css({ // SHOW HERO
                opacity: 100,
            })
            $('html,body').animate({ // SCROLL TO HERO
                scrollTop: $("body").offset().top
            }, 750);
        });
        $(".skills").on('click', function() { // GO TO SKILLS
            $('.hero, .projects-sect, .contact-sect').animate({ // FADE OUT EVERYTHING THAT ISNT SKILLS
                opacity: 0,
            }, 250);
            $('.skills-grid').css({ // SHOW SKILLS GRID
                opacity: 100,
            });
            $('html,body').animate({ // SCROLL TO SKILLS GRID
                scrollTop: $(".skills-grid").offset().top
            }, 750);
        });
        $(".projects").on('click', function() { // GO TO PROJECTS SECTION
            $('.hero, .skills-grid, .contact-sect').animate({ // FADE OUT EVERYTHING THAT ISN'T PROJECTS SECTION
                opacity: 0,
            }, 250);
            $('.projects-sect').css({ // SHOW PROJECTS SECTION
                opacity: 100,
            })
            $('html,body').animate({ // SCROLL TO HERO SECTION
                scrollTop: $(".projects-sect").offset().top
            }, 750);
        });
        $(".contact").on('click', function() { // GO TO CONTACT SECTION
            $('.hero, .skills-grid, .projects-sect').animate({ // FADE OUT EVERYTHING THAT ISN'T CONTACT SECTION
                opacity: 0,
            }, 250);
            $('.contact-sect').css({ // SHOW CONTACT SECTION
                opacity: 100,
            })
            $('html,body').animate({ // SCROLL TO CONTACT SECTION
                scrollTop: $(".contact-sect").offset().top
            }, 750);
        });
    };
    
    animateScroll()
    
    function animateNavLines(){
        $('.lines').on('click', () => {
            $('.one').toggleClass("rotatePos");
            $('.two').toggleClass("rotateNeg");
            $('.three').fadeToggle(200);
        });
    };
    
    animateNavLines()
    
    function hideElements(bucketTarget, buckets){
    
        // Hides all boxes, ignoring the box that was clicked
        let bucketsToHide = buckets.filter((bucket) => buckets.indexOf(bucket) !== buckets.indexOf(bucketTarget));
        
        bucketsToHide.map((bucket) => {
            return bucket.style.display = 'none';
        })
    
        // Variables for styling target box elements
        let targetImg = bucketTarget.children[0];
        let targetContainer = bucketTarget.children[1];
        let targetChildren = Array.from(targetContainer.children);
    
        // Styles the target box
        bucketTarget.style.cssText = 'width: 100%; height: 292px; background-color: #fff; cursor: default;';
        targetImg.style.display = 'none'; // Original image
        targetContainer.style.display = 'block'; // Container for the title/desc/exit
        setTimeout(() => {
            targetChildren.map((element) => {
                element.style.opacity = '100'; // Sets opacity of title/desc/exit
            })
        }, 500)
    
        function resetGrid(bucketTarget, targetImg, targetContainer, targetChildren, bucketsToHide, e){
            e?.stopPropagation(); // Prevents event bubbling, optional chaining for up-arrow click
    
            // Reset styling of target and other buckets
            bucketTarget.style.cssText = '';
            targetImg.style.display = '';
            targetContainer.style.display = '';
            targetChildren.map((element) => {
                element.style.opacity = '0';
            })
    
            bucketsToHide.map((bucket) => {
                bucket.style.cssText = '';
                bucket.style.opacity = '0';
                setTimeout(() => {
                    bucket.style.cssText = 'opacity: 100; transition: box-shadow .5s, opacity 1s;'; // Delay and transition bucket appearance
                }, 500);
            });
    
        }
    
        targetContainer.children[2].addEventListener('click', (e) => { // On exit click
            resetGrid(bucketTarget, targetImg, targetContainer, targetChildren, bucketsToHide, e)
        });
    
        $('.to-projects, .to-intro').on('click', () => { // On arrow click
            setTimeout(() => {
                resetGrid(bucketTarget, targetImg, targetContainer, targetChildren, bucketsToHide)
            }, 1000);
        });
    
    };
    
    function showDetails(){
        let buckets = Array.from($('.bucket'));
        buckets.map((bucket) => {
            bucket.addEventListener('click', () => {
                return hideElements(bucket, buckets);
            });
        });
    };
    
    showDetails();
    
    });