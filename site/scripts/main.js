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
	Caracal.animation_pages.showPage(0)

	$('form:last()').on('dialog-show', function() {
			$('form').hide();
			$('div.send').hide();
			Caracal.animation_pages.nextPage();
			return false;
		});

	$('div.controls button').eq(0).click(check_domain);

	function check_domain(){
		Caracal.animation_pages.nextPage()
		var url=$('input[name="url"]').val();
		var domain="www." + url;
		new Communicator('tools')
				.on_success(function(data) {
					if (data){
						var domainS="http://";
						var url1="www.";
					 	var url=$('input[name="url"]').val();
						$('form:last() input[name="url"]').val(domainS + url1 + url);
						$('div.form_text span:first-of-type').text(url1 + url);
						setTimeout(function() {
						Caracal.animation_pages.nextPage()
						}, 14000);
					}else {
						Caracal.animation_pages.showPage(0);
						$('form:first() input[name="url"]').val('');
						$('form:first() input[name="url"]').attr('placeholder','Enter A Valid Url');


					}

				})

				.on_error(function() {

                })
				.use_cache(true)
				.get('check_domain', {domain:domain});
	}

}

$(on_site_load);

