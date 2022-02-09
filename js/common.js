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