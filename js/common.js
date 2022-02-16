// 메뉴 버튼
var menuOpen = false;
$(".btn_menu").on("click", function(e){
    if(menuOpen == false) {
        $("body").addClass("not_scroll");
        $(this).addClass("active");
        $(".nav_area").addClass("active");
        $(".nav_list_box").delay(200).fadeIn(150);
        menuOpen = true;
    } else{
        $("body").removeClass("not_scroll");
        $(this).removeClass("active");
        $(".nav_area").removeClass("active");
        $(".nav_list_box").fadeOut(150);
        menuOpen = false;
    }
});

// 헤더 스크롤
var headerScroll = 0; 
var isScrollTop;
$(window).on("scroll", function(){
    isScrollTop =  $(window).scrollTop();
    // DOWN
    if(isScrollTop > headerScroll) {
        if(isScrollTop > 0){
            if($(window).scrollTop() > 100){
                gsap.to(("#header"), .7, {top:-120, ease:Power3.easeOut});
            }
        }
    }
    // UP
    if(isScrollTop < headerScroll) {
        if(isScrollTop != 0 && isScrollTop > 0){
            $("#header").addClass("scroll");
            gsap.to(("#header"), 1, {top:0, ease:Power3.easeOut});
        } else {
            $("#header").removeClass("scroll");
        }
    }
    headerScroll = isScrollTop;
});

$(window).on("load", function(){
    if($(window).scrollTop() > 100){
        gsap.to(("#header"), .7, {top:-120, ease:Power3.easeOut});
    }
});

$(document).ready(function () {
    // AOS 설정
    AOS.init({
        easing: "ease",
        duration: 1000,
        offset: 150,
        delay: 150,
        once: "false",
    });
});

// var ww = $(window).width();
// function menuFunc() {
//     $(".nav_list>li>a").click(function(e){
//         $(this).siblings($(".m_list")).toggleClass("on");
//         if(ww <= 1024) {
//             if(!$(this).hasClass("first")) {
//                 e.preventDefault();
//             }
//             $(this).siblings($(".m_list")).stop().slideDown();
//             $(this).parent().siblings().find(".m_list:visible").stop().slideUp();
//         } else {
//             if(!$(this).hasClass("first")) {
//                 e.unbind();
//             }
//         }
//     });
// }
// menuFunc();

// $(window).on('resize',function(){
//     ww = $(window).width();
//     if (ww <= 1024) {
//         $(".nav_list>li>.m_list").hide();
//     } else {
//         $(".nav_list>li>.m_list").show();
//     }
//     menuFunc();
// }); 
