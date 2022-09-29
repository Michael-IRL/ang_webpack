preLoad.$inject = ['$rootScope']

function preLoad($rootScope){
  $rootScope.getIsVisible = getIsVisible;

  function getIsVisible(questionType) {
    if (!!$rootScope.questionSet) {
      var question = $rootScope.questionSet[questionType];
      if (!!question)
        return !!question.IsVisible;
    }
    return true;
  }
}

export { preLoad as default, preLoad }