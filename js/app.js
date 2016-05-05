$(document).ready(function () {
    $('.ryu').mouseenter(function () {
            $('.ryu-still').hide();
            $('.ryu-ready').show();
        })
        .mouseleave(function () {
            $('.ryu-ready').hide();
            $('.ryu-still').show();
        })
        .mousedown(function () {
            playHadouken();
            $('.ryu-ready, .instructions').hide();
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

            $('.ryu-throwing').hide();
            $('.ryu-ready, .instructions').show();
        });

    $(document).keydown(function (key) {
        if (key.keyCode == 88) {
            $('.ryu-still, .ryu-ready').hide();
            $('.ryu-cool').show();
        }
    })

    $(document).keyup(function (key) {
        if (key.keyCode == 88) {
            $('.ryu-cool').hide();
            $('.ryu-still, .ryu-ready').show();
        }
    });
});

function playHadouken() {
    $('#hadouken-sound')[0].volume = 0.5;
    $('#hadouken-sound')[0].load();
    $('#hadouken-sound')[0].play();
}
