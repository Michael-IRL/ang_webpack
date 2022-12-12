import angular from "angular";
import routes from "./form.routes";
import FormController from './form.controller'

export default angular
  .module('app.form',[])
  .config(routes)
  .controller('FormController',FormController)
  .name;