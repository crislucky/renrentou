$(document).ready(function(){

    //显示蒙版和登录框
    $("#login").on("click",function(){
        $(".shadow").css("display","block");
        $(".popup").css("display","block");
    });

    //点击关闭按钮，移出蒙版和登录框
    $("#close").on("click",function(){
        $(".shadow").css("display","none");
        $(".popup").css("display","none");
    });

    //点击登录后显示用户信息
    $(".login").on("click",function(){
        $(".loginInfo").css("display","none");
        $(".memberInfo").css("display","block");
        $(".popup").css("display","none");
        $(".shadow").css("display","none");
    });

    //点击小三角后显示下拉列表
    $(".openList").data("flag",true);
    $(".openList").on("click",function(){
        if($(".openList").data("flag")){
            $(".memberInfo ul").css("display","block");
            $(".openList").data("flag",false);
        }else{
            $(".memberInfo ul").css("display","none");
            $(".openList").data("flag",true);
        }
    });

    //用户退出
    $(".quite").on("click",function(){
        $(".loginInfo").css("display","block");
        $(".memberInfo").css("display","none");
        $(".memberInfo ul").css("display","none");
        $(".openList").data("flag",true);
    });
});