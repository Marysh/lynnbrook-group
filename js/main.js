$(function () { // dom ready
    var swiper1 = new Swiper('#panel-1 .swiper-container', {
        loop: false,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        }
    });


    $('.tabs_captions .tabs_caption').click(function () {
        var tab_id = $(this).attr('data-tab');

        $('.tabs_captions .tabs_caption').removeClass('current');
        $(this).addClass('current');

        $('.tabs_panel').removeClass('current');
        $("#" + tab_id).addClass('current');
    })

});

