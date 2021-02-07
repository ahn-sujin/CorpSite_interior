$(function(){

    var win_w = $(window).width();
    $(window).on('resize',function(){
        win_w = $(this).width();
    });

    $('a[href="#"]').click(function(e) {
        e.preventDefault();
    });

/*----------scroll motion-------------------------------------------------------*/
    var last = 0;
    var sec_pos = [];
    var base_line = -500;

    $('section').each(function(){
        var this_offset = $(this).offset().top;
        sec_pos.push(this_offset);
    });

    last = $('section').last().offset().top + $('section').last().height();
    sec_pos.push(last);

    $(window).on('scroll',function(){
        var scroll = $(this).scrollTop();
        var page = $('.page_start');
        var pageOffsetTop = page.offset().top;

        $('section').each(function(index){
            if(scroll >= sec_pos[index] + base_line && scroll < sec_pos[index+1]){
                $('section').eq(index).addClass('on');
            }   
        });

        if($(window).scrollTop() >= pageOffsetTop ){
            $('header , #gnb').addClass('on');
        }else{
            $('header , #gnb').removeClass('on');
        }

    });

/*----------gnb-------------------------------------------------------*/
    if(win_w > 980){
        $('.sub_wrap').removeAttr('style');
        $('.sub_menu_depth').removeAttr('style');
    }


    $('#gnb>li').on('mouseenter',function(){
        if(win_w > 980){
            $(this).children('.sub_wrap').stop(true,true).slideDown();
        } else{
            $('#gnb>li>a').off('click');
            $('#gnb>li>a').on('click',function(){
                $('sub_wrap').stop().slideUp();
                $(this).next('.sub_wrap').stop().slideToggle();
            });
            $('.sub_menu>li>a').off('click');
            $('.sub_menu>li>a').on('click',function(){
                $('.sub_menu_depth').stop().slideUp();
                $(this).next('.sub_menu_depth').stop().slideToggle();
            });
        }   
        
    });

    $('#gnb>li').on('mouseleave',function(){
        if(win_w > 980){
            $(this).children('.sub_wrap').stop(true,true).slideUp();
        }
        
    });

    $('.more').on('click',function(){
        $('.nav_wrap, .more , .cancle').addClass('on');
    });
    $('.cancle').on('click',function(){
        $('.nav_wrap, .more , .cancle').removeClass('on');
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
/*----------CardRotate-------------------------------------------------------*/
    $("#char .box , #service .box, #service_detail .right .box ").on('mouseenter',function(){
        $(".cardRotate").addClass("backRotate").removeClass("cardRotate");
        $(this).addClass("cardRotate").removeClass("backRotate");
    });

    $("#char .box , #service .box , #service_detail .right .box ").on('mouseleave',function(){
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
        slidesPerView: 1,
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

        breakpoints: {

            640: {
            slidesPerView: 2,
            spaceBetween: 0,
            slidesPerGroup: 1,
            },

            768: {
            slidesPerView: 3,
            spaceBetween: 0,
            slidesPerGroup: 1,
            },

            980: {
            slidesPerView: 3,
            spaceBetween: 0,
            slidesPerGroup: 1,
            },

            1200: {
            slidesPerView: 5,
            spaceBetween: 0,
            slidesPerGroup: 1,
            },
        }



    });

    $('#review .swiper-slide .down').on('mouseenter',function(){
        $(this).addClass("on");
    });
    $('#review .swiper-slide .down').on('mouseleave',function(){
        $(this).removeClass("on");
    });

/*---------tab_menu------------------------------------------------------*/
    $('#service_detail .tab_menu .menu>li').on('click',function(){
        var i = $(this).index();

        $(this).addClass('on').siblings().removeClass('on');
        $('#service_detail .tab_menu .tab_pannel').addClass('on');
        $('#service_detail .tab_menu .tab_pannel>li').eq(i).fadeIn().siblings().fadeOut();
    });

    $('#service_detail .tab_menu .menu>li').first().trigger('click');




});