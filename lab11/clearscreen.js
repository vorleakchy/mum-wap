$(document).ready(() => {
    const $circles = $('#circles');
    let growthAmount;
    let growRate;

    $('#start').on('click', function(evt) {
        evt.preventDefault();

        const size = $('#width').val();
        const numberCircles = parseInt($('#number-circles').val());

        for (let i=0; i<numberCircles; i++) {
            let $circle = $('<div>', {
                'class': 'circle',
                'css': {
                    'width': size,
                    'height': size,
                    'background-color': randomRGBColor(),
                    'bottom': Math.floor(Math.random()*evt.clientX),
                    'left': Math.floor(Math.random()*evt.clientY)
                }
            });

            growthAmount = parseInt($('#growth-amount').val());
            growRate = parseInt($('#grow-rate').val());
            let circleInterval = setInterval(growCircle, growRate, $circle);

            $circle.on('click', function() {
                clearInterval(circleInterval);
                $(this).remove();
            });

            $circles.append($circle);
        }
    });

    function randomRGBColor() {
        const r = Math.floor(Math.random()*255);
        const g = Math.floor(Math.random()*255);
        const b = Math.floor(Math.random()*255);

        return "rgba(" + r + "," + g + "," + b + ",1)";
    }

    function growCircle($circle) {
        const size = parseInt($circle.css('width')) + growthAmount + 'px';

        $('.circle').css({
            'width': size,
            'height': size
        });
    }
});
