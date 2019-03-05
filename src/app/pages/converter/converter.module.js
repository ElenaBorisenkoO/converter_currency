'use strict';

import ConverterComponent from './converter.component';

const converterPageModule = angular.module('converter-module', [
    'ui.router'
])
    .config(($stateProvider, $urlRouterProvider, rateServiceProvider) => {
        'ngInject';
        $urlRouterProvider.otherwise('/');
        rateServiceProvider.setAPI('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5');

        $stateProvider
        .state('converter',{
            name:'converter',
            url: '/converter',
            component: 'converter'
            })
    })
    .component('converter', new ConverterComponent());

export default converterPageModule;
