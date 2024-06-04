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