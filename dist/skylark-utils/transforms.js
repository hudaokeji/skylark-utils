/**
 * skylark-utils - An Elegant HTML5 JavaScript Library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.5-beta
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["./skylark","./langx","./browser","./datax","./styler"],function(a,n,t,r,o){function i(a,n,t){var r=Math.cos(a),o=Math.sin(a);return{M11:r*n,M12:-o*t,M21:o*n,M22:r*t}}function e(a,n){return a>0&&a>-n?n:a<0&&a<n?-n:0}function f(a,n){var t=i(n.radian,n.y,n.x);o.css(a,d,"matrix("+t.M11.toFixed(16)+","+t.M21.toFixed(16)+","+t.M12.toFixed(16)+","+t.M22.toFixed(16)+", 0, 0)")}function c(a,n){return n?void r.data(a,"transform",n):(n=r.data(a,"transform")||{},n.radian=n.radian||0,n.x=n.x||1,n.y=n.y||1,n)}function u(a){return function(){var t=n.makeArray(arguments),r=t.shift(),o=c(r);t.unshift(o),a.apply(this,t),f(r,o),c(r,o)}}function s(){return s}var d=t.normalizeCssProperty("transform"),h={vertical:function(a){a.radian=Math.PI-a.radian,a.y*=-1},horizontal:function(a){a.radian=Math.PI-a.radian,a.x*=-1},rotate:function(a,n){a.radian=n*Math.PI/180},left:function(a){a.radian-=Math.PI/2},right:function(a){a.radian+=Math.PI/2},scale:function(a,n){var t=e(a.y,n),r=e(a.x,n);t&&r&&(a.y+=t,a.x+=r)},zoomin:function(a){h.scale(a,Math.abs(a.zoom))},zoomout:function(a){h.scale(a,-Math.abs(a.zoom))}};return["vertical","horizontal","rotate","left","right","scale","zoom","zoomin","zoomout"].forEach(function(a){s[a]=u(h[a])}),n.mixin(s,{reset:function(a){var n={x:1,y:1,radian:0};f(a,n),c(a,n)}}),a.transforms=s});
//# sourceMappingURL=sourcemaps/transforms.js.map
