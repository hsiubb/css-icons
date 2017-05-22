var iconCallBack = {};
(function() {
	let css_icon = document.querySelectorAll('.css-icon');
	for(let i=0; i<css_icon.length; i++) {
	  let icon = css_icon[i].querySelector('[class*="css-icon-"]');
		css_icon[i].addEventListener('click', function(evnt) {
			let icon_cur = icon.getAttribute('class').match(/css-icon(-\w+)+/g)[0].replace('css-icon-','');
			let icon_next = icon.getAttribute('data-icon');
			let icon_calbak = icon.getAttribute('data-calbak');
			let change_icon = !!icon_next;

			if(icon_calbak) {
				if(iconCallBack[icon_calbak]) {
					change_icon = iconCallBack[icon_calbak](evnt, icon, icon_cur);
				} else {
					throw('function iconCallBack[' + icon_calbak + '] is not exist');
				}
			}
			if(change_icon) {
				icon.setAttribute('class', 'css-icon-'+icon_next);
				icon.setAttribute('data-icon', icon_cur);
			}
		});
	}
}();
