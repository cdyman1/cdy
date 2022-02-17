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

// 공지 레이어 팝업
var getCookie = function (cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) != -1) return c.substring(name.length,c.length);
    }
    return "";
}

var setCookie = function (cname, cvalue, exdays) {
    var todayDate = new Date();
    todayDate.setTime(todayDate.getTime() + (exdays*24*60*60*1000));    
    var expires = "expires=" + todayDate.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

var popNoticeClose = function() {
    if($("input[name='chkbox']").is(":checked") == true){
        setCookie("close","Y",1);
    }
    $("#pop_notice").hide();
}

$(document).ready(function() {
    var cookiedata = document.cookie;
    if(cookiedata.indexOf("close=Y")<0) {
        $("#pop_notice").show();
    } else {
        $("#pop_notice").hide();
    }
    $(".close_notice").click(function() {
        popNoticeClose();
    });
});

// 레이어 팝업
function popShow(el) {
    $("body").addClass("not_scroll");
    $(el).fadeIn(250);
}

function popHide() {
    $("body").removeClass("not_scroll");
}

$(".pop_wrap .pop_close").on("click", function(){ // 레이어 닫기
    $(this).closest(".pop_wrap").fadeOut(250);
    popHide();
});


$(document).ready(function () {
    // AOS 설정
    AOS.init({
        easing: "ease",
        duration: 1000,
        offset: 150,
        delay: 150,
        once: true,
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
