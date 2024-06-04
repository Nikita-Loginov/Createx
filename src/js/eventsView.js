const toolbatBtn = document.querySelectorAll('.toolbat__view-buttom')
const eventsCard = document.querySelector('.events-card')

toolbatBtn.forEach(function(item){
    item.addEventListener('click',function(e){
        currentBtn = item.dataset['view']
        eventsCard.dataset.temp = currentBtn;
        toolbatBtn.forEach(function(item){
            item.classList.remove('active')
        })
        item.classList.add('active')
    })
})