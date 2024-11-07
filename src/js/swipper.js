const swiper = new Swiper('.swiper', {
  loop: true, // Зациклення слайдів
  autoplay: {
    delay: 3000, // Затримка між зміною слайдів у мілісекундах
    disableOnInteraction: false, // Продовжити прокрутку навіть після взаємодії
  },
  effect: 'fade', // Плавний перехід між слайдами
  fadeEffect: {
    crossFade: true,
  },
});
