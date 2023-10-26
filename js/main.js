$(function () {
    var swiper = new Swiper(".mySwiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: true,
        },
    });//swiper-slide


    setTimeout(function () {
        $('.main .inner .title img').css({
            'transform': 'translateX(-50%) scale(1)',
        })
    }, 700);//smile표정




    let contactTop = $('.contact').offset().top;
    console.log(contactTop)

    $(window).scroll(function () {
        if ($(document).scrollTop() > 0) {
            $('header').addClass('on');
        } else {
            $('header').removeClass('on');
        }

        if ($(document).scrollTop() > 450) {
            $('#topBtn').fadeIn();
        } else {
            $('#topBtn').fadeOut();
        }

        console.log($(window).scrollTop())

        if ($(document).scrollTop() + 200 >= contactTop) {
            $('.kakao > img').css({
                'right': '0px',
                'opacity': '1',
                'transition': 'right 0.8s, opacity 0.5s 0.5s',
            });
        } else {
            $('.kakao > img').css({
                'right': '150px',
                'opacity': '0',
            });
        }
    });


    $("#topBtn").click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 400);
        return false;
    });


})//script end