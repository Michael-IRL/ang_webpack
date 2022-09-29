import angular from 'angular';
import uirouter from 'angular-ui-router';
import greeting from '../../directive/greeting';
import customDateInput from '../../directive/customDateInput';
import customValidatorFactory from '../../directive/customValidation/customValidator.factory';
import customValidationDirective from '../../directive/customValidation/customValidation.directive';
import httpUser from '../../service/httpUsers.service';

import routing from './home.routes';
import { homeController } from './home.controller';

export default angular
  .module('app.home', [uirouter, greeting, httpUser, customDateInput, customValidatorFactory, customValidationDirective])
  .config(routing)
  .controller('HomeController', homeController).name;
