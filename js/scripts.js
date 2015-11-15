var modalApp = {};
// --------------------------------------------
// DECLARE VARS 
	var $gallery_image = $('#gallery .image'); 
	var $overlay = $('.overlay');
	var $close = $('.close-btn');
	var $modalImg = $('.overlay .full-image img');
// --------------------------------------------
// DECLARE LOCAL FUNCTIONS 
	modalApp.showModal = function() {
		$overlay.css('display', 'block');
	}
	modalApp.hideModal = function() {
		$overlay.css('display', 'none');
	}
// --------------------------------------------	
// INIT 
	modalApp.init = function(){
		$gallery_image.on('click', function() {
			modalApp.showModal();
			$modalImg.attr('src', $(this).find('img').attr('src'));
		});	
		$(document).on('keydown', function(e) {
			if(e.keyCode === 27)  {
				modalApp.hideModal();
			}
		});
		$close.on('click', function(){
			modalApp.hideModal();
		});
		$overlay.on('click', function() {
			modalApp.hideModal();
		});
	}

// --------------------------------------------
// DOCUMENT READY  	
	$(function(){
		modalApp.init();
	});


// $(document).ready(function(){
//     var link = $(".imgModal"),
//           modal = $(".modal"),
//           img = $(".modal img");

//     link.click(function(){
//         modal.css({"display":"block"});
//         img.attr("src", $(this).find("img").attr("src"));
//     });

//     modal.click(function(){
//         modal.css({"display":"none"});
//     });
// });
