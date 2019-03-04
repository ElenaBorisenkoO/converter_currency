'use strict';

export default function (app) {
    app.directive('toggleCheckbox', toggleCheckboxDirective);
    
    function toggleCheckboxDirective () {
      return {
        restrict: 'A',
        require: 'ngModel',
        link(scope, element, attributes, ngModelController) {
          element.on('change.toggle', function() {
            const checked = element.prop('checked');
            ngModelController.$setViewValue(checked);
          });
          ngModelController.$render = function() {
            element.bootstrapToggle(ngModelController.$viewValue ? 'on' : 'off');
          };
          scope.$on('$destroy', function() {
            element.off('change.toggle');
            element.bootstrapToggle('destroy');
          });
          const initialValue = scope.$eval(attributes.ngModel);
          element.prop('checked', initialValue);
        }
      };
    }
  }