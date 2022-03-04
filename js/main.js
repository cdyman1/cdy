gsap.registerPlugin(ScrollTrigger);
// 비디오 스크롤 영역
gsap.to(".video_value", {
    scrollTrigger: {
        trigger: ".video_value",
        // markers: true,
        start: "top top",
        endTrigger : ".info_value_list",
        end: "bottom bottom",
        scrub: 1,
        pin: true,
    }
});

gsap.to(".cnt_pin", {
    scrollTrigger: {
        trigger: ".info_text",
        // markers: true,
        start: "top 160px",
        endTrigger : ".info_value_list li:last-child .text",
        end: "top 160px",
        scrub: 1,
        pin: true,
    }
});

gsap.to(".video_value", {
    scrollTrigger: {
        trigger: ".info_value_list .respons",
        // markers: true,
        start: "top 250px",
        end: "bottom bottom",
        onUpdate: function(self){
            $("#movie_respons").fadeIn(100);
            $("#movie_value").fadeOut(200);
            $("#movie_trendy").fadeOut(200);
        },
    }
});
gsap.to(".video_value", {
    scrollTrigger: {
        trigger: ".info_value_list .value",
        // markers: true,
        start: "top 250px",
        end: "bottom bottom",
        onUpdate: function(self){
            $("#movie_respons").fadeOut(200);
            $("#movie_value").fadeIn(100);
            $("#movie_trendy").fadeOut(200);
        },
    }
});
gsap.to(".video_value", {
    scrollTrigger: {
        trigger: ".info_value_list .trendy",
        // markers: true,
        start: "top 250px",
        end: "bottom bottom",
        onUpdate: function(self){
            $("#movie_respons").fadeOut(200);
            $("#movie_value").fadeOut(200);
            $("#movie_trendy").fadeIn(100);
        },
    }
});

$(document).ready(function(){
    $(".visual_slider .swiper-slide video").get(0).play();
  });

// 비주얼 슬라이드
// var visualSlide = new Swiper(".visual_slider", {
//     slidesPerView : 1,
//     speed : 2000,
//     loop: true,
//     allowTouchMove: false,
//     effect: "fade",
//     fadeEffect: {
//         crossFade: true
//     },
//     pagination: {
//         el: ".visual_slider .visual_paging",
//         clickable: true,
//         type: "bullets",
//     },
//     on : {
//         slideChangeTransitionStart: function(){
//             if($(".visual_slider .swiper-slide-active video").length != 0){
//                 $(".visual_slider .swiper-slide").not(".swiper-slide-active, swiper-slide-duplicate-active").find("video").get(0).pause();
//                 $(".visual_slider .swiper-slide-active video").get(0).currentTime = 0;
//                 setTimeout(function() {
//                     $(".visual_slider .swiper-slide-active video").get(0).play();
//                 }, 800);
//             }
//         },
//     }
// });

// 포트폴리오 슬라이드
var visualSlide = new Swiper(".portfolio_slide", {
    slidesPerView : 1,
    loop: true,
    // loopedSlides: 2,
    pagination: {
        el: ".portfolio_slide .port_paging",
        clickable: true,
        type: "progressbar",
    },
});

// 클라이언트
function cardFlip() {
    if( $(".client_list").length > 0  ) { 
        TweenMax.set($(".card .back"), {rotationY:-180});

        $.each($(".client_list .card"), function(i,element) {
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
});