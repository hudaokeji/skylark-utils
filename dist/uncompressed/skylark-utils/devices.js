define([
    "./skylark",
    "./langx",
    "./_devices/usermedia",
    "./_devices/vibrate"
], function(skylark,langx,usermedia,vibrate) {
    navigator.vibrate = navigator.vibrate
                        || navigator.webkitVibrate
                        || navigator.mozVibrate
                        || navigator.msVibrate;
    

    function devices() {
        return devices;
    }

    langx.mixin(devices, {
        usermedia: usermedia,
        vibrate : vibrate
    });


    return skylark.devices = devices;
});
