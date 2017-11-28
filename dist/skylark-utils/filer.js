/**
 * skylark-utils - An Elegant HTML5 JavaScript Library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.3
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["./skylark","./langx","./eventer","./styler"],function(e,r,t,a){function n(e){function r(e){for(var r=e.length;r--;)e[r].size>f&&e.splice(r,1);i(e)}if(i=e,!o){var t=o=document.createElement("input");t.type="file",t.style.position="fixed",t.style.left=0,t.style.top=0,t.style.opacity=.001,document.body.appendChild(t),t.onchange=function(e){r(Array.prototype.slice.call(e.target.files)),t.value=""}}o.click()}var o,i,s=t.on,l=(t.attr,r.Deferred),f=1/0,d=function(){return d};return r.mixin(d,{dropzone:function(e,r){r=r||{};var n=r.hoverClass||"dropzone",o=r.dropped,i=0;return s(e,"dragenter",function(r){r.dataTransfer&&r.dataTransfer.types.indexOf("Files")>-1&&(t.stop(r),i++,a.addClass(e,n))}),s(e,"dragover",function(e){e.dataTransfer&&e.dataTransfer.types.indexOf("Files")>-1&&t.stop(e)}),s(e,"dragleave",function(r){r.dataTransfer&&r.dataTransfer.types.indexOf("Files")>-1&&(i--,0==i&&a.removeClass(e,n))}),s(e,"drop",function(r){r.dataTransfer&&r.dataTransfer.types.indexOf("Files")>-1&&(a.removeClass(e,n),t.stop(r),o&&o(r.dataTransfer.files))}),this},picker:function(e,r){r=r||{};var t=r.picked;return s(e,"click",function(e){e.preventDefault(),n(t)}),this},readFile:function(e,r){r=r||{};var t=new l,a=new FileReader;return a.onload=function(e){t.resolve(e.target.result)},a.onerror=function(e){var r=e.target.error.code;2===r?alert("please don't open this page using protocol fill:///"):alert("error code: "+r)},r.asArrayBuffer?a.readAsArrayBuffer(e):r.asDataUrl?a.readAsDataURL(e):r.asText?a.readAsText(e):a.readAsArrayBuffer(e),t.promise},writeFile:function(e,t){if(window.navigator.msSaveBlob)r.isString(e)&&(e=dataURItoBlob(e)),window.navigator.msSaveBlob(e,t);else{var a=document.createElement("a");e instanceof Blob&&(e=r.URL.createObjectURL(e)),a.href=e,a.setAttribute("download",t||"noname"),a.dispatchEvent(new CustomEvent("click"))}}}),e.filer=d});
//# sourceMappingURL=sourcemaps/filer.js.map
