// JavaScript Document
// 1 弹出弹窗和 模态层
function popShow(elm){
		elm.style.display="block";
		//取值
		var l=(document.documentElement.clientWidth-elm.offsetWidth)/2;
		var t=(document.documentElement.clientHeight-elm.offsetHeight)/2;
		//赋值
		elm.style.left=l+"px";
		elm.style.top=t+'px';
		
	}
	
	//---------------------------------------------------------------------------------------
	// 2 拖拽的标题

	function drag(box,title){//形参和实参一定要对应
		//当传出一个参数box，拖拽box
		//当传出两个参数时，拖拽title
		
		var handle;//手柄
		title?handle=title:handle=box;
		
		/*if(title){
			handle=title;
		}else{
		 handle=box;	
		}*/
		
		
		
		
		
//点击事件
	handle.onmousedown=function(ev){//按下时机  记录下鼠标的错位位置
		var oEv=ev || window.event;
		var disX=oEv.clientX-box.offsetLeft;//left方向
		var disY=oEv.clientY-box.offsetTop;// top 方向
	
		//鼠标移动的对象应该是document
		document.onmousemove=function(ev){//移动拖拽
			var oEv=ev || window.event;
			var l=oEv.clientX-disX;
			var t=oEv.clientY-disY;
			
			//判断屏幕范围
			if(l<0)l=0;
			if(t<0)t=0;
			if(l>document.documentElement.clientWidth-box.offsetWidth)l=document.documentElement.clientWidth-box.offsetWidth;
			if(t>document.documentElement.clientHeight-box.offsetHeight)t=document.documentElement.clientHeight-box.offsetHeight;
			
			//最后赋值
			box.style.left=l+'px';
			box.style.top=t+'px';
			
		}
			
			//释放鼠标move事件
			document.onmouseup=function(){
			document.onmousemove=null;
			}
			return false;
			
			
	};
		
}
//选项卡------------------------------------------------------------
function hxsd_tab(id,autoplay){//tab盒子的id，  autoplay：true false
	
	var oTab=document.getElementById(id);
	var aLi=oTab.getElementsByTagName('li');
	var aDiv=oTab.getElementsByTagName('div');
	
	var autoPlay_num=0;//自动播放 传入的编号
	var timer;//计时器用变量
	
	//选项卡
	for(var i=0;i<aLi.length;i++){
		aLi[i].index=i;
		aLi[i].onclick=function(){
			for(var i=0;i<aLi.length;i++){
				aLi[i].className='';	
				aDiv[i].style.display="none";
			};		
			this.className='ac';
			aDiv[this.index].style.display="block";
			autoPlay_num=this.index;
		};	
	};
	
	function autoPlay(){
		function auto_run(){
		timer=setInterval(function(){
			function tab_change(index){
				for(var i=0;i<aLi.length;i++){
					for(var i=0;i<aLi.length;i++){
						aLi[i].className='';	
						aDiv[i].style.display="none";
					};		
					aLi[autoPlay_num].className='ac';
					aDiv[autoPlay_num].style.display="block";
				};
			};
			
			tab_change(autoPlay_num);
				autoPlay_num++;
				if(autoPlay_num==3) autoPlay_num=0;
			},1000);
		};
		auto_run();
		
		oTab.onmouseover=function(){
			clearInterval(timer);
		};
		oTab.onmouseout=function(){
			auto_run();
		};
	};
	
	if(autoplay) autoPlay(); 

}

//下拉菜单------------------------------------------------------------

//读取样式
function getStyle(obj, styleName){
	var value=obj.currentStyle ? obj.currentStyle[styleName]:getComputedStyle(obj, false)[styleName];
	return styleName=='opacity' ? value=Math.round(parseFloat(value)*100):value=parseInt(value);
}

//-----------------------------------------------------------------------------
function move(obj,moveJson,stopTime){//对象 终点 运动终点  运动方式
	var prd_speed={ //预定义 predefine
		veryslow:	5000,
		slow:		2000,
		normal:		1000,
		fast:		700,
		veryfast:	300
	};
	
	//如果输入预定速度的字符串，就进行转换
	if(stopTime){
		if(typeof stopTime=='string'){
			stopTime=prd_speed[stopTime];
		};
	}else{
		stopTime=prd_speed.normal;
	}
	
	//距离=终点-起点;
	//var start=getStyle(obj, moveMode);//起点数值
	//var dis=end-start;//距离 distance
	
	
	var start={};//json
	var dis={};//json
	
	for(var key in moveJson){
		start[key]=getStyle(obj, key);
		dis[key]=moveJson[key]-start[key];//距离 distance
	}
	
	//定时器---------------------------------------------
	var count=parseInt(stopTime/30);////次数
	var n=0;//步进

	clearInterval(obj.timer);//使用对象属性，定义计时器变量
	
	obj.timer=setInterval(function(){
		n++;
		
		for(var key in moveJson){
			var a=1-n/count;  //a的值会越来越小
			var step_dis=start[key]+dis[key]*(1-a*a*a);
			
			if(key=='opacity'){//透明
				obj.style.filter='alpha(opacity:'+step_dis+')';
				obj.style.opacity=step_dis/100;
			}
			else{//其他
				obj.style[key]=step_dis+'px';
			}
		};
		
		//取消定时器
		if(n==count){
			clearInterval(obj.timer);
		};
	
	},30)
};

//清除空白节点---------------------------------------------------------------------------
 function cleanSpace(elm) {   //清除空白节点
            for(var i=0; i<elm.childNodes.length; i++){
                var node = elm.childNodes[i];
                if(node.nodeType==3 && !/\S/.test(node.nodeValue)) node.parentNode.removeChild(node);
            }
        };
		
		
//下拉菜单---------------------------------------------------------------------------