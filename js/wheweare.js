const reveal = gsap.utils.toArray('.reveal');
reveal.forEach((text, i) => {
    ScrollTrigger.create({
        trigger: text,
        toggleClass: 'active',
        start: "top 50%",
        end: "bottom -20%",
        markers: false,
    })
})




var historySlider = new Swiper('.history_item .swiper-container', {
    normalizeSlideIndex: false,
    slidesPerView: 4,
    spaceBetween: 20,
    navigation: {
        nextEl: '.history_item .next',
        prevEl: '.history_item .prev',
    },
    breakpoints: {
        1024: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
    },
    on: {
        slideChangeTransitionStart: function () {
            let tabEl =document.querySelectorAll('.history_tabs .tab');
            let currentTabText = document.querySelector('.history_tabs .tab.active').innerText;
            let historyDataNum = document.querySelector('.swiper-slide-active').dataset.history;

            if(currentTabText != historyDataNum) {
                tabRemoveActive();
                for(let i=0; i<tabEl.length; i++) {
                    if(tabEl[i].innerText == historyDataNum) {
                        tabEl[i].classList.add('active');
                    }
                }
            }            
        },
    }, 
});

let tabs = document.querySelectorAll('.tab');
for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', (e) => {
        let historyDataNum = document.querySelector('.swiper-slide-active').dataset.history;
        tabRemoveActive();
        e.target.classList.add('active');
        // slide move
        if(e.target.innerText != historyDataNum) {
            let historySlideArr = document.querySelectorAll('.history_box .swiper-slide');
            let tabActive = document.querySelector('.tab.active');
            historySlideArr.forEach(function(item, index){
                if(item.dataset.history == tabActive.innerText && item.classList.contains('first')) {  
                    historySlider.slideTo(index);
                }
            })
        }
    });
}

function tabRemoveActive() {
    let tabActive = document.querySelector('.tab.active');
    if (tabActive !== null) tabActive.classList.remove('active');
}

var lastSlide = $(".history_m .swiper-slide").length;
// alert((lastSlide-1));

var historyMobileSlider = new Swiper('.history_m', {
    direction: "vertical",
    autoHeight: true,
    slidesPerView: 1,
    navigation: {
        nextEl: '.control_btn_m .next',
        prevEl: '.control_btn_m .prev',
    },
    on: {
        init:function(){
            setSlideHeight(this);
          },
          slideChangeTransitionEnd:function(){
            setSlideHeight(this);
          },
        activeIndexChange : function() {
            if (this.realIndex == 0) {
                $('.control_btn_m .prev').css("display","none");
                $('.control_btn_m .next').css("display","inline-block");
            } else if(this.realIndex > 0 && (this.realIndex+1) < lastSlide) {
                $('.control_btn_m .prev').css("display","inline-block");
                $('.control_btn_m .next').css("display","inline-block");
            } else {
                $('.control_btn_m .prev').css("display","inline-block");
                $('.control_btn_m .next').hide();
            }
          },
        // reachBeginning: function () {
        //     $('.control_btn_m .next').show();
        //     $('.control_btn_m .prev').hide();
        // },
        // reachEnd: function () {
        //     $('.control_btn_m .next').hide();
        //     $('.control_btn_m .prev').show();
        // }
    },
    breakpoints: {
        1024: {
        },
    },
});

function setSlideHeight(that){
    $('.history_m .swiper-slide').css({height:'auto'});
        var currentSlide = that.activeIndex;
        var newHeight = $(that.slides[currentSlide]).height();

        $('.history_m .swiper-wrapper,.history_m .swiper-slide').css({ height : newHeight })
        that.update();
   }


var browserWidth = $(window).outerWidth();
var mySwiper = undefined;

function initSwiper() {

  if (browserWidth < 1024 && mySwiper == undefined) {
    mySwiper = new Swiper(".ci_dec_slide", {
      slidesPerView: 1.5,
      spaceBetween: 60,
    });
  } else if (browserWidth >= 1024 && mySwiper != undefined) {
    mySwiper.destroy();
    mySwiper = undefined;
  }
}

initSwiper();

$(window).on('resize', function () {
    browserWidth = $(window).width();
  initSwiper();
});
