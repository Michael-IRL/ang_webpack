import angular from 'angular'

function CustomValidatorFactory() {  
  return {
    create: function (name, triggers, isValid, formattedValue) {      
      return {
        name: name,
        isValid: isValid,
        triggers: triggers,
        formattedValue: formattedValue,
      }
    },
  }
}

export default angular
  .module('app.CustomValidatorFactory', [])
  .factory('CustomValidatorFactory', CustomValidatorFactory).name;
