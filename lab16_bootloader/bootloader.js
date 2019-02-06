$(() => {
    "use strict";

    createAjaxLoading();

    $('#load').on('click', function(evt) {
        const imageUrl = 'http://mumstudents.org/cs472/2016-03-AS-KL/Sections/8/bootloader/loader.php';

        $('#boot').empty();
        $.get(imageUrl, {delay: 1})
            .done(showImage);
    });

    function showImage(response) {
        const imageUrl = `http://mumstudents.org/cs472/2016-03-AS-KL/Sections/8/bootloader/${response}`;
        const $img = $('<img>', {
            src: imageUrl
        });

        $('#boot').html($img);
    }

    function createAjaxLoading() {
        const loadingUrl = 'http://mumstudents.org/cs472/2016-03-AS-KL/Sections/8/bootloader/loading.gif';
            
        const throbber = $('<img>', {
            src: loadingUrl,
            alt: 'Loading...'
        });
        const $loading = $('<div>', {
            id: 'loading',
            text: 'Loading...'
        }).append(throbber);

        $('#container').append($loading);
        $loading.hide();

        $(document).ajaxStart(() => { $loading.show(); })
                .ajaxStop(()  => { $loading.hide(); });
    }
});