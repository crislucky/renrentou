/*------------------------------主页js 王圆圆-------------------------------------------*/
$(document).ready(function(){

    /*取得所有导航,和选项卡*/
    var allNav=$(".nav a"),
        allTab=$(".investInfo");

   //循环所有导航，添加鼠标滑过事件,，切换徐阿娘卡
   allNav.on("mouseover",function(){
       $(this).addClass("active").siblings().removeClass("active");
       allTab.eq($(this).index()).css({display:"block"}).siblings(".investInfo").css("display","none");
   });
});