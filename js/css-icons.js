let css_icon_vm = new Vue({
	el: '#css-icon',
	data: {
		elementsTitle: 'Elements',
		groupsTitle: 'Groups',
		groupList: [
			{
				title: 'ELEMENTS',
				list: ['app', 'grid', 'menu', 'close', 'tick', 'attention', 'question', 'pencil', 'user', 'avatar', 'home', 'position', 'search', 'chat', 'bubble', 'drop', 'focus', 'laptop', 'monitor', 'arrowkey', 'mobile', 'file', 'picture', 'book', 'envelop', 'trash', 'clock']
			}, {
				title: 'LOADING',
				list: ['loading-1', 'loading-2', 'yinyang']
			}, {
				title: 'BATTERY',
				list: ['battery-full', 'battery', 'battery-mid', 'battery-low', 'battery-dead']
			}, {
				title: 'WEATHER',
				list: ['sunny', 'moon', 'rainy', 'cloudy']
			}, {
				title: 'AUDIO',
				list: ['play', 'pause', 'stop', 'record', 'rewind', 'forward']
			}, {
				title: 'RELATE',
				list: ['prev', 'next']
			}, {
				title: 'ARROW',
				list: ['arrow-top', 'arrow-right', 'arrow-bottom', 'arrow-left']
			}, {
				title: 'ANGLE',
				list: ['angle-top', 'angle-right', 'angle-bottom', 'angle-left']
			}, {
				title: 'LOCK',
				list: ['lock', 'unlock']
			}, {
				title: 'HEART',
				list: ['heart', 'love']
			}, {
				title: 'CHECK',
				list: ['checkbox', 'checkbox-checked', 'radio', 'radio-checked']
			}, {
				title: 'MATH',
				list: ['plus', 'minus', 'plus-minus']
			}, {
				title: 'RPG-WEAPON',
				list: ['sword', 'katana', 'axe', 'double-bit-axe', 'hammer', 'knife', 'kitchen-knife', 'armor', 'shield', 'shield2', 'boot', 'target']
			}, {
				title: 'RPG-ITEM',
				list: ['sack', 'potions-lg', 'potions-md', 'potions-sm', 'syrup']
			}, {
				title: 'WAR',
				list: ['aircraft', 'fighter', 'tank', 'tank2', 'tank3', 'tank4']
			}
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
		// 'guide': {
		// 	template: `
		// 		<div class="container guide">
		// 			<h2 class="title">Descriptions:</h2>
		// 			Icons' behavior depend on it's HTML attribute,
		// 			<p v-for="line in lines">{{line}}</p>
		// 		</div>
		// 	`,
		// 	data: function() {
		// 		return {
		// 			lines: [
		// 				`<css-icon> has two properties, ':icon-name' and ':group'. `,
		// 				`The first one is related to its display, while the other one is the name of icons group, which the icon will turn it's class to when being click.`,
		// 				` Icons' class will return to default when you click it again .`
		// 			]
		// 		}
		// 	}
		// },
		'css-group': {
			props: ['icon', 'group'],
			template: '<a class="css-icon css-group" href="javascript:;"><i :class="`css-icon-`+icon"></i><span class="icon-name">{{icon}}</span></a>',
			data: function() {
				return {
					idx: 0,
					len: this.group.length
				}
			},
			methods: {
				random() {
					return Math.floor(Math.random() * this.len);
				},
				change() {
					this.idx = (this.idx + 1) % this.len;
					this.icon = this.group[this.idx];
				}
			},
			mounted() {
				let _this = this;
				this.icon = this.group[this.idx];

				setInterval(function() {
					_this.change();
				}, 2000);
			}
		},
		'css-icon': {
			props: ['iconName'],
			template: '<a class="css-icon" href="javascript:;"><i :class="`css-icon-`+iconName"></i><span class="icon-name">{{iconName}}</span></a>',
			data: function() {
				return {
				}
			}
		}
	}
});
