$(function () {
    // $('.quesstion-container-list-container').eq(0).css('height','auto');
    $('.quesstion-container-list-title').click(function () {
        if ($(this).next().height() == 0) {
            $(this).next().css('height','auto');
            $(this).find('.fh').html("∨")
        } else {
            $(this).next().css('height','0px')
            $(this).find('.fh').html("∧")
        }
    })
})