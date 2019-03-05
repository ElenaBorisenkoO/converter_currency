// 'use strict';

import ConverterController from './converter.controller';
import converterTpl from './converter.html';

export default class ConverterComponent {
    constructor() {
        this.controller = ConverterController;
        this.controllerAs = 'ctr';
        this.templateUrl = converterTpl;
    }
}
