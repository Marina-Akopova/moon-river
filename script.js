// Бургер

window.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.burger').addEventListener('click', function () {
    document.querySelector('.menu__open').classList.toggle('menu-is-open')
  })
})


// Карта

ymaps.ready(init);

function init() {
  var myMap = new ymaps.Map("map", {
    center: [55.768055568978525, 37.6000015],
    zoom: 12
  });

  myMap.controls.remove('largeMapDefaultSet');
  myMap.controls.remove('fullscreenControl');

}



// Слайдер

const swiper = new Swiper('.swiper', {
  // Optional parameters
  slidesPerView: 'auto',
  centeredSlides: true,
  spaceBetween: 25,
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});