"use strict";

$(document).ready(function() {
    const $boundaries = $("#maze .boundary");
    const $status = $("#status");
    let isWin = true;

    $("#end").mouseover(end);
    $("#maze").mouseleave(lose);
    $boundaries.mouseover(lose);
    $("#start").click(reset);

    function end() {
        if (isWin) {
            $status.text("You win! :]");
        }
    }

    function lose() {
        isWin = false;
        $boundaries.addClass("youlose");
        $status.text("Sorry, you lost. :[");
    }

    function reset() {
        isWin = true;
        $boundaries.removeClass("youlose");
        $status.text("Click the \"S\" to begin.");
    }
});
