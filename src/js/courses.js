const load = document.querySelector('.team__load')
const loadItem = document.querySelector('.team__items')

if(load){
    load.addEventListener('click',function(item){
        loadItem.classList.toggle('active')
    })
}

const filterBox = document.querySelectorAll('.team__item')
const filterLink = document.querySelector('.team__linkbox')

if(filterBox){
    filterLink.addEventListener('click',function(item){
        if(item.target.tagName !== 'A') return false;
        const filterClass = item.target.dataset['tab']
        filterBox.forEach(function(item){
            item.classList.remove('hide')
            if (!item.classList.contains(filterClass) && filterClass!== 'all'){
                item.classList.add('hide')
            }
        })
    })
}

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