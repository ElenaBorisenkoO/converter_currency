'use strict';

export default class MainController {
    constructor(rateService, converterConstants, $scope) {
        'ngInject';
        this.rateService=rateService;
        this.converterConstants =converterConstants; 
        this.rate = rateService.rate;
        this.indicator = true;
        this.currencyFromAmmount = 0;
        this.currencyToAmmount = 0;
        this.data = rateService.getRates();
        this.persentagesList = converterConstants.persentagesList;
        this.baseCurrency = { ccy: 'Choose currency' };
        this.targetCurrency = { ccy: 'Target currency' };
        this.fee = 0;
        this.tax = 0;
        $scope.$watchGroup(['ctr.indicator', 'ctr.currencyFromAmmount'], () => {
            this.refreshOnDataChanged();
          }); 
    }

    refreshOnDataChanged (){
        const result = this.rateService.calculateAmount(this.baseCurrency, this.targetCurrency,
        this.currencyFromAmmount, this.indicator);
        this.currencyToAmmount = result['count'];
        this.rate = result.rate;
        this.tax = this.rateService.computeFee(this.currencyToAmmount, this.fee, this.indicator);
      }

      changeTargetCurrency (item, target) {
        if (target.ccy === this.baseCurrency.ccy) {
          this.baseCurrency = item;
        } else {
          this.targetCurrency = item;
        }
        this.refreshOnDataChanged();
      }

      changePersantage (elem) {
        this.fee = elem;
        this.refreshOnDataChanged();
      }          
}
