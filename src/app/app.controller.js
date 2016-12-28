(function (angular) {
    'use strict';

    /**
     * The app page controller
     * @param {Object} $state
     * @constructor
     */
    function AppController($state) {

        $state.go(this.defaultPage);
    }


    /**
     * @type {string}
     */
    AppController.prototype.defaultPage = 'app.home';

    angular.module('app').controller('appController', AppController);
}(window.angular));
