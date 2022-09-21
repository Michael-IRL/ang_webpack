import angular from 'angular';
import './greeting.css';

const greeting = () => {
  return {
    restrict: 'E',
    scope: {
      name: '=',
    },
    template: '<h1 class="red">Greeting {{name}}</h1>',
  };
};

export default angular.module('directives.greeting', []).directive('greeting', greeting).name;
