try {
    function Burger() {
        const burger = document.querySelector('.burger')
        const crossBurger = document.querySelector('.cross_burger')
        const menuMobile = document.querySelector('.menu-mobile')
        const catalogMobile = document.querySelector('.catalog_mobile')
        const catalogListMenu = document.querySelector('.catalog_list_menu')

        burger.addEventListener('click', function() {
            this.classList.add('hide')
            crossBurger.classList.remove('hide')
            menuMobile.classList.add('open_menu')
        })

        crossBurger.addEventListener('click', function() {
            burger.classList.remove('hide')
            menuMobile.classList.remove('open_menu')
            this.classList.add('hide')
            catalogListMenu.classList.add('hide')
        })

        catalogMobile.addEventListener('click' , function () {
            catalogListMenu.classList.toggle('hide')
        })
    }
} catch (e) {
    console.log(e.message)
}

Burger()
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

const swiper_catalog = new Swiper(".swiper_catalog", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

const slider__reviews = new Swiper(".slider__reviews", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: ".swiper_reviews-pagination",
        clickable: true,
    },
});