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

const accordeonBtn = document.querySelectorAll('.accordeon__box')
const accordeonAnswer = document.querySelectorAll('.accordeon__answer')

if(accordeonBtn){
    accordeonBtn.forEach(function(item){
        item.addEventListener('click',function(e){
            accordeonBtn.forEach(function(item){
                item.classList.remove('active')
            })
            item.classList.add('active')
        })
        
    })
}

const swiper = new Swiper('.relatedCourses__swiper', {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 30,
    navigation: {
        nextEl: '.button-next',
        prevEl: '.button-prev',
    },
});
