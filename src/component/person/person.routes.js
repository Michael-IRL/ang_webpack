routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider.state({
    name: 'person',
    url: '/person',
    component: 'person',
    resolve: {
      person: function (httpUser) {
        return httpUser.getUser();
      },
    },
  });
}
