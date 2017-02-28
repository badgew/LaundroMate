var menuIsHidden = true;
var coverW;

function centerApp(){
	coverW = ($(document).width() - $(".container-middle").width())*0.5;
	$(".container-outside").width(coverW);
}

centerApp();

$(window).resize(centerApp);

$('.menu-button').on('click', function(){
	if(menuIsHidden){
		$("#slider").animate({
		left:coverW+"px"
	}, 1000, function(){
		menuIsHidden = false;
	});
} else{
	$("#slider").animate({
		left:(coverW-200)+"px"
	}, 1000, function(){
		menuIsHidden = true;
	});
	}
});

function myFunction() {
	var popup = document.getElementById("myPopup");
	popup.classList.toggle("show");
}

var coverIsDown = true;

$(".white-slide").click(function(){
	if(coverIsDown){
		$(".white-slide").animate({
			top:-340
		}, 1000, function(){
			coverIsDown = false;
		});
	} else{
		$(".white-slide").animate({
			top:0
		}, 1000, function(){
			coverIsDown = true;
		});
	}
});