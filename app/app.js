import ComponentsModule from './components/components';
import { AppComponent } from './app.component';

const appModule = angular
	.module('appModule', [ComponentsModule])
	.component('app', AppComponent);

export default appModule;
