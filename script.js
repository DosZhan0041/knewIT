$(".testmonial_slider_area").owlCarousel({
    autoplay: true,
    slideSpeed:1000,
    items : 3,
    loop: true,
    nav:true,
    navText:['<i class="fa-solid fa-angle-left"></i>','<i class="fa-solid fa-angle-right"></i>'],
    margin: 30,
    dots: true,
    responsive:{
        320:{
            items:1
        },
        767:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:3
        }
    }
    
});