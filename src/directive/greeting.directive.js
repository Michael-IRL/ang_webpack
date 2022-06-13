import angular from 'angular';

const greeting = () => {
  return {
    restrict: 'E',
    scope: {
      name: '=',
    },
    template: '<h1>Greeting {{name}}</h1>',
  };
};

export default angular.module('directives.greeting', []).directive('greeting', greeting).name;
