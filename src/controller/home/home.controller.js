export function homeController($rootScope, $scope, customValidatorFactory, httpUser) {
  this.name = 'World';
  this.number = 5;
  this.staff = [];
  this.staffSelected = "Select name";

  this.changeName = () => {
    this.name = 'angular-tips';
  };

  this.$onInit = function(){
    console.log('init');
    httpUser.getUsers().then((response)=>{
      if(response){
        this.staff = response.data;
      }
    })    
  }

  let numberValidation = customValidatorFactory.create(
    'numberValidation',
    [numberValidationTrigger],
    numberIsValid);

  let startDateValidation = customValidatorFactory.create(
    'startDateValidation',
    [startDateTrigger],
    startDateIsValid
  );

  this.numberValidation = [numberValidation]

  this.startDateValidation = [startDateValidation]

  function numberValidationTrigger(){
    return this.number
  }

  function numberIsValid(value,elem){
    return value < 10;
  }

  function startDateTrigger(){
    return this.startDate;
  }
  
  function startDateIsValid(value,elem){
    return !!this.startDate;
  }
  


  // this.dateValidation = [customValidatorFactory.create('custom', [function () { return $rootScope.covers.startDate; }], function (value, elem) {
  //   if (!$rootScope.getIsVisible('ChooseStart')) {
  //     return true;
  //   }

  //   return $rootScope.covers.startDate >= this.minDate && $rootScope.covers.startDate <= this.maxDate;
  // })];
}

homeController.$inject = ['$scope','CustomValidatorFactory','httpUser'];
