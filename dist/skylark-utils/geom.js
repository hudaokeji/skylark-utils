/**
 * skylark-utils - An Elegant HTML5 JavaScript Library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.3
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["./skylark","./langx","./styler"],function(t,e,i){function o(t){for(var e=t.offsetParent||document.body;e&&!R.test(e.nodeName)&&"static"==i.css(e,"position");)e=e.offsetParent;return e}function n(t){var e=getComputedStyle(t);return{left:L(e.borderLeftWidth,t),top:L(e.borderTopWidth,t),right:L(e.borderRightWidth,t),bottom:L(e.borderBottomWidth,t)}}function r(t,e){if(void 0===e)return R.test(t.nodeName)?{top:0,left:0}:t.getBoundingClientRect();var i=o(t),h=r(i),f=u(t),d=n(i);return w(t,{top:e.top-h.top-f.top-d.top,left:e.left-h.left-f.left-d.left}),this}function h(t,e){return void 0===e?t.getBoundingClientRect():(r(t,e),H(t,e),this)}function f(t,e){return void 0==e?d(t).height:d(t,{height:e})}function d(t,e){if(void 0==e)return{width:t.clientWidth,height:t.clientHeight};var o="border-box"===i.css(t,"box-sizing"),r={width:e.width,height:e.height};if(o){var h=n(t);void 0!==r.width&&(r.width=r.width+h.left+h.right),void 0!==r.height&&(r.height=r.height+h.top+h.bottom)}else{var f=p(t);void 0!==r.width&&(r.width=r.width-f.left-f.right),void 0!==r.height&&(r.height=r.height-f.top-f.bottom)}return i.css(t,r),this}function l(t,e){return void 0==e?d(t).width:(d(t,{width:e}),this)}function s(t){var e=d(t),i=p(t);return{left:i.left,top:i.top,width:e.width-i.left-i.right,height:e.height-i.top-i.bottom}}function g(t){var e=t.documentElement,i=t.body,o=Math.max,n=o(e.scrollWidth,i.scrollWidth),r=o(e.clientWidth,i.clientWidth),h=o(e.offsetWidth,i.offsetWidth),f=o(e.scrollHeight,i.scrollHeight),d=o(e.clientHeight,i.clientHeight),l=o(e.offsetHeight,i.offsetHeight);return{width:n<h?r:n,height:f<l?d:f}}function c(t,e){return void 0==e?H(t).height:(H(t,{height:e}),this)}function u(t){var e=getComputedStyle(t);return{left:L(e.marginLeft),top:L(e.marginTop),right:L(e.marginRight),bottom:L(e.marginBottom)}}function p(t){var e=getComputedStyle(t);return{left:L(e.paddingLeft),top:L(e.paddingTop),right:L(e.paddingRight),bottom:L(e.paddingBottom)}}function a(t,e){if(void 0===e){var i=t.getBoundingClientRect();return{left:i.left+window.pageXOffset,top:i.top+window.pageYOffset}}var r=o(t),h=a(r),f=u(t),d=n(r);return w(t,{top:e.top-h.top-f.top-d.top,left:e.left-h.left-f.left-d.left}),this}function v(t,e){if(void 0===e){var i=t.getBoundingClientRect();return{left:i.left+window.pageXOffset,top:i.top+window.pageYOffset,width:Math.round(i.width),height:Math.round(i.height)}}return a(t,e),H(t,e),this}function w(t,e){if(void 0==e){var h=o(t),f=r(t),d=r(h),l=u(t),s=n(h);return{top:f.top-d.top-s.top-l.top,left:f.left-d.left-s.left-l.left}}var g={top:e.top,left:e.left};return"static"==i.css(t,"position")&&(g.position="relative"),i.css(t,g),this}function m(t,e){if(void 0===e){var i=o(t),f=h(t),d=r(i),l=u(t),s=n(i);return{top:f.top-d.top-s.top-l.top,left:f.left-d.left-s.left-l.left,width:f.width,height:f.height}}return w(t,e),H(t,e),this}function b(t,e){function i(t,e){var i,o,n=t;for(i=o=0;n&&n!=e&&n.nodeType;)i+=n.offsetLeft||0,o+=n.offsetTop||0,n=n.offsetParent;return{x:i,y:o}}var o,n,r,h,f,d,l=t.parentNode,s=i(t,l);return o=s.x,n=s.y,r=t.offsetWidth,h=t.offsetHeight,f=l.clientWidth,d=l.clientHeight,"end"==e?(o-=f-r,n-=d-h):"center"==e&&(o-=f/2-r/2,n-=d/2-h/2),l.scrollLeft=o,l.scrollTop=n,this}function W(t,e){var i="scrollLeft"in t;return void 0===e?i?t.scrollLeft:t.pageXOffset:(i?t.scrollLeft=e:t.scrollTo(e,t.scrollY),this)}function x(t,e){var i="scrollTop"in t;return void 0===e?i?t.scrollTop:t.pageYOffset:(i?t.scrollTop=e:t.scrollTo(t.scrollX,e),this)}function H(t,o){if(void 0==o)return e.isWindow(t)?{width:t.innerWidth,height:t.innerHeight}:e.isDocument(t)?g(document):{width:t.offsetWidth,height:t.offsetHeight};var r="border-box"===i.css(t,"box-sizing"),h={width:o.width,height:o.height};if(!r){var f=p(t),d=n(t);void 0!==h.width&&(h.width=h.width-f.left-f.right-d.left-d.right),void 0!==h.height&&(h.height=h.height-f.top-f.bottom-d.top-d.bottom)}return i.css(t,h),this}function T(t,e){return void 0==e?H(t).width:(H(t,{width:e}),this)}function y(){return y}var R=/^(?:body|html)$/i,L=e.toPixel;return e.mixin(y,{borderExtents:n,boundingPosition:r,boundingRect:h,clientHeight:f,clientSize:d,clientWidth:l,contentRect:s,getDocumentSize:g,height:c,marginExtents:u,offsetParent:o,paddingExtents:p,pagePosition:a,pageRect:v,relativePosition:w,relativeRect:m,scrollIntoView:b,scrollLeft:W,scrollTop:x,size:H,width:T}),t.geom=y});
//# sourceMappingURL=sourcemaps/geom.js.map
