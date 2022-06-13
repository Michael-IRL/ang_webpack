import angular from 'angular';
import uirouter from 'angular-ui-router';

import httpUsers from '../../service/httpUsers.service';

import routing from './user.routes';
import user from './user.controller';

export default angular.module('app.user', [uirouter, httpUsers]).config(routing).controller('userController', user)
  .name;
