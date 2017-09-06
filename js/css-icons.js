let css_icon_vm = new Vue({
	el: '#icons',
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
