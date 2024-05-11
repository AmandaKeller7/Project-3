$(document).ready(function(){
    const multipleItemCarousel = document.querySelector("#testimonialCarousel");
    const carouselInner = document.querySelector("#carouselInner");
    console.log("loaded");

    $('.card').each(function(){
        $(this).hover(
            function(){
                $(this).find(".card-body").fadeOut();

                console.log("over");
            },function(){
                $(this).find(".card-body").fadeIn();
                console.log("out");
            });
    });

});