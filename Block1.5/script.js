var showMore = document.querySelector('.main__show-more-block');
var hide = document.querySelector('.main__hide-block');
var hiddenBlock = document.querySelectorAll('.hidden');

hide.classList.add('hidden');

showMore.addEventListener('click', function(evt) {
    evt.preventDefault();
    for(var i = 0; i < hiddenBlock.length; i++) {
        hiddenBlock[i].classList.remove('hidden');
        showMore.classList.add('hidden');
        hide.classList.remove('hidden');
    }
});

hide.addEventListener('click', function(evt) {
    evt.preventDefault();
    for(var i = 0; i < hiddenBlock.length; i++) {
        hiddenBlock[i].classList.add('hidden');
        showMore.classList.remove('hidden');
        hide.classList.add('hidden');
    }
});

var mySwiper = undefined;
        function initSwiper() {
            var screenWidth = $(window).width();
            if(screenWidth < 321 && mySwiper == undefined) {            
                mySwiper = new Swiper('.swiper-container', {            
                    slidesPerView: 'auto',
                    spaceBetween: 16,
                    centeredSlides: false,
                    grabCursor: true,
                    loop: true,
                    pagination: {
                        el: ".swiper-pagination",
                        clickable: true,
                    },
                });
            } else if (screenWidth > 320 && mySwiper != undefined) {
                mySwiper.destroy();
                mySwiper = undefined;
                jQuery('.swiper-wrapper').removeAttr('style');
                jQuery('.swiper-slide').removeAttr('style');            
            }        
        }
        initSwiper();

        $(window).on('resize', function(){
            initSwiper();        
        });
