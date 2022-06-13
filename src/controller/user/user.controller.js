function user($scope, httpUser) {
  $scope.userId = '';
  $scope.name = '';
  $scope.fetchUser = () => {
    httpUser.getUser().then((response) => {
      $scope.userId = response.data.userId;
      $scope.name = response.data.title;
    });
  };
}

export default user;

user.$inject = ['$scope', 'httpUser'];
