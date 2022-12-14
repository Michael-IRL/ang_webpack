import angular from 'angular';
import routing from './app.config';
import uirouter from 'angular-ui-router';
import home from './controller/home';
import user from './controller/user';
import person from './component/person';
import form from './controller/form';

import preLoad from './utility/preLoad.functions';

angular
  .module('app', [
    uirouter,
    home, 
    user, 
    person,
    form,
  ])
  .config(routing)
  .run(preLoad);
