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
		var message;
		var domain="http://www.";
		var myRegExp =/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!10(?:\.\d{1,3}){3})(?!127(?:\.\d{1,3}){3})(?!169\.254(?:\.\d{1,3}){2})(?!192\.168(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/i;
		var urlToValidate =$('input[name="url"]').val();
		if (!myRegExp.test(domain + urlToValidate)){
		message = "Not a valid URL.";
		}else{
		Caracal.animation_pages.nextPage()
		}

	});


	$('div.controls button').eq(0).click(function() {
		var domainS="http://";
		var url1="www.";
		var url=$('input[name="url"]').val();
		$('input[name="url"]').val(domainS + url1 + url);
		$('div.form_text span:first-of-type').text(url1 + url);
		setTimeout(function() {
			Caracal.animation_pages.nextPage()
		}, 14000);
	});

}

$(on_site_load);

