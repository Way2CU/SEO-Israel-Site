/**
 * Main Javascript
 * SEO-ISRAEL
 *
 * Copyright (c) 2014. by Way2CU, http://way2cu.com
 * Authors:Tal Reznic
 */
var Caracal = Caracal || {};
function on_site_load() {

	Caracal.animation_pages = new PageControl('div.animation_page','div.animate')
	Caracal.animation_pages.attachNextControl($('div.controls button').eq(0))
	Caracal.animation_pages.showPage(0);
	Caracal.animation_pages.setValidatorFunction(0,function(){

		$.ajax({
	    type: 'HEAD',
	    url:"http://www."+ $('input[name="url"]').val(),
	    async: false,
	    success: function(){
	      alert("OK");
	    },
	    error: function() {
	     alert('WRONG');
	    }
	  });
	})

	$('form:last()').on('dialog-show', function(error) {
		if (error) {
			Caracal.animation_pages.nextPage();
		} else {
			return false;
		}
	});


	// $('div.controls button').eq(0).click(function() {
	// 	var domainS="http://";
	// 	var url1="www.";
	// 	var url=$('input[name="url"]').val();
	// 	$('form:last() input[name="url"]').val(domainS + url1 + url);
	// 	$('div.form_text span:first-of-type').text(url1 + url);
	// 	setTimeout(function() {
	// 		Caracal.animation_pages.nextPage()
	// 	}, 14000);
	// });

}

$(on_site_load);

