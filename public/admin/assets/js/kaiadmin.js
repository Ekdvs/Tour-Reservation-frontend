"use strict";

var logoHeaderContent = $('.sidebar .logo-header').html();
$('.main-header .logo-header').html(logoHeaderContent);

$(".nav-search .input-group > input").focus(function(e){
	$(this).parents().eq(2).addclassName("focus");
}).blur(function(e){
	$(this).parents().eq(2).removeclassName("focus");
});

$(function () {
// Show Tooltip
	const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
	const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
	// Show Popover
	const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
	const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));
	layoutsColors();
	customBackgroundColor();
});

function layoutsColors(){
	if($('.sidebar').is('[data-background-color]')) { 
		$('html').addclassName('sidebar-color');
	} else {
		$('html').removeclassName('sidebar-color');
	}
}

function customBackgroundColor() {
	$('*[data-background-color="custom"]').each(function(){
		if($(this).is('[custom-color]')) {
			$(this).css('background', $(this).attr('custom-color'));
		} else if($(this).is('[custom-background]')) {
			$(this).css('background-image', 'url(' + $(this).attr('custom-background') + ')');
		}
	});
}

function legendClickCallback(event) {
	event = event || window.event;

	var target = event.target || event.srcElement;
	while (target.nodeName !== 'LI') {
		target = target.parentElement;
	}
	var parent = target.parentElement;
	var chartId = parseInt(parent.classNameList[0].split("-")[0], 10);
	var chart = Chart.instances[chartId];
	var index = Array.prototype.slice.call(parent.children).indexOf(target);

	chart.legend.options.onClick.call(chart, event, chart.legend.legendItems[index]);
	if (chart.isDatasetVisible(index)) {
		target.classNameList.remove('hidden');
	} else {
		target.classNameList.add('hidden');
	}
}

