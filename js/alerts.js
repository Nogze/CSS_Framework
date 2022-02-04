function displayAlert(btnClass) {
    var subclass = ""
    var classArr = btnClass.split(' ')

    for (cl in classArr) {
        if (classArr[cl].includes("btn-")) {
            subclass = classArr[cl];
        }
    }
    $('#alert-container').append("<div style='position:relative' class='alert close alert"+subclass.substring(3)+"'><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p></div>")
    setTimeout(function() {
        $('#alert-container').children()[0].remove()
    }, 10000)
}

function closeAlert(element) {
    $(element).remove()
}

$('.btn').click(function(){
    displayAlert($(this).attr("class"))
})

$(document).on("click", ".close", function() {
    closeAlert($(this))
})