import angular from 'angular';
import './app/app';

const component = () => {
	const element = document.createElement('div');
	element.className = 'app';
	element.innerHTML = '<app></app>';

	return element;
};

angular.element(() => {
	angular.bootstrap(document, ['appModule']);
});

document.body.appendChild(component());
