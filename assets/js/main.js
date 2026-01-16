$(document).ready(function(){
  
    // Expand gallery
    const slides = document.querySelectorAll('.slide');
    let active = document.querySelector('.slide.active');
  
    slides.forEach((slide) => {
    slide.onmouseover = () => {
        active.classList.remove('active');
        active = slide;
        slide.classList.add('active');
    }
    });



  // off canvas 1
  var caMenuWrap = $('.ca-mobile-menu-active > ul').clone();
  var caSideMenu = $('.ca-offcanvas-menu-1 nav');
  caSideMenu.append(caMenuWrap);
  if ($(caSideMenu).find('.sub-menu, .ca-mega-menu').length != 0) {
    $(caSideMenu).find('.sub-menu, .ca-mega-menu').parent().append('<button class="ca-menu-close"><i class="fas fa-chevron-right"></i></button>');
  }

  var sideMenuList = $('.ca-offcanvas-menu-1 nav > ul > li button.ca-menu-close, .tp-offcanvas-menu-1 nav > ul li.has-dropdown > a');
  $(sideMenuList).on('click', function (e) {
    console.log(e);
    e.preventDefault();F
    if (!($(this).parent().hasClass('active'))) {
      $(this).parent().addClass('active');
      $(this).siblings('.sub-menu, .ca-mega-menu').slideDown();
    } else {
      $(this).siblings('.sub-menu, .ca-mega-menu').slideUp();
      $(this).parent().removeClass('active');
    }
  });


  $(".ca-offcanvas-toogle").on('click', function(){
    $(".ca-offcanvas").addClass("ca-offcanvas-open");
    $(".ca-offcanvas-overlay").addClass("ca-offcanvas-overlay-open");
});

  $(".ca-offcanvas-close-toggle, .ca-offcanvas-overlay").on('click', function(){
    $(".ca-offcanvas").removeClass("ca-offcanvas-open");
    $(".ca-offcanvas-overlay").removeClass("ca-offcanvas-overlay-open");
});


// mobile menu 2
  var caMenuWrap2 = $('.ca-mobile-menu-active-2 > ul').clone();
  var caSideMenu2 = $('.ca-offcanvas-menu-2 nav');
  caSideMenu2.append(caMenuWrap2);
  if ($(caSideMenu2).find('.sub-menu, .ca-mega-menu').length != 0) {
    $(caSideMenu2).find('.sub-menu, .ca-mega-menu').parent().append('<button class="ca-menu-close2"><i class="fas fa-chevron-right"></i></button>');
  }

  var sideMenuList2 = $('.ca-offcanvas-menu-2 nav > ul > li button.ca-menu-close2, .tp-offcanvas-menu-1 nav > ul li.has-dropdown > a');
  $(sideMenuList2).on('click', function (e) {
    console.log(e);
    e.preventDefault();
    if (!($(this).parent().hasClass('active'))) {
      $(this).parent().addClass('active');
      $(this).siblings('.sub-menu, .ca-mega-menu').slideDown();
    } else {
      $(this).siblings('.sub-menu, .ca-mega-menu').slideUp();
      $(this).parent().removeClass('active');
    }
  });


  $(".ca-offcanvas-toogle").on('click', function(){
    $(".ca-offcanvas").addClass("ca-offcanvas-open");
    $(".ca-offcanvas-overlay").addClass("ca-offcanvas-overlay-open");
});

  $(".ca-offcanvas-close-toggle, .ca-offcanvas-overlay").on('click', function(){
    $(".ca-offcanvas").removeClass("ca-offcanvas-open");
    $(".ca-offcanvas-overlay").removeClass("ca-offcanvas-overlay-open");
});

// mobile menu 3
var caMenuWrap3 = $('.ca-mobile-menu-active-3 > ul').clone();
var caSideMenu3 = $('.ca-offcanvas-menu-3 nav');
caSideMenu3.append(caMenuWrap3);
if ($(caSideMenu3).find('.sub-menu, .ca-mega-menu').length != 0) {
  $(caSideMenu3).find('.sub-menu, .ca-mega-menu').parent().append('<button class="ca-menu-close3"><i class="fas fa-chevron-right"></i></button>');
}

var sideMenuList3 = $('.ca-offcanvas-menu-3 nav > ul > li button.ca-menu-close3, .tp-offcanvas-menu-1 nav > ul li.has-dropdown > a');
$(sideMenuList3).on('click', function (e) {
  console.log(e);
  e.preventDefault();
  if (!($(this).parent().hasClass('active'))) {
    $(this).parent().addClass('active');
    $(this).siblings('.sub-menu, .ca-mega-menu').slideDown();
  } else {
    $(this).siblings('.sub-menu, .ca-mega-menu').slideUp();
    $(this).parent().removeClass('active');
  }
});


$(".ca-offcanvas-toogle").on('click', function(){
  $(".ca-offcanvas").addClass("ca-offcanvas-open");
  $(".ca-offcanvas-overlay").addClass("ca-offcanvas-overlay-open");
});

$(".ca-offcanvas-close-toggle, .ca-offcanvas-overlay").on('click', function(){
  $(".ca-offcanvas").removeClass("ca-offcanvas-open");
  $(".ca-offcanvas-overlay").removeClass("ca-offcanvas-overlay-open");
});

// mobile menu 4
var caMenuWrap4 = $('.ca-mobile-menu-active-4 > ul').clone();
var caSideMenu4 = $('.ca-offcanvas-menu-4 nav');
caSideMenu4.append(caMenuWrap4);
if ($(caSideMenu4).find('.sub-menu, .ca-mega-menu').length != 0) {
  $(caSideMenu4).find('.sub-menu, .ca-mega-menu').parent().append('<button class="ca-menu-close4"><i class="fas fa-chevron-right"></i></button>');
}

var sideMenuList4 = $('.ca-offcanvas-menu-4 nav > ul > li button.ca-menu-close4, .tp-offcanvas-menu-1 nav > ul li.has-dropdown > a');
$(sideMenuList4).on('click', function (e) {
  console.log(e);
  e.preventDefault();
  if (!($(this).parent().hasClass('active'))) {
    $(this).parent().addClass('active');
    $(this).siblings('.sub-menu, .ca-mega-menu').slideDown();
  } else {
    $(this).siblings('.sub-menu, .ca-mega-menu').slideUp();
    $(this).parent().removeClass('active');
  }
});


$(".ca-offcanvas-toogle").on('click', function(){
  $(".ca-offcanvas").addClass("ca-offcanvas-open");
  $(".ca-offcanvas-overlay").addClass("ca-offcanvas-overlay-open");
});

$(".ca-offcanvas-close-toggle, .ca-offcanvas-overlay").on('click', function(){
  $(".ca-offcanvas").removeClass("ca-offcanvas-open");
  $(".ca-offcanvas-overlay").removeClass("ca-offcanvas-overlay-open");
});


    // stiky menu
    $(window).on('scroll',function(){
      var scroll = $ (window).scrollTop();
      if(scroll < 1){
        $(".stiky").removeClass("scroll-header");
      }else{
        $(".stiky").addClass("scroll-header");
      }
    });


  // scroll top 1
  $(window).on("scroll", function() {
    if ($(this).scrollTop() > 40) {
        $('#topBtn').fadeIn();
    } else {
        $('#topBtn').fadeOut();
    }
});

  $("#topBtn").on('click', function() {
    $('html, body').animate({ scrollTop: 0 }, 300);
});

// scroll top 2
$(window).on('scroll', function() {
  if ($(this).scrollTop() > 40) {
      $('#topBtn2').fadeIn();
  } else {
      $('#topBtn2').fadeOut();
  }
});


$("#topBtn2").on('click', function() {
  $('html, body').animate({scrollTop: 0}, 300);
});


// scroll top 3

$(window).on('scroll', function() {
  if ($(this).scrollTop() > 40) {
      $('#topBtn3').fadeIn();
  } else {
      $('#topBtn3').fadeOut();
  }
});


$("#topBtn3").on('click', function() {
  $('html, body').animate({scrollTop: 0}, 300);
});


  // scroll top 4

$(window).on('scroll', function() {
  if ($(this).scrollTop() > 40) {
      $('#topBtn4').fadeIn();
  } else {
      $('#topBtn4').fadeOut();
  }
});


$("#topBtn4").on('click', function() {
  $('html, body').animate({scrollTop: 0}, 300);
});







  // select
  $('select').niceSelect();

  // popup
  $('.popup-image').magnificPopup({
    type: 'image'
  });

  $('.popup-video').magnificPopup({
  type: 'iframe'
  });


  // counter UP
  $('.counter').counterUp({
      delay: 10,
      time: 1000
  });

  // Home 1 Slider 
$('.ca-hero1-active').slick({
  autoplay: true,
  draggable: true,
  arrows: false,
  dots: true,
  fade: true,
  speed: 3000,
  infinite: true,
  cssEase: 'ease',
  touchThreshold: 100,
  
});


// Home 1 testimonial
$('.slider-main').slick({
  slidesToShow: 1,
  arrows: false,
  asNavFor: '.sm-slider-nav',
  vertical: true,
  autoplay: true,
  verticalSwiping: true,
  dots:false
});

$('.sm-slider-nav').slick({
  slidesToShow: 3,
  asNavFor: '.slider-main',
  vertical: true,
  focusOnSelect: true,
  autoplay: true,
  arrows:false
});


// Home 2 slider 
$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav',
  autoplay:true,
  speed: 3000,
});

