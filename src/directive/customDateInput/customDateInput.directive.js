import angular from 'angular';
import customDateTemplate from './template.html';
import customDateController from './customDateInput.controller';

/*
<div id="startDate" name="startDate" class="form-controlGroup-inputWrapper" custom-date-input ng-model="$root.covers.startDate" ng-required="!!$root.covers.startDate && submitted && $root.getIsVisible('ChooseStart')" custom-validation="dateValidation" unavailable-before="minDate" unavailable-after="maxDate" analytics-tracker="covers"></div> 
*/

function customDateInputDirective() {
    return {
        restrict: 'A',
        require: 'ngModel',
        replace: false,
        scope: {
            model: '=ngModel',
            required: '=?',
            unavailableAfter: '=?',
            unavailableBefore: '=?'
        },
        controller: customDateController,
        template: customDateTemplate,
        /*template: require('./template.html'),*/
        link: function (scope, element, attrs, modelCtrl){                
                scope.elementName = attrs.name;
                scope.modelCtrl = modelCtrl;                           
            }            
        
    }
}

export default angular.module('directive.customDateInput',[]).directive('customDateInput', customDateInputDirective).name;