export class HomeController {
  constructor() {
    this.name = 'World';
  }

  changeName() {
    this.name = 'angular-tips';
  }
}

export function homeController($scope) {
  $scope.name = 'World';
  $scope.changeName = () => {
    $scope.name = 'angular-tips';
  };
}

homeController.$inject = ['$scope'];
