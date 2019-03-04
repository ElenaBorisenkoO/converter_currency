'use strict';

import MainComponent from './main.component';

const mainPageModule = angular.module('main-module', [
    'ui.router'
])
    .config(($stateProvider, $urlRouterProvider, rateServiceProvider) => {
        'ngInject';
        rateServiceProvider.setAPI('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5');

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('main', {
                url: '/',
                component: 'main'
            })
    })
    .component('main', new MainComponent());

export default mainPageModule;
