$(function () {
    //transparent nav
    navTransparent();

    //getVideo
    /*getVideo(setVideo);
    function setVideo(result) {
        if (result) {
            var data = result.data;
            if (data.length > 4) data.length = 4;
            for (var i = 0; i < data.length; i++) {
                $('.case-list').append('<div class="case-list-container col-lg-3 col-md-3 col-xs-6 screen-video" data-video="' + url +'/alienht/public'+ data[i].video + '"><img src="' + url +'/alienht/public'+ data[i].video_img + '" class="img"><img src="images/config/video-btn.png" alt="" class="video-btn"><p class="title">' + data[i].aname + '</p></div>')
            }
            screenVideo();
        }
    }*/

    //team lunbo
    var team_prev_index = 0;
    var team_next_index = 5;
    var team_index = 1;
    var team_touch_start = null;
    var team_timer = setInterval(rightBtn,3000);
    
    function teamList() {
        $('.team .lunbo ul').css('width', $('.team .lunbo ul li').length * 25 + '%');
        $('.team .lunbo ul li').css('width', $('.team .lunbo').width() / 4 + 'px');
    }
    teamList();
    $(window).resize(function () {
        teamList();
    });

    function teamInterval(){
        team_timer = setInterval(rightBtn, 3000);
    }
    function liClass(){
        $('.team .lunbo li').removeClass('active');
        $('.team .lunbo li').eq(team_index - 1).addClass('active');
        $('.team .touxiang').eq(0).attr('src','/images/index/team/' + team_index + '.png');
        $('.team .name span').eq(0).html($('.team ul li .name').eq(team_index - 1).html());
        $('.team .miaoshu').eq(0).html($('.team ul li .content').eq(team_index - 1).html());
        // $('.team .length .text').eq(0).html(add(team_index));
		$('.team .length .text').eq(0).html(team_index);
        // alert(team_index);
    }
    function leftBtn() {
        team_index--;
        if (team_index == team_prev_index) {
            leftAnimate();
        }
        liClass();
    }
    function leftAnimate(){
        if (team_prev_index == 0) {
            $('.team .lunbo ul').animate({
                left: -25 * ($('.team .lunbo ul li').length - 4) + '%'
            })
            team_prev_index = $('.team .lunbo ul li').length - 4;
            team_next_index = $('.team .lunbo ul li').length + 1;
            team_index = $('.team .lunbo ul li').length;
        } else {
            $('.team .lunbo ul').animate({
                left: -25 * (team_prev_index - 1) + '%'
            })
            team_prev_index--;
            team_next_index--;
        }
    }
    function rightBtn() {
        team_index++;
        if (team_index == team_next_index) {
            rightAnimate();
        }
        liClass();
    }
    function rightAnimate(){
        if (team_next_index > $('.team .lunbo ul li').length) {
            $('.team .lunbo ul').animate({
                left: 0
            })
            team_prev_index = 0
            team_next_index = 5;
            team_index = 1;
        } else {
            $('.team .lunbo ul').animate({
                left: -25 * (team_next_index - 4) + '%'
            })
            team_prev_index++;
            team_next_index++;
        }
    }
    $('.team .lunbo li').click(function () {
        clearInterval(team_timer)
        team_index = $(this).index() + 1;
        liClass();
        teamInterval();
    })
    $('.team .left-btn').click(function () {
        clearInterval(team_timer);
        leftBtn();
        teamInterval();
    });
    $('.team .right-btn').click(function () {
        clearInterval(team_timer);
        rightBtn();
        teamInterval();
    });
    
    $('.team .lunbo').bind('touchstart', function (event) {
        clearInterval(team_timer);
        team_touch_start = event.changedTouches[0].clientX;
    })
    $('.team .lunbo').bind('touchend', function (event) {
        if (team_touch_start > event.changedTouches[0].clientX) {
            if (team_index == team_next_index - 4 && team_index == team_prev_index + 1) team_index++;
            rightAnimate();
            liClass();
        } else if (team_touch_start < event.changedTouches[0].clientX) {
            if (team_index == team_next_index - 1 && team_index == team_prev_index + 4) team_index--;
            leftAnimate();
            liClass();
        }
        teamInterval();
    })

    //detail lunbo
    var detail_index = 1;
    var count = null;
    function detailList() {
        if ($(window).width() <= 768) {
            $('.detail ul li').css('width', $(window).width() / 2 + 'px')
            count = $('.detail ul li').length - 1;
        } else {
            $('.detail ul li').css('width', $(window).width() / 4 + 'px');
            count = $('.detail ul li').length - 3;
        }
        $('.detail ul').css('width', $('.detail ul li').length * $('.detail ul li').width() + 2000 + 'px')
    }
    
    function detailLunbo() {
        if (detail_index >= count) detail_index = 0;
        var left_pos = -(detail_index * $('.detail ul li').width()) + 'px';
        // console.log(left_pos)
        $('.detail ul').animate({
            left: left_pos
        },200)
        detail_index++;
    }
    detailList();
    var timer = setInterval(detailLunbo, 5000)
    $(window).resize(function () {
        detailList();
    });

    //get news
    /*getNews(setNews);
    function setNews(result) {
        var data = result.data;
        if (data.length > 4) data.length = 4;
        for (var i = 0; i < data.length; i++) {
            $('.news-right ul').append('<li><a target="_blank" href="news-list.html?id=' + data[i].id + '"><img src="' + url +'/alienht/public'+  data[i].coverimg + '"><h4 class="title">' + data[i].title + '</h4><p class="date">' + time(data[i].createtime) + '</p><p class="content">' + data[i].outline + '</p></a></li>')
        }
    }*/
})