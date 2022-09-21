import angular from 'angular';
import uirouter from 'angular-ui-router';
import greeting from '../../directive/greeting';
import httpUser from '../../service/httpUsers.service';

import routing from './home.routes';
import { homeController } from './home.controller';

export default angular
  .module('app.home', [uirouter, greeting, httpUser])
  .config(routing)
  .controller('HomeController', homeController).name;
