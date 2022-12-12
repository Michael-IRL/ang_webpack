import angular from 'angular';

function jsSelect2($timeout) {
  return {
    restrict: 'AE',
    require: 'ngModel',
    replace: true,
    link: function ($scope, element, attrs, ngModel) {
      
      $(element).select2();

      $scope.$watch(attrs.ngModel, function () {
        $timeout(function () {
          element.trigger('change.select2');
        }, 100);
      });
    },
  };
}

export default angular.module('directives.jsSelect2', []).directive('jsSelect2', jsSelect2).name;
