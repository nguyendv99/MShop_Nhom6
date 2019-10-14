$(document).ready(function() {
	/*Hiển thị phần tùy chọn khi di chuyển chuột vào button "Điện thoại" trên thanh menu*/
	$("#phone-menu-div-button").mouseover(function() {
		$("#box-option-for-phone-btn").css("display", "block");
	});
	$("#phone-menu-div-button").mouseout(function() {
		$("#box-option-for-phone-btn").css("display", "none");
	});
	$("#box-option-for-phone-btn").mouseover(function() {
		$("#box-option-for-phone-btn").css("display", "block");
	});
	$("#box-option-for-phone-btn").mouseout(function() {
		$("#box-option-for-phone-btn").css("display", "none");
	});

	/*Hiển thị phần tùy chọn khi di chuyển chuột vào button "Phụ kiện" trên thanh menu*/
	$("#accessories-div-menu-button").mouseover(function() {
		$("#box-option-for-accessories-btn").css("display", "block");
	});
	$("#accessories-div-menu-button").mouseout(function() {
		$("#box-option-for-accessories-btn").css("display", "none");
	});
	$("#box-option-for-accessories-btn").mouseover(function() {
		$("#box-option-for-accessories-btn").css("display", "block");
	});
	$("#box-option-for-accessories-btn").mouseout(function() {
		$("#box-option-for-accessories-btn").css("display", "none");
	});

	/*Hiệu ứng khi di chuột lên sản phẩm*/
	$(".prds").mouseover(function() {
		$(this).children("h5").css("color", "blue");
	});
	$(".prds").mouseout(function() {
		$(this).children("h5").css("color", "black");
	});

	$(".prds").mouseover(function() {
		$(this).children("b").css("color", "red");
	});
	$(".prds").mouseout(function() {
		$(this).children("b").css("color", "#b10000");
	});
});