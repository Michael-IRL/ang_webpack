import angular from 'angular';
import routing from './app.config';
import uirouter from 'angular-ui-router';
import home from './controller/home';
import user from './controller/user';

angular.module('app', [uirouter, home, user]).config(routing);
