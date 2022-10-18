import Navbar from './navbar/navbar';
import VueWorld from './vue-world/vue-world';

const ComponentsModule = angular.module('components', [Navbar, VueWorld]).name;

export default ComponentsModule;
