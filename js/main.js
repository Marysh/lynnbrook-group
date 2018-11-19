$(function () { // dom ready
    var swiper1 = new Swiper('#panel-1 .swiper-container', {
        loop: false,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        }
    });
    //
    // var swiper2 = new Swiper('#panel-2 .swiper-container', {
    //     loop: true,
    //     navigation: {
    //         nextEl: '#panel-2 .swiper-button-next',
    //         prevEl: '#panel-2 .swiper-button-prev'
    //     }
    // });
    //
    // var swiper3 = new Swiper('#panel-3 .swiper-container', {
    //     loop: true,
    //     navigation: {
    //         nextEl: '#panel-3 .swiper-button-next',
    //         prevEl: '#panel-3 .swiper-button-prev'
    //     }
    // });
    //
    // var swiper4 = new Swiper('#panel-4 .swiper-container', {
    //     loop: true,
    //     navigation: {
    //         nextEl: '#panel-4 .swiper-button-next',
    //         prevEl: '#panel-4 .swiper-button-prev'
    //     }
    // });
    //
    // var swiper5 = new Swiper('#panel-5 .swiper-container', {
    //     loop: true,
    //     navigation: {
    //         nextEl: '#panel-5 .swiper-button-next',
    //         prevEl: '#panel-5 .swiper-button-prev'
    //     }
    // });
    //
    // var swiper6 = new Swiper('#panel-6 .swiper-container', {
    //     loop: true,
    //     navigation: {
    //         nextEl: '#panel-6 .swiper-button-next',
    //         prevEl: '#panel-6 .swiper-button-prev'
    //     }
    // });

    $('.tabs_captions .tabs_caption').click(function () {
        var tab_id = $(this).attr('data-tab');

        $('.tabs_captions .tabs_caption').removeClass('current');
        $(this).addClass('current');

        $('.tabs_panel').removeClass('current');
        $("#" + tab_id).addClass('current');
    })


    // var object2 = {
    //     "name": [5,5,5],
    //     "age": 25,
    //     "car": "kangoo",
    //     "family" : {
    //         "mother" : {
    //             "age": "Nataly",
    //             age : 40
    //         }
    //     }
    // }
});

