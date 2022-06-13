import userTmpl from './user.html';
routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider.state('user', {
    url: '/user',
    template: userTmpl,
    controller: 'userController',
    controllerAs: 'user',
  });
}
