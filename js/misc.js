$(document).ready(function() {

    $('img').mousedown(function() {
        return false
    })

    $('a').mousedown(function() {
        return false
    })

    window.addEventListener("hashchange", function() { scrollBy(0, -70) })
})