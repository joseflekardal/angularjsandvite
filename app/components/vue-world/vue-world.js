import App from '@/App.vue';
import { createApp } from 'vue';

const vueWorldModule = angular
	.module('VueWorld', [])
	.directive('vueComponent', () => ({
		scope: {
			myProp: '=',
		},
		link(scope, el) {
			const app = createApp(App, {
				myProp: scope.myProp,
			});
			app.mount(el[0]);
		},
	})).name;

export default vueWorldModule;
