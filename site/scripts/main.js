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
	$('div.controls button').click(function() {

		setTimeout(Caracal.animation_pages.nextPage, 5000);
		});




}

$(on_site_load);

