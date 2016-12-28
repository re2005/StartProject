(function (angular) {
    'use strict';

    function LoadingDirective($http) {
        return {
            retrict: 'A',
            link: function (scope, elm) {
                scope.isLoading = function () {
                    return $http.pendingRequests.length > 0;
                };
                scope.$watch(scope.isLoading, function (requests) {
                    if (requests) {
                        elm.removeClass('hide');
                    } else {
                        elm.addClass('hide');
                    }
                });
            }
        };
    }

    angular.module('app').directive('loading', LoadingDirective);
}(window.angular));
