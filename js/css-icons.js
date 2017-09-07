let css_icon_vm = new Vue({
	el: '#css-icon',
	data: {
		elementsTitle: 'Elements',
		groupsTitle: 'Groups',
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
		],
		lines: [
			`"data-icon" sets icons' next style, without this, the icon will not change its style when you click it.`,
			`"data-calbak" set functions which run after you click the icon, contains 3 parameters: event type, icon's HTML node, class suffix before click event, return false in the function will stop the change of icons.`,
			`PS: Icons lock, unlock, heart, love in this page all binded function iconCallBack["view"] which will output some text in the console.`
		]
	},
	components: {
		'search-bar': {
			template: '<div class="search-bar clrfix">\
				<a class="css-icon" href="javascript:;">\
					<i id="css-icon" :class="`css-icon-`+(iconInput||`search`)"></i>\
				</a>\
				<input v-model="iconInput" class="icon-input" @focus="clearValue" @blur="resetValue" type="text" autocomplete="off" placeholder="Enter icons name to search them, e.g.: \'app\'" />\
			</div>',
			data: function() {
				return {
					'iconInput': 'search'
				}
			},
			methods: {
				clearValue: function() {
					this.iconInput = '';
				},
				resetValue: function() {
					this.iconInput = 'search';
				}
			}
		},
		'guide': {
			template: `
				<div class="container guide">
					<h2>Descriptions:</h2>
					Icons behavior depend on it's HTML attribute,
					<p v-for="line in lines">{{line}}</p>
				</div>
			`,
			data: function() {
				return {
					lines: [
						`<css-icon> has two props, ':icon-name' and ':group'. one for display, the other one is the name of icons group, which the icon will turn it's class to when being click.`,
						`click again will turn icons class to default.`
					]
				}
			}
		},
		'css-icon': {
			props: ['iconName', 'group'],
			template: '<a class="css-icon" href="javascript:;" @click="toggle"><i :class="`css-icon-`+(iconTarget||iconName)"></i><span class="icon-name">{{iconName}}</span></a>',
			data: function() {
				return {
					iconTarget: undefined
				}
			},
			methods: {
				toggle: function() {
					if(this.group) {
						let len;
						do {
							len = Math.floor(this.group.length * Math.random());
						} while(this.group[len] === this.iconName);
						this.iconTarget = this.iconTarget ? undefined : this.group[len];
					}
				}
			}
		}
	}
});
