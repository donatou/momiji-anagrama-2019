$(document).ready(() => {

  // CARGAR MODULOS
  // $("header").load("_header.html");
  // $("#mb-menu").load("_mobile.html");
  // $("footer").load("_footer.html");
  // $("#modal-search").load("_search.html");
  // $("#categorias").load("_categorias.html");
  // $("#modal-resena").load("_resena.html");

  // ACCORDION
  let i,
    acc = document.getElementsByClassName('accordion');
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener('click', function() {
      this.classList.toggle('active');
      const t = this.nextElementSibling;
      $(t).toggleClass('active');
      t.style.maxHeight ? t.style.maxHeight = null : t.style.maxHeight = `${t.scrollHeight}px`;
    });
  }

  // PRIVACIDAD
  // $(".legal aside li").click(function() {
  //    var buttonId = Number($(this).attr("id"));
  //    $('.legal aside li').removeClass("active");
  //    $(this).addClass("active");
  //    $(".legal__item").hide();
  //    $(".legal__item[data-id="+buttonId+"]").fadeIn();
  // });

  // MODAL GLOSARIO
  $('.legal ul.columns li').click(function() {
    const buttonId = Number($(this).attr('id'));
    $('.modal').hide();
    $(`.modal[data-info=${buttonId}]`).fadeIn();
  });

  $('body').on('click touchstart', '#close', () => {
    $('.legal .modal, .modal__newsletter, .filter__modal').fadeOut();
  });

  // MODALES
  $('body').on('click', 'a[data-modal]', function() {
    const name = $(this).data('modal');
    MicroModal.show(`modal-${name}`, {
      awaitCloseAnimation: true,
      onShow: (modal) => console.info(`${modal.id} is shown`),
      onClose: (modal) => console.info(`${modal.id} is hidden`),
    });
  });

  // BOTON MOVIL
  $('body').on('click', '.mobile-btn', () => {
    $('.mobile-btn').addClass('is-open');
    $('.mobile-menu').addClass('is-open');
    $('body').css('overflow', 'hidden');
  });

  $('body').on('click', '.mobile-menu #close', () => {
    $('.mobile-btn').removeClass('is-open');
    $('.mobile-menu').removeClass('is-open');
    $('body').css('overflow', 'auto');
  });

  $('body').on('click', '.mobile-menu li.accordion', function() {
    $(this).toggleClass('open');
  });

  $('body').on('click', 'li.accordion-item', function() {
    const buttonId = ($(this).attr('data-id'));
    $('.accordion-items--second').hide();
    $(`.accordion-items--second[data-info=${buttonId}]`).fadeIn();
  });

  $('body').on('click', '.accordion-items--second', () => {
    $('.accordion-items--second').fadeOut();
  });


  // HEADER SCROLL
  if ($(window).width() >= 0) {
    let lastScrollTop = 0;

    $(window).on('scroll', function() {

      scrollPosition = $(this).scrollTop();

      if (scrollPosition < lastScrollTop) {
        // Do something on scroll up
        if (scrollPosition <= $('header').height() + 50) {
          $('header').removeClass('fixed');
          $('#modal-search').removeClass('fixed');
        }
      } else {
        // Do something on scroll down
        if (scrollPosition > $('header').height() + 50) {
          $('header').addClass('fixed');
          $('#modal-search').addClass('fixed');
        }

      }
      lastScrollTop = scrollPosition;
    });
  }

  // HEADER SUBMENUS
  $('body').on('mouseover', '.header__nav--menu li.nav-item--cat', function() {
    $(this).addClass('active');
    $('header').addClass('active');
  });

  $('body').on('mouseout', '.header__nav--menu li', function() {
    $(this).removeClass('active');
    $('header').removeClass('active');
  });


  // SVG HOME
  if ($(window).width() >= 991) {

    $('body').on('mouseover', 'svg g#ilustracion-nueva g:not(#Stroke-48, #Stroke-50)', function() {
      $(this).addClass('active');
      const hoverProduct = ($(this).attr('id'));
      console.log(hoverProduct);
      $(`.img__info[data-info=${hoverProduct}]`).show();
    });

    $('body').on('mouseout', 'svg g#ilustracion-nueva g:not(#Stroke-48, #Stroke-50)', function() {
      $(this).removeClass('active');
      const hoverProduct = ($(this).attr('id'));
      $(`.img__info[data-info=${hoverProduct}]`).hide();
    });

  } else {

    $('svg g#ilustracion-nueva g:not(#Stroke-48, #Stroke-50)').click(function() {
      $('svg g#ilustracion-nueva g:not(#Stroke-48, #Stroke-50)').removeClass('active');
      $(this).toggleClass('active');
      const hoverProduct = ($(this).attr('id'));
      console.log(hoverProduct);
      $('.img__info').hide();
      $(`.img__info[data-info=${hoverProduct}]`).toggle();
    });
  }


  // SKIN TYPE INFO
  if ($(window).width() <= 991) {
    $('.skin--type .btn__more').click(function() {
      $('.skin--type').removeClass('active');
      $(this).closest('.skin--type').toggleClass('active');
    });
  }

  // SUCURSAL INFO
  if ($(window).width() <= 991) {
    $('.sucursal .btn__more').click(function() {
      $('.sucursal').removeClass('active');
      $(this).closest('.sucursal').toggleClass('active');
    });
  }

  // CART CANTIDAD
  (function() {

    window.inputNumber = function(el) {

      const min = el.attr('min') || false;
      const max = el.attr('max') || false;

      const els = {};

      els.dec = el.prev();
      els.inc = el.next();

      el.each(function() {
        init($(this));
      });

      function init(el) {

        els.dec.on('click', decrement);
        els.inc.on('click', increment);

        function decrement() {
          let value = el[0].value;
          value--;
          if (!min || value >= min) {
            el[0].value = value;
          }
        }

        function increment() {
          let value = el[0].value;
          value++;
          if (!max || value <= max) {
            el[0].value = value++;
          }
        }
      }
    };
  })();

  inputNumber($('.input-number'));


  // PRODUCTS MOBILE FILTERS

  $('.filter__categoria').click(() => {
    $('.filter__modal.filtr').fadeIn();
  });

  $('body').on('click', '.filter__modal .filters .filters__item', function() {
    const filterCategory = ($(this).attr('data-info'));
    $(`.filter__modal .modulo--sub[data-id=${filterCategory}]`).fadeIn();
  });

  $('body').on('click', '.filter__modal .modulo--sub .apply', () => {
    $('.modulo--sub').fadeOut();
  });

  $('body').on('click', '.filter__modal .aplicar', () => {
    $('.filter__modal').fadeOut();
  });

  $('body').on('click', '.filter__modal .modulo--sub .subfilters .subfilters__item', function() {
    if ($(this).hasClass('selected')) {
      $(this).removeClass('selected');
    } else {
      $(this).addClass('selected');
    }
  });

  $('body').on('click', '.filter__modal .modulo--sub .deseleccionar', function() {
    const filterSelected = $(this).closest('.modulo--sub').attr('data-id');
    console.log(filterSelected);
    $('.filter__modal .subfilters .subfilters__item').removeClass('selected');
    $(`.filter__modal .filters .col-12 > div[data-info=${filterSelected}] .filter__applied`).empty();
  });

  $('body').on('click', '.filter__modal .deseleccionar', () => {
    $('.filter__modal .filters .filter__applied').empty();
    $('.filter__modal .subfilters .subfilters__item').removeClass('selected');
  });

  // VALIDACIÓN
  $('form input').blur(function() {
    const e = this.nextElementSibling;
    if (!$(this).val()) {
      $(this).addClass('error').val('')
        .css('border-color', 'red');
      $(e).addClass('active');
    }
  });
  $('form input').focus(function() {
    const e = this.nextElementSibling;
    if (!$(this).is('error')) {
      $(this).removeClass('error').css('border-color', 'black');
      $(e).removeClass('active');
    }
  });

  // SLIDER INIT POR SLIDER PRESENTE
  if ($('.hero__slider .swiper-slide').length > 1) {
    const mySwiper = new Swiper('.hero__slider .swiper-container', {
      loop: true,
      direction: 'horizontal',
      effect: 'fade',
      slidesPerView: '1',
      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet(index, className) {
          return `<span class="${className}">${index + 1}</span>`;
        },
      },
      autoplay: {
        delay: 4000,
        reverseDirection: true,
      },
    });
  }
});