$('.slider-nav').slick({
  slidesToShow: 3,  
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: false,
  centerMode: true,
  focusOnSelect: true,
  vertical: true, 
  arrows: false, 
  verticalSwiping: true ,
  autoplay:true,
  speed: 3000,
});
    
// service2 slider
$('.ca-service-slier-2').slick({
  arrows: false,
  dots: true,
  centerMode: true,
  centerPadding: '0px',
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
});


// testimonial 2 
$('.ca-testimonial-2').slick({
  arrows:true,
  dots: false,
  centerMode: true,
  centerPadding: '0px',
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  prevArrow:'<span class="priv_arrow"><i class="fa-regular fa-arrow-right"></i></span>',
  nextArrow:'<span class="next_arrow"><i class="fa-regular fa-arrow-left"></i></span>',
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
});


// Slider 3 Active
$('.ca-slider-active-3').slick({ 
  arrows: false,
  dots: false,
  centerPadding: '0px',
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  prevArrow:'<span class="prev_arrow1"><i class="fa-regular fa-arrow-right"></i></span>',
  nextArrow:'<span class="next_arrow1"><i class="fa-regular fa-arrow-left"></i></span>',
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
});

// testimonial 3 
$('.ca-testimonial-3').slick({
  arrows:false,
  dots: true,
  centerPadding: '0px',
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
});


