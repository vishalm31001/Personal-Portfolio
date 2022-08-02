const options = {
    bottom: '100px',
    right: '32px',
    left: 'unset',
    time: '0.5s',
    mixColor: '#fff',
    backgroundColor: '#fff',
    buttonColorDark: '#100f2c',
    buttonColorLight: '#fff',
    saveInCookies: true,
    label: '😶‍🌫️',
    autoMatchOsTheme: true
  }

const darkmode = new Darkmode(options);
darkmode.showWidget();


$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Gamer", "Coder", "Developer", "Designer"],
        typeSpeed:100,
        backSpeed:65,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Gamer", "Coder", "Developer", "Designer"],
        typeSpeed: 100,
        backSpeed: 65,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

document.querySelector('.darkmode-toggle').addEventListener('click', e => {
    if(!e.target.classList.contains('darkmode-toggle--white')){ //Dark Mode
        document.querySelector('.title').style.color = '#000'

        document.querySelector('.skills .max-width .title').style.color = '#000'

        document.querySelector('.services .max-width .title').style.color = '#fff'

        document.querySelector('.teams .max-width .title').style.color = '#fff'

        document.querySelector('.contact .max-width .title').style.color = '#000'
    }else{ //Light Mode
        document.querySelector('.title').style.color = '#fff'
        
        document.querySelector('.skills .max-width .title').style.color = '#fff'

        document.querySelector('.services .max-width .title').style.color = '#000'

        document.querySelector('.teams .max-width .title').style.color = '#000'

        document.querySelector('.contact .max-width .title').style.color = '#fff'
    }
})