CustomDateInputController.$inject = ['$scope', '$attrs', '$filter', '$timeout'] 
function CustomDateInputController($scope, $attrs, $filter, $timeout) {
  this.elementName = $attrs.name
  $scope.elementName = $attrs.name;
  var lastValidDay = '',
      lastValidMonth = '',
      lastValidYear = '';

  $scope.verifyDay = function (nval) {
      if (!!nval && (isNaN(nval) || Number(nval) < 0 || Number(nval) > 31)) {
          $scope.day = lastValidDay;
      }
      else {
          if (validateDate())
              lastValidDay = nval;
          if (!!nval && String(nval).length >= 2)
              document.getElementById($scope.elementName + 'Month').focus();
      }
  };

  $scope.verifyMonth = function (nval) {
      if (!!nval && (isNaN(nval) || Number(nval) < 0 || Number(nval) > 12)) {
          $scope.month = lastValidMonth;
      }
      else {
          if (validateDate())
              lastValidMonth = nval;
          if (!!nval && String(nval).length >= 2)
              document.getElementById($scope.elementName + 'Year').focus();
      }
  };

  $scope.verifyYear = function (nval) {
      if (validateDate())
          lastValidYear = nval;
      if (!!nval && (isNaN(nval) || Number(nval) < 0)) {
          $scope.year = lastValidYear;
      }
  };

  $scope.$watch('model', function (nval, oval) {
      if (nval == oval) return;
      setDate(nval);
  });

  $scope.$watch('unavailableBefore', updateMinAvailableDate);

  $scope.$watch('unavailableAfter', updateMaxAvailableDate);

  $scope.skipNextElement = skipNextElement;

  function setDate(value) {
      if (!value || isNaN(Date.parse(value))) {
          $scope.day = null;
          $scope.month = null;
          $scope.year = null;
      }
      else {
          var nDate = new Date(value);
          var day = ('00' + nDate.getDate()),
              month = ('00' + (nDate.getMonth() + 1)),
              year = '0000' + nDate.getFullYear();
          $scope.day = day.substring(day.length - 2);
          $scope.month = month.substring(month.length - 2);
          $scope.year = year.substring(year.length - 4);
      }
  }

  function validateDate() {
      var day = $scope.day || '',
          month = $scope.month || '',
          year = $scope.year || '',
          validationReturn = true;
      // check if all 3 fields have number greater than 0
      var hasAllFieldsWithNumbers = !isNaN(day) && Number(day) > 0 && !isNaN(month) && Number(month) > 0 && !isNaN(year) && (Number(year) > 0 && year.length == 4);
      if (!!day && !isNaN(day) && (Number(day) > 0 || day.length == 2) && !!month && !isNaN(month) && (Number(month) > 0 || month.length == 2) && !!year && !isNaN(year) && Number(year) > 1500) {
          var dateString = [$scope.year, $scope.month, $scope.day].join('/');
          if (!isNaN(Date.parse(dateString))) {
              debugger;
              var date = new Date(Number(year), Number(month) - 1, Number(day));
              if ((!$scope.minAvailableDate || $scope.minAvailableDate.getTime() <= date.getTime()) && (!$scope.maxAvailableDate || $scope.maxAvailableDate.getTime() >= date.getTime())) {
                  if (!$scope.model || $scope.model.getTime() != date.getTime()) $scope.model = date;
                  validationReturn = true;
              }
              else {
                  validationReturn = false;
              }
          }
          else {
              $scope.model = null;
              validationReturn = false;
          }
      }
      $scope.modelCtrl.$setValidity('custom-valid-date', hasAllFieldsWithNumbers && validationReturn);
      return validationReturn;
  }

  function updateMinAvailableDate(nval, oval) {
      if (nval == oval) return;
      if (!!nval) {
          nval.setHours(0);
          nval.setMinutes(0);
          nval.setSeconds(0);
          nval.setMilliseconds(0);
          $scope.minAvailableDate = new Date(nval);
      }
  }

  function updateMaxAvailableDate(nval, oval) {
      if (nval == oval) return;
      if (!!nval) {
          nval.setHours(0);
          nval.setMinutes(0);
          nval.setSeconds(0);
          nval.setMilliseconds(0);
          $scope.maxAvailableDate = new Date(nval);
      }
  }

  function skipNextElement(currentValue, nextElementName) {
      if (!!currentValue && String(currentValue).length >= 2)
          document.getElementById($scope.elementName + nextElementName).focus();
  }

  if ($scope.unavailableBefore) {
      updateMinAvailableDate($scope.unavailableBefore);
  }

  if ($scope.unavailableAfter) {
      updateMaxAvailableDate($scope.unavailableAfter);
  }

  setDate($scope.model);
};

export default CustomDateInputController;

//app.lazy.controller('CustomDateInputController', CustomDateInputController);            