import homeTmpl from './home.html';
routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider.state({
    name: 'home',
    url: '/',
    template: homeTmpl,
    controller: 'HomeController',
    controllerAs: 'home',
  });
}
