new Swiper('.image-slider', {
    spaceBetween: -45,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
});


const figcaptionView = document.querySelector('.view');
const figcaptionHide = document.querySelector('.hide');
const cardsContainer = document.querySelector('.slider__content');
const hiddenCard = cardsContainer.querySelector('.slider__content__card_hides');
const rotateImg = document.querySelector('.slider__footer__img');

figcaptionView.addEventListener('click', function() {
    figcaptionHide.classList.remove('hiddens');
    rotateImg.classList.add('rotate');
    figcaptionView.classList.add('hiddens');
    hiddenCard.classList.remove('hiddens');
    
}); 
figcaptionHide.addEventListener('click', function() {
        figcaptionHide.classList.add('hiddens'); 
        rotateImg.classList.remove('rotate');
        figcaptionView.classList.remove('hiddens');
        hiddenCard.classList.add('hiddens');
    });


