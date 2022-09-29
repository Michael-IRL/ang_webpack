

export function homeController($rootScope, $scope, customValidatorFactory) {
  $scope.name = 'World';
  $scope.number = 5;
  $scope.changeName = () => {
    $scope.name = 'angular-tips';
  };

  let numberValidation = customValidatorFactory.create(
    'numberValidation',
    [numberValidationTrigger],
    numberIsValid);

  let startDateValidation = customValidatorFactory.create(
    'startDateValidation',
    [startDateTrigger],
    startDateIsValid
  );

  $scope.numberValidation = [numberValidation]

  $scope.startDateValidation = [startDateValidation]

  function numberValidationTrigger(){
    return $scope.number
  }

  function numberIsValid(value,elem){
    return value < 10;
  }

  function startDateTrigger(){
    return $scope.startDate;
  }
  
  function startDateIsValid(value,elem){
    return !!$scope.startDate;
  }
  


  // $scope.dateValidation = [customValidatorFactory.create('custom', [function () { return $rootScope.covers.startDate; }], function (value, elem) {
  //   if (!$rootScope.getIsVisible('ChooseStart')) {
  //     return true;
  //   }

  //   return $rootScope.covers.startDate >= $scope.minDate && $rootScope.covers.startDate <= $scope.maxDate;
  // })];
}

homeController.$inject = ['$rootScope','$scope','CustomValidatorFactory'];