// PRODUCTS
(function() {


  const breakpoint = window.matchMedia('(max-width:767px)');
  let swiper;

  const breakpointChecker = function() {

    if (breakpoint.matches === true) {
      if (swiper !== undefined) { swiper.destroy(true, true); }

    } else if (breakpoint.matches === false) {
      return enableSwiper();
    }
  };

  const enableSwiper = function() {

    const swiper = new Swiper('.products__slider .swiper-container', {
      loop: true,
      direction: 'horizontal',
      effect: 'slide',
      slidesPerView: 'auto',
      spaceBetween: 0,
      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      autoplay: {
        delay: 4000,
        reverseDirection: true,
      },
    });

  };


  breakpoint.addListener(breakpointChecker);
  breakpointChecker();

})();


$(window).on('load', () => {

  // SELECTTRIC
  $(() => {
    $('select:not(#Option1)').selectric({
      maxHeight: 200,
    });
  });

  // LOADER
  //   $('.loader-component').delay(700 10).fadeOut(700 50);
  $('.loader-component').delay(10).fadeOut(50);
  $('main').css({
    opacity: 1,
  });
});

// //DETALLE DE PRODUCTO
$(document).ready(() => {

  const galleryThumbs = new Swiper('.gallery-thumbs', {
    direction: 'vertical',
    spaceBetween: 10,
    slidesPerView: 5,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    breakpoints: {
      991: {
        direction: 'horizontal',
      },
    },
  });

  const galleryTop = new Swiper('.gallery-top', {
    direction: 'vertical',
    spaceBetween: 10,
    breakpoints: {
      991: {
        spaceBetween: 0,
        direction: 'horizontal',
      },
    },
    thumbs: {
      swiper: galleryThumbs,
    },
  });

});