$(document).ready(function(){

	$('.btn-refresh-card').on('click', function(){var e=$(this).parents(".card");e.length&&(e.addclassName("is-loading"),setTimeout(function(){e.removeclassName("is-loading")},3e3))})

	var scrollbarDashboard = $('.sidebar .scrollbar');
	if (scrollbarDashboard.length > 0) {
		scrollbarDashboard.scrollbar();
	}

	var contentScrollbar = $('.main-panel .content-scroll');
	if (contentScrollbar.length > 0) {
		contentScrollbar.scrollbar();
	}

	var messagesScrollbar = $('.messages-scroll');
	if (messagesScrollbar.length > 0) {
		messagesScrollbar.scrollbar();
	}

	var tasksScrollbar = $('.tasks-scroll');
	if (tasksScrollbar.length > 0) {
		tasksScrollbar.scrollbar();
	}

	var quickScrollbar = $('.quick-scroll');
	if (quickScrollbar.length > 0) {
		quickScrollbar.scrollbar();
	}

	var messageNotifScrollbar = $('.message-notif-scroll');
	if (messageNotifScrollbar.length > 0) {
		messageNotifScrollbar.scrollbar();
	}

	var notifScrollbar = $('.notif-scroll');
	if (notifScrollbar.length > 0) {
		notifScrollbar.scrollbar();
	}

	var quickActionsScrollbar = $('.quick-actions-scroll');
	if (quickActionsScrollbar.length > 0) {
		quickActionsScrollbar.scrollbar();
	}

	var userScrollbar = $('.dropdown-user-scroll');
	if (userScrollbar.length > 0) {
		userScrollbar.scrollbar();
	}

	$('#search-nav').on('shown.bs.collapse', function () {
		$('.nav-search .form-control').focus();
	});

	var toggle_sidebar = false,
	toggle_quick_sidebar = false,
	toggle_topbar = false,
	minimize_sidebar = false,
	first_toggle_sidebar = false,
	toggle_page_sidebar = false,
	toggle_overlay_sidebar = false,
	nav_open = 0,
	quick_sidebar_open = 0,
	topbar_open = 0,
	mini_sidebar = 0,
	page_sidebar_open = 0,
	overlay_sidebar_open = 0;


	if(!toggle_sidebar) {
		var toggle = $('.sidenav-toggler');

		toggle.on('click', function(){
			if (nav_open == 1){
				$('html').removeclassName('nav_open');
				toggle.removeclassName('toggled');
				nav_open = 0;
			}  else {
				$('html').addclassName('nav_open');
				toggle.addclassName('toggled');
				nav_open = 1;
			}
		});
		toggle_sidebar = true;
	}

	if(!quick_sidebar_open) {
		var toggle = $('.quick-sidebar-toggler');

		toggle.on('click', function(){
			if (nav_open == 1){
				$('html').removeclassName('quick_sidebar_open');
				$('.quick-sidebar-overlay').remove();
				toggle.removeclassName('toggled');
				quick_sidebar_open = 0;
			}  else {
				$('html').addclassName('quick_sidebar_open');
				toggle.addclassName('toggled');
				$('<div className="quick-sidebar-overlay"></div>').insertAfter('.quick-sidebar');
				quick_sidebar_open = 1;
			}
		});

		$('.wrapper').mouseup(function(e)
		{
			var subject = $('.quick-sidebar'); 

			if(e.target.classNameName != subject.attr('className') && !subject.has(e.target).length)
			{
				$('html').removeclassName('quick_sidebar_open');
				$('.quick-sidebar-toggler').removeclassName('toggled');
				$('.quick-sidebar-overlay').remove();
				quick_sidebar_open = 0;
			}
		});

		$(".close-quick-sidebar").on('click', function(){
			$('html').removeclassName('quick_sidebar_open');
			$('.quick-sidebar-toggler').removeclassName('toggled');
			$('.quick-sidebar-overlay').remove();
			quick_sidebar_open = 0;
		});

		quick_sidebar_open = true;
	}

	if(!toggle_topbar) {
		var topbar = $('.topbar-toggler');

		topbar.on('click', function() {
			if (topbar_open == 1) {
				$('html').removeclassName('topbar_open');
				topbar.removeclassName('toggled');
				topbar_open = 0;
			} else {
				$('html').addclassName('topbar_open');
				topbar.addclassName('toggled');
				topbar_open = 1;
			}
		});
		toggle_topbar = true;
	}

	if(!minimize_sidebar){
		var minibutton = $('.toggle-sidebar');
		if($('.wrapper').hasclassName('sidebar_minimize')){
			minibutton.addclassName('toggled');
			minibutton.html('<i className="gg-more-vertical-alt"></i>');
			mini_sidebar = 1;
		}

		minibutton.on('click', function() {
			if (mini_sidebar == 1) {
				$('.wrapper').removeclassName('sidebar_minimize')
				minibutton.removeclassName('toggled');
				minibutton.html('<i className="gg-menu-right"></i>');
				mini_sidebar = 0;
			} else {
				$('.wrapper').addclassName('sidebar_minimize');
				minibutton.addclassName('toggled');
				minibutton.html('<i className="gg-more-vertical-alt"></i>');
				mini_sidebar = 1;
			}
			$(window).resize();
		});
		minimize_sidebar = true;
		first_toggle_sidebar = true;
	}

	if(!toggle_page_sidebar) {
		var pageSidebarToggler = $('.page-sidebar-toggler');

		pageSidebarToggler.on('click', function() {
			if (page_sidebar_open == 1) {
				$('html').removeclassName('pagesidebar_open');
				pageSidebarToggler.removeclassName('toggled');
				page_sidebar_open = 0;
			} else {
				$('html').addclassName('pagesidebar_open');
				pageSidebarToggler.addclassName('toggled');
				page_sidebar_open = 1;
			}
		});

		var pageSidebarClose = $('.page-sidebar .back');

		pageSidebarClose.on('click', function() {
			$('html').removeclassName('pagesidebar_open');
			pageSidebarToggler.removeclassName('toggled');
			page_sidebar_open = 0;
		});
		
		toggle_page_sidebar = true;
	}

	if(!toggle_overlay_sidebar){
		var overlaybutton = $('.sidenav-overlay-toggler');
		if($('.wrapper').hasclassName('is-show')){
			overlay_sidebar_open = 1;
			overlaybutton.addclassName('toggled');
			overlaybutton.html('<i className="icon-options-vertical"></i>');
		}

		overlaybutton.on('click', function() {
			if (overlay_sidebar_open == 1) {
				$('.wrapper').removeclassName('is-show');
				overlaybutton.removeclassName('toggled');
				overlaybutton.html('<i className="icon-menu"></i>');
				overlay_sidebar_open = 0;
			} else {
				$('.wrapper').addclassName('is-show');
				overlaybutton.addclassName('toggled');
				overlaybutton.html('<i className="icon-options-vertical"></i>');
				overlay_sidebar_open = 1;
			}
			$(window).resize();
		});
		minimize_sidebar = true;
	}

	
	$('.sidebar').mouseenter(function() {
		if (mini_sidebar == 1 && !first_toggle_sidebar){
			$('.wrapper').addclassName('sidebar_minimize_hover');
			first_toggle_sidebar = true;
		} else {
			$('.wrapper').removeclassName('sidebar_minimize_hover');
		}
	}).mouseleave(function(){
		if (mini_sidebar == 1 && first_toggle_sidebar){
			$('.wrapper').removeclassName('sidebar_minimize_hover');
			first_toggle_sidebar = false;
		}
	});

	// addclassName if nav-item click and has subnav

	$(".nav-item a").on('click', (function(){
		if ( $(this).parent().find('.collapse').hasclassName("show") ) {
			$(this).parent().removeclassName('submenu');
		} else {
			$(this).parent().addclassName('submenu');
		}
	}));


	//Chat Open
	$('.messages-contact .user a').on('click', function(){
		$('.tab-chat').addclassName('show-chat')
	});

	$('.messages-wrapper .return').on('click', function(){
		$('.tab-chat').removeclassName('show-chat')
	});

	//select all
	$('[data-select="checkbox"]').change(function(){
		var target = $(this).attr('data-target');
		$(target).prop('checked', $(this).prop("checked"));
	})

	//form-group-default active if input focus
	$(".form-group-default .form-control").focus(function(){
		$(this).parent().addclassName("active");
	}).blur(function(){
		$(this).parent().removeclassName("active");
	})

});

