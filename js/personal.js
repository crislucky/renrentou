/**
 * Created by hxsd on 2016/8/11.
 */
$("document").ready(function () {
    var mainIndex = -1;
    $('#mainLeft>li').click(function () {
        mainIndex = $(this).index();
        $(this).siblings().removeClass('active');
        $(this).show().addClass('active');
        $(this).siblings().find('ul').slideUp(600);
        $(this).find('ul').slideDown(600);
        $('#mainRight>div').eq(mainIndex).show().siblings().hide();
        $("#mainLeft>li ul>li").eq(0).trigger('click');
    });

    $("#mainLeft>li ul").each(function (i) {
        $("#mainLeft>li ul").eq(i).find("li").eq(0).addClass("active");
    });
    $("#mainRight>div>div").css("display", "none");
    $("#mainRight>div>div:eq(0)").css("display", "block");
    $("#mainLeft>li ul>li").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
        $("#mainRight>div").hide();
        $("#mainRight>div").eq(mainIndex).show().find('>div').hide().eq($(this).index()).show();
        return false;
    });
    $('#mainLeft>li').eq(0).trigger('click');
});


$("document").ready(function () {
    var allNav = $(".systemMessage .nav a"),
        allTab = $(".tab");
    allNav.on("mouseover", function () {
        $(this).addClass("active").siblings().removeClass("active");
        allTab.eq($(this).index()).css("display", "block").siblings(".tab").css("display", "none");
    });
    $('.systemMessage .nav a').eq(0).trigger('mouseover');
});

//弹窗
$(document).ready(function () {
    $('.btn').click(function () {
        $('.modalLayer').fadeIn(100);
        $('.popLayer').slideDown(200);
    });
    $('.close').click(function () {
        $('.modalLayer').fadeOut(100);
        $('.popLayer').slideUp(200);
    });
});