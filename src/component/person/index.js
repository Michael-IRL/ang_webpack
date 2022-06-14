import angular from 'angular';
import uirouter from 'angular-ui-router';

import httpUsers from '../../service/httpUsers.service';

import personTmpl from './person.html';
import routes from './person.routes';

let component = {
  bindings: { person: '<' },
  template: personTmpl,
};

export default angular.module('app.person', [uirouter, httpUsers]).config(routes).component('person', component).name;
