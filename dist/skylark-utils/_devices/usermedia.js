/**
 * skylark-utils - An Elegant HTML5 JavaScript Library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.5
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["../langx"],function(e){navigator.getUserMedia=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia;var t=e.Deferred,n=null;function a(){return a}return e.mixin(a,{isSupported:function(){return!!navigator.getUserMedia},start:function(e,a){var r=new t;return navigator.getUserMedia({video:!0,audio:!0},function(t){n=t,e.src=window.URL.createObjectURL(localMediaStream),e.onloadedmetadata=function(e){},r.resolve()},function(e){r.reject(e)}),r.promise},stop:function(){n&&(n.stop(),n=null)}}),a});
//# sourceMappingURL=../sourcemaps/_devices/usermedia.js.map
