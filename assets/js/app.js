$(function(){

    var scrollOffset = $(window).scrollTop();

    /* Smooth scroll */

    $("[data-scroll]").on("click", function(event){
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;

        $("html, body").animate({
           scrollTop: blockOffset
        }, 800)

    });


});
