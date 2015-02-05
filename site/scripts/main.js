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
	// Caracal.animation_pages.attachNextControl($('div.controls button').eq(0))
	Caracal.animation_pages.showPage(0)

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

	$('div.controls button').eq(0).click(check_domain);

	function check_domain(){
		new Communicator('tools')
				.on_success(function(data) {
					if (data)
						Caracal.animation_pages.switchPage(3); else
						Caracal.animation_pages.switchPage(1);
				})
				.use_cache(true)
				.get('check_domain', {domain: 'http://www.walla.co.il'});
	}

}

$(on_site_load);

