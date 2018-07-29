/**
 * skylark-utils - An Elegant HTML5 JavaScript Library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.5-beta
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["./skylark","./langx","./noder","./geom","./styler","./datax","./transforms","./query"],function(e,t,i,n,s,o,r,a){function h(e,i,n){var s=new c(e,i,n),o=new t.Deferred;return s.on("progress",function(e){o.progress(e)}),s.on("done",function(e){o.resolve(e.images)}),s.on("fail",function(e){o.reject(e)}),o.promise}function d(e,o){function a(){s.css(c,{top:(l.height-c.offsetHeight)/2+"px",left:(l.width-c.offsetWidth)/2+"px"}),r.reset(c),s.css(c,{visibility:"visible"}),f&&f()}function h(){}function d(){u=s.css(e,["position","overflow"]),"relative"!=u.position&&"absolute"!=u.position&&s.css(e,"position","relative"),s.css(e,"overflow","hidden"),c=new Image,s.css(c,{position:"absolute",border:0,padding:0,margin:0,width:"auto",height:"auto",visibility:"hidden"}),c.onload=a,c.onerror=h,i.append(e,c),o.url&&m(o.url)}function m(e){c.style.visibility="hidden",c.src=e}function g(){i.remove(c),s.css(e,u),c=c.onload=c.onerror=null}var c,u={},l=n.clientSize(e),f=o.loaded;o.failered;d();var v={load:m,dispose:g};return["vertical","horizontal","rotate","left","right","scale","zoom","zoomin","zoomout","reset"].forEach(function(e){v[e]=function(){var i=t.makeArray(arguments);i.unshift(c),r[e].apply(null,i)}}),v}function m(){return m}var g={1:!0,9:!0,11:!0},c=t.Evented.inherit({init:function(e,i,n){"string"==typeof e&&(e=document.querySelectorAll(e)),this.elements=t.makeArray(e),this.options=t.mixin({},this.options),"function"==typeof i?n=i:t.mixin(this.options,i),n&&this.on("always",n),this.getImages(),setTimeout(function(){this.check()}.bind(this))},options:{},getImages:function(){this.images=[],this.elements.forEach(this.addElementImages,this)},addElementImages:function(e){"IMG"==e.nodeName&&this.addImage(e),this.options.background===!0&&this.addElementBackgroundImages(e);var t=e.nodeType;if(t&&g[t]){for(var i=e.querySelectorAll("img"),n=0;n<i.length;n++){var s=i[n];this.addImage(s)}if("string"==typeof this.options.background){var o=e.querySelectorAll(this.options.background);for(n=0;n<o.length;n++){var r=o[n];this.addElementBackgroundImages(r)}}}},addElementBackgroundImages:function(e){var t=getComputedStyle(e);if(t)for(var i=/url\((['"])?(.*?)\1\)/gi,n=i.exec(t.backgroundImage);null!==n;){var s=n&&n[2];s&&this.addBackground(s,e),n=i.exec(t.backgroundImage)}},addImage:function(e){var t=new u(e);this.images.push(t)},addBackground:function(e,t){var i=new l(e,t);this.images.push(i)},check:function(){function e(e){setTimeout(function(){t.progress(e)})}var t=this;return this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?void this.images.forEach(function(t){t.one("progress",e),t.check()}):void this.complete()},progress:function(e){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded,this.trigger(t.createEvent("progress",{img:e.img,element:e.element,message:e.message,isLoaded:e.isLoaded})),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&console&&console.log("progress: "+message,e.target,e.element)},complete:function(){var e=this.hasAnyBroken?"fail":"done";this.isComplete=!0,this.trigger(t.createEvent(e,{images:this.images}))}}),u=t.Evented.inherit({init:function(e){this.img=e},check:function(){var e=this.getIsImageComplete();return e?void this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),void(this.proxyImage.src=this.img.src))},getIsImageComplete:function(){return this.img.complete&&void 0!==this.img.naturalWidth},confirm:function(e,i){this.isLoaded=e,this.trigger(t.createEvent("progress",{img:this.img,element:this.img,message:i,isLoaded:e}))},handleEvent:function(e){var t="on"+e.type;this[t]&&this[t](e)},onload:function(){this.confirm(!0,"onload"),this.unbindEvents()},onerror:function(){this.confirm(!1,"onerror"),this.unbindEvents()},unbindEvents:function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)}}),l=u.inherit({init:function(e,t){this.url=e,this.element=t,this.img=new Image},check:function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url;var e=this.getIsImageComplete();e&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},unbindEvents:function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},confirm:function(e,i){this.isLoaded=e,this.trigger(t.createEvent("progress",{img:this.img,element:this.element,message:i,isLoaded:e}))}});return a.fn.imagesLoaded=function(e,t){return h(this,e,t)},m.transform=function(e,t){},["vertical","horizontal","rotate","left","right","scale","zoom","zoomin","zoomout","reset"].forEach(function(e){m.transform[e]=r[e]}),t.mixin(m,{loaded:h,viewer:d}),e.images=m});
//# sourceMappingURL=sourcemaps/images.js.map
