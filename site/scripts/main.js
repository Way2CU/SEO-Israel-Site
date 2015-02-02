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
	Caracal.animation_pages.attachNextControl($('div.controls button'))
	Caracal.animation_pages.showPage(0);

	$('div.controls button').eq(0).click(function() {
		var url1="www.";
		var url=$('input[name="url"]').val();
		$('div.form_text span:first-of-type').text(url1 + url);
		setTimeout(function() {
			Caracal.animation_pages.nextPage()
		}, 12000);
	});




}

$(on_site_load);

