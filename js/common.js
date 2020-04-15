$('.slider').slick({
    arrows: true,
    centerMode: true,
    centerPadding: '25px',
    slidesToShow: 3,
    infinite: true,
    nextArrow: '<div class="left"></div>',
    prevArrow: '<div class="right"></div>',
    responsive: [
      {
        breakpoint: 769,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '-35px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 330,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 2
        }
      }
    ]
  });

window.addEventListener('mousemove', function(e) {
  let x = e.clientX / window.innerWidth;
  let y = e.clientY / window.innerHeight;  
  let backG = $('.main__screen')[0];
  backG.style.backgroundPosition = x * 30 + '% ' + y * 30 + '%';
});

$('.nav__item').on('click', function() {
  $('html').animate({ 
      scrollTop: $('#' + this.id + '0').offset().top // прокручиваем страницу к требуемому элементу
  }, 500)
});

let menu = $('.menu')[0];

$('.button_adp').on('click', function() {
  if (menu.classList.contains('hidden')) {
    menu.classList.remove('hidden');
  } else {
    menu.classList.add('hidden');
  }
});