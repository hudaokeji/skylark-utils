/**
 * skylark-utils - An Elegant HTML5 JavaScript Library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.3
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["./skylark","./langx","./_devices/usermedia","./_devices/vibrate"],function(i,e,a,r){function t(){return t}return navigator.vibrate=navigator.vibrate||navigator.webkitVibrate||navigator.mozVibrate||navigator.msVibrate,e.mixin(t,{usermedia:a,vibrate:r}),i.devices=t});
//# sourceMappingURL=sourcemaps/devices.js.map
