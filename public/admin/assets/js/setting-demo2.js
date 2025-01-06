"use strict";

// Setting Color

$(window).resize(function() {
	$(window).width(); 
});

getCheckmark();

$('.changeBodyBackgroundFullColor').on('click', function(){
	if($(this).attr('data-color') == 'default'){
		$('body').removeAttr('data-background-full');
	} else {
		$('body').attr('data-background-full', $(this).attr('data-color'));
	}

	$(this).parent().find('.changeBodyBackgroundFullColor').removeclassName("selected");
	$(this).addclassName("selected");
	layoutsColors();
	getCheckmark();
});

$('.changeLogoHeaderColor').on('click', function(){
	if($(this).attr('data-color') == 'default'){
		$('.logo-header').removeAttr('data-background-color');
	} else {
		$('.logo-header').attr('data-background-color', $(this).attr('data-color'));
	}

	$(this).parent().find('.changeLogoHeaderColor').removeclassName("selected");
	$(this).addclassName("selected");
	customCheckColor();
	layoutsColors();
	getCheckmark();
});

$('.changeTopBarColor').on('click', function(){
	if($(this).attr('data-color') == 'default'){
		$('.main-header .navbar-header').removeAttr('data-background-color');
	} else {
		$('.main-header .navbar-header').attr('data-background-color', $(this).attr('data-color'));
	}

	$(this).parent().find('.changeTopBarColor').removeclassName("selected");
	$(this).addclassName("selected");
	layoutsColors();
	getCheckmark();
});

$('.changeSideBarColor').on('click', function(){
	if($(this).attr('data-color') == 'default'){
		$('.sidebar').removeAttr('data-background-color');
	} else {
		$('.sidebar').attr('data-background-color', $(this).attr('data-color'));
	}

	$(this).parent().find('.changeSideBarColor').removeclassName("selected");
	$(this).addclassName("selected");
	layoutsColors();
	getCheckmark();
});

$('.changeBackgroundColor').on('click', function(){
	$('body').removeAttr('data-background-color');
	$('body').attr('data-background-color', $(this).attr('data-color'));
	$(this).parent().find('.changeBackgroundColor').removeclassName("selected");
	$(this).addclassName("selected");
	getCheckmark();
});

function customCheckColor(){
	var logoHeader = $('.logo-header').attr('data-background-color');
	if (logoHeader !== "white") {
		$('.logo-header .navbar-brand').attr('src', '../assets/img/kaiadmin/logo_light.svg');
	} else {
		$('.logo-header .navbar-brand').attr('src', '../assets/img/kaiadmin/logo_dark.svg');
	}
}


var toggle_customSidebar = false,
custom_open = 0;

if(!toggle_customSidebar) {
	var toggle = $('.custom-template .custom-toggle');

	toggle.on('click', (function(){
		if (custom_open == 1){
			$('.custom-template').removeclassName('open');
			toggle.removeclassName('toggled');
			custom_open = 0;
		}  else {
			$('.custom-template').addclassName('open');
			toggle.addclassName('toggled');
			custom_open = 1;
		}
	})
	);
	toggle_customSidebar = true;
}

function getCheckmark() {
	var checkmark = `<i className="gg-check"></i>`;
	$('.btnSwitch').find('button').empty();
	$('.btnSwitch').find('button.selected').append(checkmark);
}