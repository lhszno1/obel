$(function() {	
	$("#q01").hide(0);
	$("#q02").hide(0);
	$("#q03").hide(0);
	
	$("#info01").click(function() {
		$("#q01").toggle(500);
	});
	
	$("#info02").click(function() {
		$("#q02").toggle(500);
	});
	
	$("#info03").click(function() {
		$("#q03").toggle(500);
	});
	
}); // ready end