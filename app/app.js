import routes from './app.routes'
import main from './leagues'
import seasons from './seasons'
import teams from './teams'

angular.module('sportMonksApp', ['ui.router', 'ngRoute', 'ngMaterial', main, seasons, teams])
  .config(function($urlRouterProvider, $sceDelegateProvider) {
    $urlRouterProvider.otherwise('/');

    $sceDelegateProvider.resourceUrlWhitelist([
      'self'
    ]);
  })