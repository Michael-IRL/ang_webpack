import userTmpl from './user.html';
import user from './user.controller';

routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider.state({
    name: 'user',
    url: '/user',
    controller: user,
    template: userTmpl,
  });
}
