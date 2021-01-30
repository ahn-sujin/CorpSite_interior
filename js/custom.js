$(function(){

    var win_w = $(window).width();
    $(window).on('resize',function(){
        win_w = $(this).width();
    });

/*----------visual-------------------------------------------------------*/
    $('#gnb>li').on('mouseenter',function(){
        $(this).children('.sub_wrap').stop(true,true).slideDown();
    });

    $('#gnb>li').on('mouseleave',function(){
        $(this).children('.sub_wrap').stop(true,true).slideUp();
    });

/*----------visual-------------------------------------------------------*/
    var mySwiper = new Swiper('#visual .swiper-container', {
        loop: true,
        pagination: {
            el: '#visual .swiper-pagination',
            type: 'fraction',
        },
        navigation: {
            nextEl: '#visual .swiper-button-next',
            prevEl: '#visual .swiper-button-prev',
        },

    });

/*----------char-------------------------------------------------------*/
    $("#char .box , #service .box ").on('mouseenter',function(){
        $(".cardRotate").addClass("backRotate").removeClass("cardRotate");
        $(this).addClass("cardRotate").removeClass("backRotate");
    });

    $("#char .box , #service .box  ").on('mouseleave',function(){
        $(this).addClass("backRotate").removeClass("cardRotate");
    });

/*----------project-------------------------------------------------------*/    
    $("#project .box").on('mouseenter',function(){
        $(this).addClass("on");
    });
    $("#project .box").on('mouseleave',function(){
        $(this).removeClass("on");
    });

/*----------review-------------------------------------------------------*/        
    var swiper = new Swiper('#review .swiper-container', {
        slidesPerView: 5,
        spaceBetween: 0,
        slidesPerGroup: 1,
        loop: true,
        pagination: {
        el: '.swiper-pagination',
        clickable: true,
        },

        autoplay: {
            delay: 2000,
        },

    });

    $('#review .swiper-slide .down').on('mouseenter',function(){
        $(this).addClass("on");
    });
    $('#review .swiper-slide .down').on('mouseleave',function(){
        $(this).removeClass("on");
    });




});