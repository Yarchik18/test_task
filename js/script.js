// Burger Functional
const burger = document?.querySelector('.header__burger');
const nav = document?.querySelector('.navbar');
const navItems = nav?.querySelectorAll('a');

burger?.addEventListener('click', () => {
    burger?.classList.toggle('header__burger_active');
    nav?.classList.toggle('navbar_active');
    $('header').toggleClass('header_active');
    $('body').toggleClass('body_lock');
});

navItems.forEach(el => {
    el.addEventListener('click', () => {
        burger?.classList.remove('header__burger_active');
        nav?.classList.remove('navbar_active')
        $('body').toggleClass('body_lock');
        $('header').toggleClass('header_active');
    });
});

//Scroll to link
var scroll = new SmoothScroll('.nav-link', {
    speed: 1000,
    offset: 50
});

//AJAX send
$(document).ready(function() {
    $('#registrationForm').submit(function(e) {
        e.preventDefault();
        var formData = $(this).serialize();
        $.ajax({
            method: 'post',
            url: 'server.php', 
            dataType: 'html',
            data: formData,
            success: function(response) {
                alert('Дані успішно відправлено на сервер');
                
            },
            error: function(xhr, status, error) {
                alert('Помилка під час відправки даних на сервер');
                console.error(error);
            }
        });
    });
});

// Magnific popup
$(document).ready(function() {
    $('.magnific').magnificPopup({
        delegate: 'a',
        type: 'image',
        closeOnContentClick: false,
        closeBtnInside: false,
        mainClass: 'mfp-with-zoom mfp-img-mobile',
        image: {
            verticalFit: true,
        },
        gallery: {
            enabled: false
        },
        zoom: {
            enabled: true,
            duration: 300,
            opener: function(element) {
                return element.find('img');
            }
        }

    });
});

//Slider
new Swiper('.gallery-cards-slider', {
    spaceBetween: 50,
    navigation: {
        nextEl: ".gallery-cards-slider__button-next",
        prevEl: ".gallery-cards-slider__button-prev"
    },

    pagination: {
        el: ".gallery-cards-slider__pagination",
    },

    breakpoints: {
        680: {
            slidesPerView: 1
        },

        767: {
            slidesPerView: 2
        },

        1050: {
            slidesPerView: 3
        },
    }
});

