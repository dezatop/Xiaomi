console.log(111111111)
const swiper = new Swiper('.swiper', {
    slidesPerView: 4,
    initialSlide:0,
    speed: 400,
    spaceBetween: 30,
    navigation: {
        nextEl: ".custom_next_button",
        prevEl: ".custom_prev_button",
    },
});
