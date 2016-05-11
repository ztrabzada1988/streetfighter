$(document).ready(function () {

    /* show ryu-still and hide everything else */
    $('.ryu-action').hide();
    $('.ryu-still').show();


    $('.ryu').mouseenter(function () {
            $('.ryu-action').hide();
            $('.ryu-ready').show();
        })
        .mouseleave(function () {
            $('.ryu-ready').hide();
            $('.ryu-still').show();
        })
        .mousedown(function () {
            playHadouken();
            $('.ryu-action, .instructions').hide();
            $('.ryu-throwing').show();
            $('.hadouken').finish().show().animate({
                    'left': '1020px'
                },
                500,
                function () {
                    $(this).hide();
                    $(this).css('left', '520px');
                }
            )
        })
        .mouseup(function () {

            $('.ryu-action').hide();
            $('.ryu-still, .instructions').show();
        });

    $(document).keydown(function (key) {
        if (key.keyCode == 88) {
            $('.ryu-action').hide();
            $('.ryu-cool').show();
        }
    })

    $(document).keyup(function (key) {
        if (key.keyCode == 88) {
            $('.ryu-action').hide();
            $('.ryu-still').show();
        }
    });
});


// Hulk-Ryu //

$(document).ready(function () {

    /* show hulk-ryu-still and hide everything else */
    $('.hulk-ryu-action').hide();
    $('.hulk-ryu-still').show();


    $('.hulk-ryu').mouseenter(function () {
            $('.hulk-ryu-action').hide();
            $('.hulk-ryu-ready').show();
        })
        .mouseleave(function () {
            $('.ryu-ready').hide();
            $('.ryu-still').show();
        })
        .mousedown(function () {
            playHadouken();
            $('.hulk-ryu-action, .instructions').hide();
            $('.hulk-ryu-throwing').show();
            $('.hulk-hadouken').finish().show().animate({
                    'left': '1020px'
                },
                500,
                function () {
                    $(this).hide();
                    $(this).css('left', '520px');
                }
            )
        })
        .mouseup(function () {

            $('.hulk-ryu-action').hide();
            $('.hulk-ryu-still, .instructions').show();
        });

    $(document).keydown(function (key) {
        if (key.keyCode == 90) {
            $('.hulk-ryu-action').hide();
            $('.hulk-ryu-cool').show();
        }
    })

    $(document).keyup(function (key) {
        if (key.keyCode == 90) {
            $('.hulk-ryu-action').hide();
            $('.hulk-ryu-still').show();
        }
    });
});

function playHadouken() {
    $('#hadouken-sound')[0].volume = 0.5;
    $('#hadouken-sound')[0].load();
    $('#hadouken-sound')[0].play();
}
