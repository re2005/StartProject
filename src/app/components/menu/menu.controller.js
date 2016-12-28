(function (angular) {
    'use strict';

    /**
     * The menu page controller
     * @constructor
     */
    function MenuController($location) {
        this._location = $location;

    }

    /**
     * Is given value corresponds with current location
     * @param viewLocation
     * @return {boolean}
     */
    MenuController.prototype.isActive = function (viewLocation) {
        return viewLocation === this._location.path();
    };

    angular.module('app').controller('menuController', MenuController);

}(window.angular));
