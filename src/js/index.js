const tabsLink = document.querySelectorAll('.benefits__link')
const tabsItem = document.querySelectorAll('.benefits__item')

tabsLink.forEach(function(item){
    item.addEventListener('click',function(e){
        const currentItemLink = item;
        const tabId = currentItemLink.getAttribute('data-tab');
        const currentItem = document.querySelector(tabId)
        tabsLink.forEach(function(item){
            item.classList.remove('active')
        })
        tabsItem.forEach(function(item){
            item.classList.remove('active')
        })
        item.classList.add('active')
        currentItem.classList.add('active')
    })
})


const swiper = new Swiper('.teamCarousel__swiper', {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 30,
    navigation: {
        nextEl: '.button-next',
        prevEl: '.button-prev',
    },
});

const swiperTestimonials = new Swiper('.testimonials__swiper', {
    loop: true,
    slidesPerView: 1,
    navigation: {
        nextEl: '.testimonials-button-next',
        prevEl: '.testimonials-button-prev',
    },
    pagination: {
        el: '.pagination',
        clickable: true,
    },
});