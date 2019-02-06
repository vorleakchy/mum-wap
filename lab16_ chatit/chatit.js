$(() => {
    "use strict";

    $('#send').on('click', (evt) => {
        const chatUrl = 'http://mumstudents.org/cs472/2016-03-AS-KL/Sections/8/chatit/chatit.php';
        const message = $('#message').val();

        $.post(chatUrl, {msg: message})
            .done(clearMessage);
    });

    setInterval(loadTopMessages, 1000);

    function clearMessage() {
        $('#message').val('');
    }

    function loadTopMessages() {
        const chatUrl = 'http://mumstudents.org/cs472/2016-03-AS-KL/Sections/8/chatit/chatit.php';
        $.get(chatUrl, {reverse: true})
            .done(showMessages);
    }

    function showMessages(messages) {
        $('#messages').html(messages);
    }
});
