var ldoor = document.getElementById("ldoor");
var rdoor = document.getElementById("rdoor");
ldoor.style.transition = "1s";
rdoor.style.transition = "1s";
function load() {
ldoor.style.width = "0";
rdoor.style.width = "0";
ldoor.style.border = "0";
rdoor.style.border = "0";
}
$(document).ready(function () {
    $('[data-spy="scroll"]').each(function () {
        var $spy = $(this).scrollspy('refresh')
    });
    var o;
    jQuery(window).load(function () {
            $(".loader").fadeOut(500, function () {
                $("body").css("overflow-y", "auto");
            })
        }), $(".navbar a, .header a, .footer a, .top-nav a").click(function (o) {
            $("html, body").animate({
                scrollTop: $($(this).attr("href")).offset().top
            }, 1e3), o.preventDefault()
        }),
        $("#nav-icon1").click(function () {
            $(this).toggleClass("open"), $(".navy").toggleClass("back-nav"),
                $(".nav-r").toggleClass("fixed-r"), $(".body-overlay").toggleClass("back"),  $("body").toggleClass("body-mob")
        }), $(".body-overlay").click(function () {
            $(this).toggleClass("back"), $("#nav-icon1").toggleClass("open"), $(".navy").toggleClass("back-nav"),
                $(".nav-r").toggleClass("fixed-r"), $("body").toggleClass("body-mob")
        })  , o = $("#scroll-top"), $(window).scroll(function () {
            $(this).scrollTop() >= 500 ? o.show() : o.hide()
        }), $("#scroll-top").click(function () {
            $("html,body").animate({
                scrollTop: 0
            }, 600)
        });
    ///////////// Font awesome 5 on pseudo elements
    window.FontAwesomeConfig = {
    searchPseudoElements: true
  }
    ///////////// current year 
    document.getElementById("currentYear").innerHTML = new Date().getFullYear();

    
    /**************** wow animation ****************/
    new WOW().init();

    /**************** Fixed Navbar ****************/
    $(window).scroll(function () { 
        var st = $(window).scrollTop();
        if (st > 80) {
            $(".navbar").addClass('fixd_navbar');
            
        } else {
            $(".navbar").removeClass('fixd_navbar');
           
        }
    });
    /*************** display first word in name ***********/
    var ac = $("#ac").text().split(' '); 
    $("#ac").text(ac[0]);
    
});

    /**************** Navbar Dropdown ****************/
$('.dropdown').hover(function() {
    $(this).find('.dropdown-menu').first().stop(true, true).delay(200).fadeIn(500);
}, function() {
    $(this).find('.dropdown-menu').first().stop(true, true).delay(200).fadeOut(500);
});
/************ remove item from navbar cart ****/
$(".remov_this").click(function() {
    $(this).parent(".sm_cart").parent(".notifi1").parent("li").hide(300);
});
/**************** Swiper js **********************/
var Swipes = new Swiper('.swiper-one', {
    loop: true,
    autoplay:true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
    },
    clickable: true,
});
var swiper = new Swiper('.swiper-four-xs-two', {
    loop: true,
    autoplay:true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination:false,
    clickable: true,
    // Responsive breakpoints
    breakpoints: {
        0: {
            slidesPerView: 2,
            spaceBetweenSlides: 30
        },
        768: {
            slidesPerView: 3,
            spaceBetweenSlides: 10
        },
        999: {
            slidesPerView: 4,
            spaceBetween: 15,
        }
    }
  });
var swiper = new Swiper('.swiper-four-xs-one', {
    loop: true,
    autoplay:false,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination:false,
    clickable: true,
    // Responsive breakpoints
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetweenSlides: 0
        },
        568: {
            slidesPerView: 3,
            spaceBetweenSlides: 10
        },
        999: {
            slidesPerView: 4,
            spaceBetween: 15,
        }
    }
  });
