define([
    "./skylark",
    "./langx"
], function(skylark,langx) {

    function storages() {
        return browser;
    }

    langx.mixin(storages, {
        vibrate : {
                isSupported : function() {
                    return !!navigator.vibrate;
                },

                start : function(duration) {
                    navigator.vibrate(duration);
                },

                stop : function() {
                    navigator.vibrate(0);
                }
        }
    });


    return skylark.storages = storages;
});
