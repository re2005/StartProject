define(['jquery'], function($) {
    'use strict';

    var _private = {

        init : function(){

            _private.anyFunction();
            
        },

        anyFunction : function(opt) {
            console.log('anyFunction');
        }

    };

    return {
        init: _private.init
    };

});
