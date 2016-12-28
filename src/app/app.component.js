(function (angular) {
    'use strict';

    angular
        .module('app')
        .component('app', {
            templateUrl: 'app/app.template.html',
            controller: 'appController',
            controllerAs: 'ctrl'
        });
}(window.angular));


