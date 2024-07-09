import angular from 'angular';
// Controllers
import AppCtrl from './app.controller';




appModule.component('appComponent', {
  templateUrl: 'app/app.template.html',
  controller: AppCtrl
});


// Create the module where our functionality can attach to
let appModule = angular.module('app', ['ngMaterial', 'ngMessages']).controller('AppCtrl', function() {
  this.myDate = new Date();
  this.isOpen = false;
});


export default appModule;