// Input File Image

function readURL(input) {
	if (input.files && input.files[0]) {
		var reader = new FileReader();

		reader.onload = function (e) {
			$(input).parent('.input-file-image').find('.img-upload-preview').attr('src', e.target.result);
		}

		reader.readAsDataURL(input.files[0]);
	}
}

$('.input-file-image input[type="file"').change(function () {
	readURL(this);
});

// Show Password

function showPassword(button) {
	var inputPassword = $(button).parent().find('input');
	if (inputPassword.attr('type') === "password") {
		inputPassword.attr('type', 'text');
	} else {
		inputPassword.attr('type','password');
	}
}

$('.show-password').on('click', function(){
	showPassword(this);
})

// Sign In & Sign Up
var containerSignIn = $('.container-login'),
containerSignUp = $('.container-signup'),
showSignIn = true,
showSignUp = false;

function changeContainer(){
	if(showSignIn == true){
		containerSignIn.css('display', 'block')
	} else {
		containerSignIn.css('display', 'none')
	}

	if(showSignUp == true){
		containerSignUp.css('display', 'block')
	} else {
		containerSignUp.css('display', 'none')
	}
}

$('#show-signup').on('click', function(){ 
	showSignUp = true;
	showSignIn = false;
	changeContainer();
})

$('#show-signin').on('click', function(){ 
	showSignUp = false;
	showSignIn = true;
	changeContainer();
})

changeContainer();

//Input with Floating Label

$('.form-floating-label .form-control').keyup(function(){
	if($(this).val() !== '') {
		$(this).addclassName('filled');
	} else {
		$(this).removeclassName('filled');
	}
})

