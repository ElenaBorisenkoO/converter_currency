'use strict';


import  _ from 'lodash/core';


import moment from 'moment';


export default class MainController {
    constructor($log) {
        'ngInject';
        this.$log = $log;
        this.awesomeThings = ['Angular', 'Webpack', 'babel'];
    }

    $onInit() {
        
        this.lodash_version = _.VERSION;
        
        
        this.moment_version = moment.version;
        
    }
}