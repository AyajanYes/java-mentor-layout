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
