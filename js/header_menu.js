$(document).ready(function () {
    //headerのスライドに合わせた表示
    window.addEventListener('scroll', fade_event);
    
    function fade_event(){
        const header = $('header');
        if (window.pageYOffset > 100) {
            header.addClass('scrolled-header');
        } else if (window.pageYOffset < 100) {
            header.removeClass('scrolled-header');
        }
    };

    fade_event();


    //navの開閉
    $('.trigger').click(function () {
        $(this).toggleClass('active');
        $('.triggerBg').fadeToggle();
        $('nav').toggleClass('open');
    })
    $('.triggerBg').click(function () {
        $(this).fadeOut();
        $('.drawerBt').removeClass('active');
        $('nav').removeClass('open');
    });

    })