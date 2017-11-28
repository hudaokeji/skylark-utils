/**
 * skylark-utils - An Elegant HTML5 JavaScript Library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.3
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["./skylark","./langx","./noder","./datax","./eventer","./finder","./geom","./styler","./fx"],function(t,n,e,r,i,o,a,s,c){function f(t,n){return function(){var e=this,r=w.call(arguments),i=$.map(e,function(e,i){return t.apply(n,[e].concat(r))});return $(j(i))}}function u(t,n,e){return function(r){var i=(w.call(arguments),this.map(function(i,o){return t.apply(n,e?[o]:[o,r])}));return e&&r?i.filter(r):i}}function h(t,n,e){return function(r,i){w.call(arguments);void 0===i&&(i=r,r=void 0);var o=this.map(function(o,a){return t.apply(n,e?[a,r]:[a,i,r])});return e&&i?o.filter(i):o}}function l(t,n){return function(){var e=this,r=w.call(arguments);return this.each(function(e){t.apply(n,[this].concat(r))}),e}}function p(t,n,e){return function(r){var i=this,o=w.call(arguments);return x.call(i,function(i,a){C(i,r,a,e(i));t.apply(n,[i,r].concat(o.slice(1)))}),i}}function d(t,n){return function(){var e=this,r=w.call(arguments);return y.call(e,function(e){return t.apply(n,[e].concat(r))})}}function v(t,e,r){return function(i,o){var a=this,s=w.call(arguments);return n.isPlainObject(i)||n.isDefined(o)?(x.call(a,function(n,i){var a;a=r?C(n,o,i,r(n)):o,t.apply(e,[n].concat(s))}),a):a[0]?t.apply(e,[a[0],i]):void 0}}function g(t,e,r){return function(i){var o=this;return n.isDefined(i)?(x.call(o,function(n,o){var a;a=r?C(n,i,o,r(n)):i,t.apply(e,[n,a])}),o):o[0]?t.apply(e,[o[0]]):void 0}}var m,y=Array.prototype.some,b=Array.prototype.push,w=(Array.prototype.every,Array.prototype.concat,Array.prototype.slice),A=(Array.prototype.map,Array.prototype.filter),x=Array.prototype.forEach,k=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,C=n.funcArg,O=n.isArrayLike,N=n.isString,j=n.uniq,E=n.isFunction,T=n.type,z=n.isArray,q=(n.isWindow,n.isDocument),S=n.isObject,D=(n.isPlainObject,n.compact,n.flatten,n.camelCase,n.dasherize,o.children,n.klass({klassName:"SkNodeList",init:function(t,r){var i,a,s,c,f=this;return t&&(f.context=r=r||e.doc(),N(t)?(f.selector=t,i="<"===t.charAt(0)&&">"===t.charAt(t.length-1)&&t.length>=3?[null,t,null]:k.exec(t),i?i[1]?(a=e.createFragment(t),n.isPlainObject(r)&&(c=r)):(s=o.byId(i[2],e.ownerDoc(r)),s&&(a=[s])):a=o.descendants(r,t)):a=z(t)?t:[t]),a&&(b.apply(f,a),c&&f.attr(c)),f}},Array)),P=function(){function t(t,r,i){return function(i){var o,a=n.map(arguments,function(t){return o=T(t),"object"==o||"array"==o||null==t?t:e.createFragment(t)});return a.length<1?this:(this.each(function(n){t.apply(r,[this,a,n>0])}),this)}}m=function(t){return t instanceof D},init=function(t,n){return new D(t,n)};var y=function(t,n){return E(t)?void i.ready(function(){t(y)}):m(t)?t:n&&m(n)&&N(t)?n.find(t):init(t,n)};y.fn=D.prototype,n.mixin(y.fn,{map:function(t){return y(n.map(this,function(n,e){return t.call(n,e,n)}))},slice:function(){return y(w.apply(this,arguments))},get:function(t){return void 0===t?w.call(this):this[t>=0?t:t+this.length]},toArray:function(){return w.call(this)},size:function(){return this.length},remove:l(e.remove,e),each:function(t){return n.each(this,t),this},filter:function(t){return E(t)?this.not(this.not(t)):y(A.call(this,function(n){return o.matches(n,t)}))},add:function(t,n){return y(j(this.concat(y(t,n))))},is:function(t){return this.length>0&&o.matches(this[0],t)},not:function(t){var n=[];if(E(t)&&void 0!==t.call)this.each(function(e){t.call(this,e)||n.push(this)});else{var e="string"==typeof t?this.filter(t):O(t)&&E(t.item)?w.call(t):y(t);this.forEach(function(t){e.indexOf(t)<0&&n.push(t)})}return y(n)},has:function(t){return this.filter(function(){return S(t)?e.contains(this,t):y(this).find(t).size()})},eq:function(t){return t===-1?this.slice(t):this.slice(t,+t+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},find:u(o.descendants,o),closest:function(t,n){var e=this[0],r=!1;for("object"==typeof t&&(r=y(t));e&&!(r?r.indexOf(e)>=0:o.matches(e,t));)e=e!==n&&!q(e)&&e.parentNode;return y(e)},parents:u(o.ancestors,o),parentsUntil:h(o.ancestors,o),parent:u(o.parent,o),children:u(o.children,o),contents:f(e.contents,e),siblings:u(o.siblings,o),empty:l(e.empty,e),pluck:function(t){return n.map(this,function(n){return n[t]})},show:l(c.show,c),replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var n=E(t);if(this[0]&&!n)var e=y(t).get(0),r=e.parentNode||this.length>1;return this.each(function(i){y(this).wrapAll(n?t.call(this,i):r?e.cloneNode(!0):e)})},wrapAll:function(t){if(this[0]){y(this[0]).before(t=y(t));for(var n;(n=t.children()).length;)t=n.first();y(t).append(this)}return this},wrapInner:function(t){var n=E(t);return this.each(function(e){var r=y(this),i=r.contents(),o=n?t.call(this,e):t;i.length?i.wrapAll(o):r.append(o)})},unwrap:function(t){return 0===this.parent().children().length?this.parent(t).not("body").each(function(){y(this).replaceWith(document.createTextNode(this.childNodes[0].textContent))}):this.parent().each(function(){y(this).replaceWith(y(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:l(c.hide,c),toggle:function(t){return this.each(function(){var n=y(this);(void 0===t?"none"==n.css("display"):t)?n.show():n.hide()})},prev:function(t){return y(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return y(this.pluck("nextElementSibling")).filter(t||"*")},html:g(e.html,e,e.html),text:g(r.text,r,r.text),attr:v(r.attr,r,r.attr),removeAttr:l(r.removeAttr,r),prop:v(r.prop,r,r.prop),data:v(r.data,r,r.data),removeData:l(r.removeData,r),val:g(r.val,r,r.val),offset:g(a.pageRect,a,a.pageRect),style:v(s.css,s),css:v(s.css,s),index:function(t){return t?this.indexOf(y(t)[0]):this.parent().children().indexOf(this[0])},hasClass:d(s.hasClass,s),addClass:p(s.addClass,s,s.className),removeClass:p(s.removeClass,s,s.className),toggleClass:p(s.toggleClass,s,s.className),scrollTop:g(a.scrollTop,a),scrollLeft:g(a.scrollLeft,a),position:function(){if(this.length){var t=this[0];return a.relativePosition(t)}},offsetParent:f(a.offsetParent,a)}),y.fn.detach=y.fn.remove,y.fn.size=g(a.size,a),y.fn.width=g(a.width,a,a.width),y.fn.height=g(a.height,a,a.height),["width","height"].forEach(function(t){var n=t.replace(/./,function(t){return t[0].toUpperCase()});y.fn["outer"+n]=function(n,e){if(arguments.length?"boolean"!=typeof n&&(e=n,n=!1):(n=!1,e=void 0),void 0===e){var r=this[0];if(!r)return;var i=a.size(r);if(n){var o=a.marginExtents(r);i.width=i.width+o.left+o.right,i.height=i.height+o.top+o.bottom}return"width"===t?i.width:i.height}return this.each(function(r,i){var o={},s=a.marginExtents(i);"width"===t?(o.width=e,n&&(o.width=o.width-s.left-s.right)):(o.height=e,n&&(o.height=o.height-s.top-s.bottom)),a.size(i,o)})}}),y.fn.innerWidth=g(a.width,a,a.width),y.fn.innerHeight=g(a.height,a,a.height);e.traverse;return y.fn.after=t(e.after,e),y.fn.prepend=t(e.prepend,e),y.fn.before=t(e.before,e),y.fn.append=t(e.append,e),y.fn.insertAfter=function(t){return y(t).after(this),this},y.fn.insertBefore=function(t){return y(t).before(this),this},y.fn.appendTo=function(t){return y(t).append(this),this},y.fn.prependTo=function(t){return y(t).prepend(this),this},y}();return function(t){t.fn.on=l(i.on,i),t.fn.off=l(i.off,i),t.fn.trigger=l(i.trigger,i),"focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(n){t.fn[n]=function(t,e){return 0 in arguments?this.on(n,t,e):this.trigger(n)}}),t.fn.one=function(t,e,r,i){return n.isString(e)||n.isFunction(i)||(i=r,r=e,e=null),n.isFunction(r)&&(i=r,r=null),this.on(t,e,r,i,1)},t.fn.animate=l(c.animate,c),t.fn.show=l(c.show,c),t.fn.hide=l(c.hide,c),t.fn.toogle=l(c.toogle,c),t.fn.fadeTo=l(c.fadeTo,c),t.fn.fadeIn=l(c.fadeIn,c),t.fn.fadeOut=l(c.fadeOut,c),t.fn.fadeToggle=l(c.fadeToggle,c)}(P),function(t){t.fn.end=function(){return this.prevObject||t()},t.fn.andSelf=function(){return this.add(this.prevObject||t())},"filter,add,not,eq,first,last,find,closest,parents,parent,children,siblings".split(",").forEach(function(n){var e=t.fn[n];t.fn[n]=function(){var t=e.apply(this,arguments);return t.prevObject=this,t}})}(P),function(t){t.fn.query=t.fn.find,t.fn.place=function(t,r){return n.isString(t)?t=o.descendant(t):m(t)&&(t=t[0]),this.each(function(n,i){switch(r){case"before":e.before(t,i);break;case"after":e.after(t,i);break;case"replace":e.replace(t,i);break;case"only":e.empty(t),e.append(t,i);break;case"first":e.prepend(t,i);break;default:e.append(t,i)}})},t.fn.addContent=function(t,e){return t.template&&(t=n.substitute(t.template,t)),this.append(t)},t.fn.replaceClass=function(t,n){return this.removeClass(n),this.addClass(t),this}}(P),t.query=P});
//# sourceMappingURL=sourcemaps/query.js.map
