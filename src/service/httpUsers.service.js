import angular from 'angular';

class httpUser {
  constructor($http, $timeout) {
    this.http = $http;
  }
  getUser() {
    return this.http.get('https://jsonplaceholder.typicode.com/users/1');
  }
  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users/');
  }
}

export default angular.module('services.http-user', []).service('httpUser', httpUser).name;

httpUser.$inject = ['$http','$timeout'];
