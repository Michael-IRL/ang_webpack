import angular from 'angular';

class httpUser {
  constructor($http) {
    this.http = $http;
  }
  getUser() {
    return this.http.get('https://jsonplaceholder.typicode.com/todos/1');
  }
}

export default angular.module('services.http-user', []).service('httpUser', httpUser).name;

httpUser.$inject = ['$http'];
