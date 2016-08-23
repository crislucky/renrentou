// JavaScript Document
//modal模态组件
function modal_layer(){
	var modal=document.createElement('div');
	modal.id="black_modal";
	modal.className="modal";
	document.body.appendChild(modal);
};

//登录框
function logon_box(){
	//创建模态层



	modal_layer();
	var modal=document.getElementById('black_modal');

	
	//创建弹框
	var oDiv=document.createElement('div');
	oDiv.id="logon_box";
	oDiv.className="popBox popBox_logon";

	var html='<h4>验证并绑定邮箱</h4>'+
	'<a id="closeBtn" class="close_btn" href="javascript:;">×</a>'+
	'<p>邮箱是您在人人投的重要安全凭证，同时也是您在人人投网站中<br/>进行投融资活动的重要沟通工具所以，为了确保您提供的邮箱<br/>是真实有效的，请进行邮箱验证</p>'+
	'<p><button id="logonBtn" class="logonBtn" type="button">前往邮箱查阅验证邮件</button></p>';
	
	//oDiv内部插入其他元素
	oDiv.innerHTML=html;
	
	document.body.appendChild(oDiv);//插入到页面
	
	var closeBtn=document.getElementById('closeBtn');
	var title=oDiv.getElementsByTagName('h4')[0];
	var input=document.getElementsByTagName('input');
	
	input[0].onmousedown=function(ev){//输入框阻止冒泡，可以输入文字
		var oEv=ev ||window.event;
		oEv.cancelBubble=true;
	};
	input[1].onmousedown=function(ev){//输入框阻止冒泡，可以输入文字
		var oEv=ev ||window.event;
		oEv.cancelBubble=true;
	};
	
	modal.style.display="block";//显示模态层
	
	popShow(oDiv,title);//居中显示
	drag(oDiv,title);//可以拖拽
	
	//关闭弹框
	closeBtn.onclick=function(){
		document.body.removeChild(modal);
		document.body.removeChild(oDiv);
	};
	}