//url
var url = '';
var form = '/api/message/index';

//nav
function navmOpen() {
    $('.navm-btn').unbind();
    $('.nav ul').animate({ left: '0px' })
    $('.container-xpel').animate({ left: '200px' })
    $('.navm').animate({ left: '200px' })
    $('.nav').animate({ left: '200px' })
    $('.navm-btn').click(navmOpen);
}
function navmClose() {
    $('.nav .close-img img').unbind();
    $('.container-xpel').animate({ left: '0px' })
    $('.navm').animate({ left: '0px' })
    $('.nav').animate({ left: '0px' })
    $('.nav ul').animate({ left: '-200px' })
    $('.nav .close-img img').click(navmClose);
}
function nav() {
    // return false;
    $('.container-xpel').css({ 'left': '0px' });
    $('.navm').css('left', '0px')
    $('.nav').css('left', '0px');
    if ($(window).width() > 1024) {
        $('.nav').addClass('black').next().next().css('margin', '80px auto 0');
        $('.nav ul').removeClass('yellow').addClass('black').css({ 'width': '75%', 'height': '100%', 'position': 'relative', 'float': 'right', 'left': '0px' })
        $('.footer').css('margin', '30px auto 0');
    } else if ($(window).width() <= 1024) {
        $('.nav').removeClass('.transparent').addClass('black').next().next().css('margin', '65px auto 0')
        $('.nav ul').removeClass('black transparent').addClass('yellow').css(
            { 'width': '200px', 'height': $(window).height() + 100 + 'px',
                 'position': 'fixed', 'left': '-200px', 'top': '0px', 'z-index': '99999999'
            });
        $('.footer').css('margin', '30px auto 60px');
    }
}

//transparent nav
function navTransparent() {
    function setNav() {
        if ($(window).width() > 1024) {
            if ($(window).scrollTop() == 0) {
                $('.nav').removeClass('black').addClass('transparent').next().next().css('margin', '0px auto 0');
                $('.nav ul').removeClass('black yellow').addClass('transparent');
            } else {
                $('.nav').removeClass('transparent').addClass('black').next().next().css('margin', '0px auto 0');
                $('.nav ul').removeClass('yellow transparent').addClass('black');
            }
        }
    }
    setNav();
    $(window).resize(setNav);
    $(window).scroll(setNav);
}


//screen video
function screenVideo() {
    if ($('.screen-video').length) {
        if (!$('.screen').length) {
            $('body').append('<div class="screen"><div class="screen-container"><img src="/images/config/close-video.png"><video src="" poster="/images/config/video-load.jpg" controls></video></div></div>')
            $('.screen').css({ 'width': '100%', 'height': $(document).height() + 100000 + 'px', 'background': 'rgba(0,0,0,0.9)', 'position': 'absolute', 'top': '0px', 'left': '0px', 'z-index': '99999999999999', 'display': 'none' })
            $('.screen .screen-container').css({ 'width': '100%', 'max-width': '1000px', 'position': 'fixed', 'top': '-700px', 'left': '0px', 'right': '0px', 'margin': '0 auto' })
            $('.screen .screen-container img').css({ 'width': '15px', 'height': '15px', 'position': 'absolute', 'top': '0px', 'right': '2.5%', 'cursor': 'pointer' })
            $('.screen .screen-container video').css({ 'width': 'auto', 'max-width': '95%', 'display': 'block', 'height': 'auto', 'margin': '35px auto 0', 'border-radius': '5px' })
        }
        $('.screen .screen-container img').click(function () {
            $('body').css('overflow-y', 'auto')
            $('.screen').hide();
            $('.screen .screen-container').css('top', '-700px')
            $('.screen video').attr('src', '')
        })
        $('.screen-video').css('cursor', 'pointer').click(function () {
            $('.screen video').attr('src', $(this).attr('data-video'))
            $('.screen video')[0].addEventListener('canplay', function() {
                $('.screen video')[0].play();
              })
            $('body').css('overflow-y', 'hidden')
            $('.screen').show();
            $('.screen .screen-container').animate({
                top: '100px'
            })
        })
    }
}
//表单验证
function formUrl(){
    $(".footer form button").eq(0).html('提交信息').css('color','#333');
    $.ajax({
        type: 'post',
        url: url + form,
        data: {
            name: $('.footer form input').eq(0).val(),
            tel:$('.footer form input').eq(1).val(),
            message:$('.footer textarea').eq(0).val()
        },
        dataType: 'json',
        success: function (result) {
            if (result.message == 'Tel error') {
                $(".footer form button").eq(0).html('提交信息----' + '(电话格式不对)').css('color','red');
                setTimeout(function(){
                    $(".footer form button").eq(0).html('提交信息').css('color','#333');
                    $('.footer form')[0].reset();
                },5000)
            } else if(result.message == 'true'){
                $(".footer form button").eq(0).html('提交信息----' + '(提交成功)');
                setTimeout(function(){
                    $(".footer form button").eq(0).html('提交信息').css('color','#333');
                    $('.footer form')[0].reset();
                },5000)
            }
        }
    })
}
$(function () {
    //set nav
    $('.navm-btn').click(navmOpen);
    $('.nav .close-img img').click(navmClose);
    nav();
    $(window).resize(nav);
    //
    screenVideo();
    //submit
    $('.footer form input').eq(0).attr('name','name');
    $('.footer form input').eq(1).attr('name','tel');
    $('.footer textarea').eq(0).attr('name','message');
    $(".footer form button").eq(0).click(formUrl)
});

