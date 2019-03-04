export default function (app) {
    app.filter('currencyFilter', currencyFilter);
    function currencyFilter () {
      return function(target, value) {
        const result = [];
  
        if (target) {
          target.forEach(function(item) {
            if (value !== item) {
              result.push(item);
            }
          });
        }
        return result;
      };
    }
  }