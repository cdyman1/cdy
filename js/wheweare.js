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
