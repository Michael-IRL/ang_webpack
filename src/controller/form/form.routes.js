import formTempl from './form.html';

routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider.state({
    name: 'form',
    url: '/',
    template: formTempl,
    controller: 'FormController',
    controllerAs: 'form',
  });
}