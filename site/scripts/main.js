/**
 * Main Javascript
 * SEO-ISRAEL
 *
 * Copyright (c) 2014. by Way2CU, http://way2cu.com
 * Authors:Tal Reznic
 */
var Caracal = Caracal || {};
function on_site_load() {

	Caracal.animation_pages = new PageControl('div.control','div.inner_wrap')
	Caracal.animation_pages.attachNextControl($('div.controls button'))
}

$(on_site_load);
