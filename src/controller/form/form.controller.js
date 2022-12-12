FormController.$inject = ['$scope']

function FormController($scope){
  $scope.user = {};
  $scope.submitInformation = submitInformation;

  function submitInformation(){
    console.log($scope.form);
  }
}

export default FormController;