'use strict';


import asyncTemplate from '!!file-loader?name=templates/[name].[ext]!./pages/async-page-example/async.html';


function routeConfig($urlRouterProvider, $stateProvider, resolverProvider) {
  'ngInject';


    $stateProvider
        .state('async', {
          url: '/async',
          templateUrl: asyncTemplate,
          controller: 'asyncController',
          resolve: {
            asyncPreloading: resolverProvider.asyncPagePrealoading
          }
        })
        //temporary version.Routs'll be moved to to their pages
          .state({
              name: 'autorization',
              url: '/autorizationt',
              template: '<p>Log in</p>'
          })
          .state({
              name: 'admin',
              url: '/admin',
              template: '<p>Here will be admin page</p>'
          })
          .state({
              name: 'user',
              url: '/user',
              template: '<p>Here will be user page</p>'
          });



  $urlRouterProvider.otherwise('/');

}

export default angular
  .module('index.routes', [])
    .config(routeConfig);

