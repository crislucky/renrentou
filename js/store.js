/**
 * Created by 桂生 on 2016/8/14.
 */

//现有/已有商铺
$(function() {
	var oUl = $('#store_type');
	var aLink = oUl.children().children().not('a:last');
	var aDiv = $('#content_left').find('.fl');
		aLink.click(function() {
			// 清空样式
			$(aLink).removeClass('store_active');
			// 添加样式
			$(this).addClass('store_active');
		});

	$(aLink).eq(0).click(function() {
		$(aDiv).eq(0).show().siblings().not($('.fr')).hide();
	});

	$(aLink).eq(4).click(function() {
		$(aDiv).eq(1).show().siblings().not($('.fr')).hide();
	});
})

//融资记录
$(function() {
	var aLink = $('.financing_record').children();
	var aDiv = $('.financing_manage').find('dl');
	var num = 0;
	console.log(aDiv);
	aLink.click(function() {
		//获取当前选项卡的索引值
		num = $(this).index();
		//隐藏所有内容
		aDiv.hide();
		// 清空样式
		$(aLink).removeClass('record_active');
		// 添加样式
		$(this).addClass('record_active');
		// 显示内容
		$(aDiv).eq(num).show();
	});
})

//财务报告
$(function() {
	var oUl = $('#management');
	var aLink = oUl.children().children();
	var aDiv = $('#finance_type').find('div');
	var num = 0;
	aLink.click(function() {
		//获取当前选项卡的索引值
		num = $(this).parent().index();
		//隐藏所有内容
		aDiv.hide();
		// 清空样式
		$(aLink).removeClass('store_active');
		// 添加样式
		$(this).addClass('store_active');
		// 显示内容
		$(aDiv).eq(num).show();
	});
})