// testimonial 4
$('.ca-testimonials-4').slick({
  arrows:false,
  dots: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
});

// Services 4
$('.ca-services-4').slick({
  arrows:false,
  dots: true,
  centerMode: true,
  centerPadding: '0px',
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
});

// Brand logo Slider
$('.ca-brand-slides').slick({
  autoplay: true,
  autoplaySpeed: 0,
  speed: 5000,
  arrows: false,
  swipe: false,
  slidesToShow: 6,
  cssEase: 'linear',
  pauseOnFocus: false,
  pauseOnHover: false,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 4,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      }
    }
  ]
});
$('.ca-brand-slides-2').slick({
  autoplay: true,
  autoplaySpeed: 0,
  speed: 5000,
  arrows: false,
  swipe: false,
  slidesToShow: 6,
  cssEase: 'linear',
  pauseOnFocus: false,
  pauseOnHover: false,
  rtl: true,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 4,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      }
    }
  ]
});



  // aos
  AOS.init();
  AOS.init({disable: 'mobile'});



  	// preloader js
	function loader() {
		$(window).on('load', function () {
			$('#ctn-preloader').addClass('loaded');
			$("#loading").fadeOut(500);

			if ($('#ctn-preloader').hasClass('loaded')) {
				$('#preloader').delay(900).queue(function () {
					$(this).remove();
				});
			}
		});
	}
	loader();


  // form submit
  $(document).ready(function() {
    // Reset form validation on input
    $('input, textarea').on('input', function() {
      $(this).removeClass('is-invalid');
    });
    
    // Contact form submission
    $("#contactForm").on("submit", function(e){
      e.preventDefault();
      
      // Reset previous validation states
      $('.is-invalid').removeClass('is-invalid');
      
      // Get form elements
      const nameInput = $("#name");
      const messageInput = $("#message");
      
      // Validate required fields
      let isValid = true;
      
      if (!nameInput.val().trim()) {
        nameInput.addClass('is-invalid');
        isValid = false;
      }
      
      if (!messageInput.val().trim()) {
        messageInput.addClass('is-invalid');
        isValid = false;
      }
      
      // If form is not valid, stop here
      if (!isValid) {
        // Scroll to first invalid field
        $('html, body').animate({
          scrollTop: $('.is-invalid').first().offset().top - 100
        }, 500);
        return false;
      }
      
      // Get form values if valid
      let name = encodeURIComponent(nameInput.val().trim());
      let last_name = encodeURIComponent($("#last_name").val().trim());
      let phone = encodeURIComponent($("#phone").val().trim());
      let email = encodeURIComponent($("#email").val().trim());
      let msg = encodeURIComponent(messageInput.val().trim());
  
      // Build deep links with proper formatting
      const fullName = `${name} ${last_name}`.trim();
      const messageText = `Hi, my name is ${fullName}. I'm interested in your services.\n\nPhone: ${phone}\nEmail: ${email}\n\nMessage: ${msg}`;
      
      // Encode the message for URLs
      const encodedMessage = encodeURIComponent(messageText);
      
      // Build contact links
      const whatsappURL = `https://wa.me/17867928526?text=${encodedMessage}`;
      const smsURL = `sms:17867928526?body=${encodedMessage}`;
      const emailURL = `mailto:fifthwheelc@gmail.com?subject=New%20Contact%20Request&body=${encodedMessage}`;
  
      // Update modal links
      $("#whatsappLink").attr({
        href: whatsappURL,
        'data-name': 'WhatsApp',
        'data-category': 'Contact',
        'data-action': 'Click',
        'data-label': 'Contact Form WhatsApp'
      });
      
      $("#smsLink").attr({
        href: smsURL,
        'data-name': 'SMS',
        'data-category': 'Contact',
        'data-action': 'Click',
        'data-label': 'Contact Form SMS'
      });
      
      $("#emailLink").attr({
        href: emailURL,
        'data-name': 'Email',
        'data-category': 'Contact',
        'data-action': 'Click',
        'data-label': 'Contact Form Email'
      });
      
      // Show the modal
      const modal = document.getElementById('contactModal');
      modal.style.display = 'block';
      modal.style.opacity = '1';
      document.body.style.overflow = 'hidden';
    });
    
    // Close modal when clicking the close button
    $('.ca-close-modal').on('click', function() {
      const modal = document.getElementById('contactModal');
      modal.style.opacity = '0';
      setTimeout(() => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
      }, 300);
    });
    
    // Close modal when clicking outside the content
    $(window).on('click', function(e) {
      const modal = document.getElementById('contactModal');
      if (e.target === modal) {
        modal.style.opacity = '0';
        setTimeout(() => {
          modal.style.display = 'none';
          document.body.style.overflow = 'auto';
        }, 300);
      }
    });
  });

  function setupPromoModal(options) {
  var settings = $.extend({
    delayMs: 2000,
    showOncePerSession: false,
    autoOpen: true,
    overlay: '#promo-overlay',
    modal: '#promo-modal'
  }, options || {});
  var $overlay = $(settings.overlay);
  var $modal = $(settings.modal);
  if (!$overlay.length || !$modal.length) {
    return { open: $.noop, close: $.noop, destroy: $.noop };
  }
  var lastFocused = null;
  var TRANSITION_MS = 250;
  function open() {
    if (settings.showOncePerSession && sessionStorage.getItem('promo_shown')) return;
    sessionStorage.setItem('promo_shown', '1');
    lastFocused = document.activeElement;
    $overlay.removeAttr('hidden');
    $modal.removeAttr('hidden');
    // force reflow to enable CSS transitions
    void $overlay[0].offsetHeight;
    void $modal[0].offsetHeight;
    $overlay.addClass('open');
    $modal.addClass('open');
    var $focusTarget = $modal.find('.promo-cta').first();
    if (!$focusTarget.length) $focusTarget = $modal.find('.promo-close').first();
    if ($focusTarget.length) $focusTarget.trigger('focus');
  }
  function close() {
    $overlay.removeClass('open');
    $modal.removeClass('open');
    setTimeout(function () {
      $overlay.attr('hidden', 'hidden');
      $modal.attr('hidden', 'hidden');
      if (lastFocused && lastFocused.focus) lastFocused.focus();
    }, TRANSITION_MS);
  }
  function outsideClick(e) {
    if (e.target === $overlay[0]) close();
  }
  function keyHandler(e) {
    if (e.key === 'Escape' || e.keyCode === 27) close();
  }
  function bind() {
    $overlay.on('click.promo', outsideClick);
    $modal.on('click.promo', '.promo-close', close);
    $(document).on('keydown.promo', keyHandler);
  }
  function unbind() {
    $overlay.off('.promo');
    $modal.off('.promo');
    $(document).off('.promo');
  }
  bind();
  if (settings.autoOpen) setTimeout(open, settings.delayMs);
  return { open: open, close: close, destroy: unbind };
}

  // Promo modal
  var promo = setupPromoModal({
    delayMs: 2000,
    showOncePerSession: false,
    overlay: '#promo-overlay',
    modal: '#promo-modal'
  });
  
});


