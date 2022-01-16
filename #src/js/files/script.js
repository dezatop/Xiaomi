

const swiper = new Swiper('.swiper', {
    slidesPerView: 4,
    initialSlide:0,
    speed: 400,
    spaceBetween: 30,
    navigation: {
        nextEl: ".popular_next",
        prevEl: ".popular_prev",
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 0,
            autoHeight: true,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1268: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    }
});

const swiperNew = new Swiper('.swiperNew', {
    slidesPerView: 4,
    initialSlide:0,
    speed: 400,
    spaceBetween: 30,
    navigation: {
        nextEl: ".new_next",
        prevEl: ".new_prev",
    },
});

const swiper_catalog = new Swiper('.swiper_catalog', {
    slidesPerView: 1,
    initialSlide:0,
    speed: 400,
    spaceBetween: 30,
});


window.addEventListener('resize', function(e) {
    if(e.target.innerWidth < 501)
    console.log(e.target.innerWidth)

})