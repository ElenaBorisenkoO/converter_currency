'use strict';
export default function (app) {
    app.provider('rateService', serviceConverter);
    
    function serviceConverter() {
      let API = '';
  
      return {
        setAPI: apiUrl => (API = apiUrl),
  
        list: [],
  
        $get: ['$http', function($http) {
          return {
            getRates: () => {
              $http.get(API)
                .then(({ data }) => {
                  angular.copy([...data], this.list);
                });
  
              return this.list;
            },
            computeRate(base, target) {
              return base / target;
            },
            computeFee(data, fee, buy) {
              const sign = buy ? 1 : -1;
  
              return data * fee * sign / 100;
            },
  
            calculateAmount(currencyFrom, currencyTo, amount, buy) {
              if (!currencyFrom.$$hashKey || !currencyTo.$$hashKey) {
                return 0;
              }
  
              const rate = buy ? currencyFrom.buy / currencyTo.buy : currencyFrom.sale / currencyTo.sale;
  
              return {
                rate,
                'count': amount * rate
              };
            }
          };
        }]
      };
    }
  }