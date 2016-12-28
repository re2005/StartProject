angular
    .module('app')
    .config(routesConfig);

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/app');

    $stateProvider
        .state('app', {
            url: '/app',
            template: '<app></app>'
        })
        .state('app.home', {
            url: '/home',
            template: '<app-home></app-home>'
        })
        .state('app.page1', {
            url: '/page1',
            template: '<app-page1></app-page1>'
        });
}
