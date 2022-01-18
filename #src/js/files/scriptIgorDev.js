let unlock = true;

//Menu
/*let iconMenu = document.querySelector(".icon-menu");
if (iconMenu != null) {
    let delay = 500;
    let menuBody = document.querySelector(".menu__body");
    iconMenu.addEventListener("click", function (e) {
        if (unlock) {
            body_lock(delay);
            iconMenu.classList.toggle("_active");
            menuBody.classList.toggle("_active");
        }
    });
}
;

function menu_close() {
    let iconMenu = document.querySelector(".icon-menu");
    let menuBody = document.querySelector(".menu__body");
    iconMenu.classList.remove("_active");
    menuBody.classList.remove("_active");
}*/

//Header Button
/*
const headerButton = document.querySelector(".header__button")
let hbutton = headerButton.cloneNode(true);
let meNuBody = document.querySelector(".menu__body");
if (window.innerWidth <= 991.98) {
    hbutton.classList.add('_active')
    meNuBody.append(hbutton)
} else {
    hbutton.classList.remove('_active')
    hbutton.remove()
}
window.addEventListener('resize', ButtonHeader)

function ButtonHeader() {
    if (window.innerWidth <= 991.98) {
        hbutton.classList.add('_active')
        meNuBody.append(hbutton)
    } else {
        hbutton.classList.remove('_active')
        hbutton.remove()
    }
}
*/

//=================
//BodyLock
function body_lock(delay) {
    let body = document.querySelector("body");
    if (body.classList.contains('_lock')) {
        body_lock_remove(delay);
    } else {
        body_lock_add(delay);
    }
}

function body_lock_remove(delay) {
    let body = document.querySelector("body");
    if (unlock) {
        let lock_padding = document.querySelectorAll("._lp");
        setTimeout(() => {
            for (let index = 0; index < lock_padding.length; index++) {
                const el = lock_padding[index];
                el.style.paddingRight = '0px';
            }
            body.style.paddingRight = '0px';
            body.classList.remove("_lock");
        }, delay);

        unlock = false;
        setTimeout(function () {
            unlock = true;
        }, delay);
    }
}

function body_lock_add(delay) {
    let body = document.querySelector("body");
    if (unlock) {
        let lock_padding = document.querySelectorAll("._lp");
        for (let index = 0; index < lock_padding.length; index++) {
            const el = lock_padding[index];
            el.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
        }
        body.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
        body.classList.add("_lock");

        unlock = false;
        setTimeout(function () {
            unlock = true;
        }, delay);
    }
}

//DigiFormat
function digi(str) {
    var r = str.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ");
    return r;
}

//=================
//Popups

let popup_link = document.querySelectorAll('._popup-link');
let popups = document.querySelectorAll('.popup');

for (let index = 0; index < popup_link.length; index++) {
    const el = popup_link[index];
    el.addEventListener('click', function (e) {
        if (unlock) {
            let item = el.getAttribute('href').replace('#', '');
            let video = el.getAttribute('data-video');
            popup_open(item, video);
        }
        e.preventDefault();
    })
}
for (let index = 0; index < popups.length; index++) {
    const popup = popups[index];
    popup.addEventListener("click", function (e) {
        if (!e.target.closest('.popup__body')) {
            popup_close(e.target.closest('.popup'));
        }
    });
}

function popup_open(item, video = '') {
    let activePopup = document.querySelectorAll('.popup._active');
    if (activePopup.length > 0) {
        popup_close('', false);
    }
    let curent_popup = document.querySelector('.popup_' + item);
    if (curent_popup && unlock) {
        if (video != '' && video != null) {
            let popup_video = document.querySelector('.popup_video');
            popup_video.querySelector('.popup__video').innerHTML = '<iframe src="https://www.youtube.com/embed/' + video + '?autoplay=1"  allow="autoplay; encrypted-media" allowfullscreen></iframe>';
        }
        if (!document.querySelector('.menu__body._active')) {
            body_lock_add(500);
        }
        curent_popup.classList.add('_active');
        history.pushState('', '', '#' + item);
    }
}

function popup_close(item, bodyUnlock = true) {
    if (unlock) {
        if (!item) {
            for (let index = 0; index < popups.length; index++) {
                const popup = popups[index];
                let video = popup.querySelector('.popup__video');
                if (video) {
                    video.innerHTML = '';
                }
                popup.classList.remove('_active');
            }
        } else {
            let video = item.querySelector('.popup__video');
            if (video) {
                video.innerHTML = '';
            }
            item.classList.remove('_active');
        }
        if (!document.querySelector('.menu__body._active') && bodyUnlock) {
            body_lock_remove(500);
        }
        history.pushState('', '', window.location.href.split('#')[0]);
    }
}

let popup_close_icon = document.querySelectorAll('.popup__close,._popup-close');
if (popup_close_icon) {
    for (let index = 0; index < popup_close_icon.length; index++) {
        const el = popup_close_icon[index];
        el.addEventListener('click', function () {
            popup_close(el.closest('.popup'));
        })
    }
}
document.addEventListener('keydown', function (e) {
    if (e.code === 'Escape') {
        popup_close();
    }
});
//=================

//RemoveClasses

function _removeClasses(el, class_name) {
    for (var i = 0; i < el.length; i++) {
        el[i].classList.remove(class_name);
    }
}

//=================

//button +/-
let price_count=document.querySelectorAll('.product-block__price-count')

price_count.forEach((el=>{
    let minus_= el.querySelector('.buttonCountMinus')
    let plus_= el.querySelector('.buttonCountPlus')
    let count= el.querySelector('.buttonCountNumber')

    plus_.onclick = function() {
        count.innerHTML++;
        if(minus_.classList.contains('color')){
            minus_.classList.remove('color')
        }
    }

    minus_.onclick = function() {
        let countMinus = count.innerHTML;
        if(+countMinus >= 2){
            count.innerHTML--;
        }
        if(countMinus==2){
            minus_.classList.add('color')
        }
    }
}))

//=================

//ProductOnDay slider

new Swiper('.productOnDaySwiper', {
    slidesPerView: 1,
    speed: 400,
    spaceBetween: 600,
    pagination: {
        el: ".productOnDaySwiper__swiper-pagination",
        clickable: true
    },
});

//footer select-link

const footer__lists=document.querySelectorAll('.footer__list')

footer__lists.forEach((el)=>{
    el.addEventListener('click',()=>{
        if( el.classList.contains('active')){
            el.classList.remove('active')
        }else{
            el.classList.add('active')
        }
    })
})

// Инициализация превью слайдера
const sliderThumbs = new Swiper('.slider__thumbs .swiper-container', {
    direction: 'horizontal',
    slidesPerView: 5,
    spaceBetween: 10,
    freeMode: true,
});
// Инициализация слайдера изображений
const sliderImages = new Swiper('.slider__images .swiper-container', {
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 32,
    mousewheel: true,
    grabCursor: true,
    thumbs: {
        swiper: sliderThumbs
    },

});


const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active')
        })
        tabs.forEach(tab => {
            tab.classList.remove('active')
        })
        tab.classList.add('active')
        target.classList.add('active')
    })
})