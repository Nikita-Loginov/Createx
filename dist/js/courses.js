const load=document.querySelector(".team__load"),loadItem=document.querySelector(".team__items");load&&load.addEventListener("click",(function(t){loadItem.classList.toggle("active")}));const filterBox=document.querySelectorAll(".team__item"),filterLink=document.querySelector(".team__linkbox");filterBox&&filterLink.addEventListener("click",(function(t){if("A"!==t.target.tagName)return!1;const e=t.target.dataset.tab;filterBox.forEach((function(t){t.classList.remove("hide"),t.classList.contains(e)||"all"===e||t.classList.add("hide")}))}));const swiperTestimonials=new Swiper(".testimonials__swiper",{loop:!0,slidesPerView:1,navigation:{nextEl:".testimonials-button-next",prevEl:".testimonials-button-prev"},pagination:{el:".pagination",clickable:!0}});