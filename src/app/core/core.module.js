'use strict';

const shared = angular.module('core.shared', []);

import validationTestDirective from './directives/validation-test/validation-test.directive';
import toggleCheckboxDirective from './directives/directive_toggle';

import constants from './services/constants';
import storeFactory from './services/store.factory';
import resolverProvider from './services/resolver.provider';
import serviceConverter from './services/servis_coverter';
import currencyFilter from './filters/filter';


validationTestDirective(shared);

constants(shared);
storeFactory(shared);
resolverProvider(shared);
serviceConverter(shared);
currencyFilter(shared);
toggleCheckboxDirective(shared);


export default shared;
