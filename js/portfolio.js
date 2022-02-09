function showLayer() {
    $("body").addClass("not_scroll");
};
function hideLayer() {
    $("body").removeClass("not_scroll");
};
function hidePortfolio() {
    $(".port_item").removeClass("show");
};

// 카테고리 레이어 보기
$(".show_finance").click(function() {
    $(".cate_finance").fadeIn(300);
    showLayer();
});
$(".show_commerce").click(function() {
    $(".cate_commerce").fadeIn(300);
    showLayer();
});
$(".show_enterprise").click(function() {
    $(".cate_enterprise").fadeIn(300);
    showLayer();
});

// 포트폴리오 보기
$(".show_port").click(function() {
    var portIdx = $(this).parents("li").index();
    $(this).parents(".portfolio_layer").children(".port_area").fadeIn(300);
    $(this).parents(".cate_area").siblings(".port_area").find(".port_item").eq(portIdx).addClass("show");
});

// 목록 보기
$(".show_list").click(function() {
    $(this).parents(".port_area").fadeOut(300);
    hidePortfolio();
});

// 레이어 닫기
$(".portfolio_layer").each(function(){
    $(this).children(".close_layer").click(function() {
        $(this).parent(".portfolio_layer").fadeOut(300, function() {
            $(this).children(".port_area").hide();
        });
        hidePortfolio();
        hideLayer();
    });
});

// 레이어 스크롤 progress
$(".scroll_box").each(function(){
    $(this).scroll(function() {
        var currY = $(this).scrollTop();
        var postHeight = $(this).height();
        var scrollHeight = $(this).find($(".scroll_cnt")).height();
        var scrollPercent = (currY / (scrollHeight - postHeight)) * 100;
        $(this).parent().siblings($(".progress")).find($(".progress_bar")).css("width", scrollPercent +"%"  );
    });
});

// 클라이언트 모션
function cardFlip() {
    if( $(".clients_list").length > 0  ) { 
        TweenMax.set($(".card .back"), {rotationY:-180});

        $.each($(".clients_list .card"), function(i,element) {
            var frontCard = $(this).children(".front"),
                backCard = $(this).children(".back"),
                tl = new TimelineMax({paused:true});
            tl
                .to(frontCard, .5, {rotationY: 180})
                .to(backCard, .5, {rotationY: 0},0);

            element.animation = tl;

            $(this).hover(function(e) {
                backCard.addClass("show");
                $(this).siblings(".tolltip").addClass("over");
                tl.play();
            }, function() {
                $(this).siblings(".tolltip").removeClass("over");
                tl.reverse();
            });
        });
    }
}

$(document).ready(function () {
    cardFlip();

    // 클라이언트 더 보기
    $(".clients_list .card_box").slice(0, 18).show();
    $(".client_btn").click(function(e){
        e.preventDefault();
        $(".clients_list .card_box:hidden").slice(0, 18).fadeIn(500);
        if($(".clients_list .card_box:hidden").length == 0) {
            $(this).hide();
        };
    });
    
    // AOS 설정
    AOS.init({
        easing: "ease",
        duration: 1000,
        offset: 150,
        delay: 150,
        once: "false",
    });
});