// +++ IMAGE REVEAL
// VIEWPORT CHECK +++
$(window).on('load resize scroll', () => {
  $.fn.isInViewport = function() {
    const elementTop = $(this).offset().top;
    const elementBottom = elementTop + $(this).outerHeight();

    const viewportTop = $(window).scrollTop();
    const viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
  };

  $('img').each(function() {
    if ($(this).isInViewport()) {
      $(this).addClass('loaded');
    } else {
      event.preventDefault();
    }
  });
});

// AGREGAR EFECTOS DE ON SCROLL
// $(window).on('load', function () {
//   $('h1, h2, h3, h4, span,  p, a:not(.product), b ').addClass('element');
//   $('.element').attr('data-aos', 'fade-in-up');
//   $('.element').attr('data-aos-offset', '-50');
//   $('.element').attr('data-aos-once', 'true');
//   AOS.init();
// });


$(window).on('load', () => {
  // LOADER
  const height = $(window).height();
  let intervalId = null;
  let i = 1;
  const varName = function() {
    if (i <= 200) {
      const random1 = Math.floor(Math.random() * height) + 1;
      const random2 = Math.floor(Math.random() * 100) + 1;
      const itemCount = ($("[id^='item-']").length + 1);
      const element = $(`<div class='bubble' id='item-${itemCount}' />`);

      $('.loader-component').append(element);
      $(`#item-${i}`).css('margin-top', `${random1}px`);
      $(`#item-${i}`).css('margin-left', `${random2}%`);
      i++;

    } else {
      clearInterval(intervalId);
    }
  };

  $(document).ready(() => {
    intervalId = setInterval(varName, 70);
  });
});

// SORT-BY de /snippets/collection-sorting.liquid
const $sorter = $('.js-collection-sort');
let sortBy = false;

if (window.location.search.length) {
  sortBy = new URLSearchParams(window.location.search).get('sort_by');
}

// preserve current selection
// set sort value to present query
if (sortBy) {
  $sorter.val(sortBy);
}

$sorter.on('change', (e) => {
  const {value} = e.currentTarget;

  window.location = `?sort_by=${value}`;
});

// FALTA un sort-by que aplique para VENDOR
// EYESHINE JS
const image = document.getElementsByClassName('thumbnail');
new simpleParallax(image, {
  overflow: true,
});

$('#load-ingredients').click(function() {
  $(this).toggleClass('active');
  $('.ingredientes__item:nth-child(n+4)').fadeToggle();
  $(this).text((i, text) => {
    return text === 'ver menos ingredientes' ? 'ver m�s ingredientes' : 'ver menos ingredientes';
  });
});

let child4 = $('.sticker-item'),
  parent = $('.section__content');

Draggable.create(child4, {
  type: 'x, y',
});

