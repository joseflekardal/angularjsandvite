import './main.scss';

export const AppComponent = {
	bindings: {},
	controller: class App {
		prop = 'Oh, boi!';
	},
	template: `
		<navbar></navbar>
		<main>
			<vue-component my-prop="$ctrl.prop" />
		</main>
	`
};
