$(document).ready(function () {
    $('.dropdown-btn').click(function() {
        if ($(this).next().css("display") == "none") {
            $(this).next().css("display", "block")
        }
        else {
            $(this).next().css("display", "none")
        }
    })

    $(window).click(function(e) {
        if (!$(e.target).hasClass("dropdown-btn") && !$(e.target).hasClass("dropdown-menu")){
            $('.dropdown-menu').css("display", "none")
        }
    })
});