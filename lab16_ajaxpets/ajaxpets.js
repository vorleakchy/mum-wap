$(() => {
    "use strict";

    $('input[name=animal]').on('click', function(evt) {
        const imagesUrl = 'http://mumstudents.org/cs472/2013-09/Sections/8/ajaxpets/ajaxpets.php';
        const data = buildDate(this.id);

        $.get(imagesUrl, data)
            .done(showPictures);
    });

    function buildDate(optionId) {
        let animal;
        if (optionId === 'kitties')
            animal = 'kitty';
        else if (optionId === 'puppies')
            animal = 'puppy';

        return {'animal': animal};
    }

    function showPictures(response) {
        $('#pictures').html(response);
    }
});