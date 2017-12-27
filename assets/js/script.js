$(function(){
	$('#A div[id !="tab1"]').hide();

	$("a").click(function(){
		$("#A div").hide();

	$($(this).attr("href")).show();

	$(".now").removeClass("now");

	$(this).addClass("now");
	return false;
	});

});
