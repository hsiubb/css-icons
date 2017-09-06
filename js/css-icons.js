// let iconCallBack = {};
// (function(iconCallBack) {
// 	let css_icon = document.querySelectorAll('.css-icon');
// 	for(let i=0; i<css_icon.length; i++) {
// 	  let icon = css_icon[i].querySelector('[class*="css-icon-"]');
// 		css_icon[i].addEventListener('click', function(evnt) {
// 			let icon_cur = icon.getAttribute('class').match(/css-icon(-\w+)+/g)[0].replace('css-icon-','');
// 			let icon_next = icon.getAttribute('data-icon');
// 			let icon_calbak = icon.getAttribute('data-calbak');
// 			let change_icon = !!icon_next;
//
// 			if(icon_calbak) {
// 				if(iconCallBack[icon_calbak]) {
// 					change_icon = iconCallBack[icon_calbak](evnt, icon, icon_cur);
// 				} else {
// 					throw('function iconCallBack[' + icon_calbak + '] is not exist');
// 				}
// 			}
// 			if(change_icon) {
// 				icon.setAttribute('class', 'css-icon-'+icon_next);
// 				icon.setAttribute('data-icon', icon_cur);
// 			}
// 		});
// 	}
//
// 	let search_icon = document.querySelector('#css-icon');
// 	document.querySelector('#input').addEventListener('keyup', function(evnt) {
// 		let viewing = document.querySelector('.viewing');
//
// 		viewing && viewing.setAttribute('class', viewing.getAttribute('class').replace(/viewing/g, ''));
//
// 		let val = String(this.value).replace(/(^\s*)|(\s*$)/g, '');
// 		search_icon.setAttribute('class', 'css-icon-' + val);
//
// 		let current_icon = document.querySelectorAll('.container .css-icon-' + val);
// 		for(let i=0; i<current_icon.length; i++) {
// 			let parent = current_icon[i].parentNode;
// 			let parent_class = parent.getAttribute('class') + ' viewing';
// 			parent.setAttribute('class', parent_class);
// 		}
// 		if(val === '') {
// 			search_icon.setAttribute('class', 'css-icon-search');
// 		}
// 	});
//
// 	iconCallBack['view'] = function(evnt, icon_node, icon_prev_class) {
// 		console.log('event:');
// 		console.log(evnt);
// 		console.log('icon HTML node:');
// 		console.log(icon_node);
// 		console.log('node\'s previous class: "' + icon_prev_class + '"');
//
// 		return true;
// 	};
// }(typeof iconCallBack !== 'undefined' ? iconCallBack : {}));
//
// Vue.component('search-bar', {
// 	props: ['iconInput'],
// 	template: '<div class="search-bar clrfix">\
// 		<a class="css-icon" href="javascript:;">\
// 			<i id="css-icon" :class="`css-icon-`+(iconInput||`search`)"></i>\
// 		</a>\
// 		<input v-model="iconInput" class="icon-input" type="text" autocomplete="off" placeholder="请输入图标名称进行预览，如:\'menu\'" />\
// 	</div>',
// 	data:function() {
// 		return {
// 			iconInput: 'search'
// 		}
// 	}
// });

// Vue.component('css-icon', {
// 	props: ['iconName'],
// 	template: '<a class="css-icon" href="javascript:;"><i :class="`css-icon-`+iconName"></i><span class="icon-name">{{iconName}}</span></a>'
// });

let goups_vm = new Vue({
	el: '#elementsIcons',
	data: {
		iconsList: ['app', 'grid', 'menu', 'close', 'tick', 'attention', 'question', 'pencil', 'user', 'avatar', 'home', 'card', 'position', 'search', 'chat', 'bubble', 'drop', 'focus', 'laptop', 'monitor', 'arrowkey', 'mobile', 'file', 'picture', 'book', 'envelop', 'trash', 'clock'],
		groupList: [
			['loading-1', 'loading-2', 'yinyang'],
			['battery-full', 'battery', 'battery-low'],
			['sunny', 'moon', 'rainy', 'cloudy'],
			['play', 'pause', 'stop', 'record', 'rewind', 'forward'],
			['prev', 'next'],
			['arrow-top', 'arrow-right', 'arrow-bottom', 'arrow-left'],
			['angle-top', 'angle-right', 'angle-bottom', 'angle-left'],
			['lock', 'unlock'],
			['heart', 'love'],
			['checkbox', 'checkbox-checked', 'radio', 'radio-checked'],
			['plus', 'minus', 'plus-minus'],
			['sword', 'katana', 'axe', 'double-bit-axe', 'hammer', 'knife', 'kitchen-knife', 'armor', 'shield', 'shield2', 'boot', 'target'],
			['sack', 'potions-lg', 'potions-md', 'potions-sm', 'syrup'],
			['aircraft', 'fighter', 'tank', 'tank2', 'tank3', 'tank4']
		]
	},
	components: {
		'search-bar': {
			props: ['iconInput'],
			template: '<div class="search-bar clrfix">\
				<a class="css-icon" href="javascript:;">\
					<i id="css-icon" :class="`css-icon-`+(iconInput||`search`)"></i>\
				</a>\
				<input v-model="iconInput" class="icon-input" type="text" autocomplete="off" placeholder="请输入图标名称进行预览，如:\'menu\'" />\
			</div>',
			data:function() {
				return {
					iconInput: 'search'
				}
			}
		},
		guide: {
			template: `
				<div class="container guide">
					<h2>Descriptions:</h2>
					Icons behavior depend on it's HTML attribute,
					<p>"data-icon" sets icons' next style, without this, the icon will not change its style when you click it.</p>
					<p>"data-calbak" set functions which run after you click the icon, contains 3 parameters: event type, icon's HTML node, class suffix before click event, return false in the function will stop the change of icons.</p>
					<p>PS: Icons lock, unlock, heart, love in this page all binded function iconCallBack["view"] which will output some text in the console.</p>
				</div>
			`
		},
		'css-icon': {
			props: ['iconName'],
			template: '<a class="css-icon" href="javascript:;"><i :class="`css-icon-`+iconName"></i><span class="icon-name">{{iconName}}</span></a>'
		}
	}
});
