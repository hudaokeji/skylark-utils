# skylark-utils
An Universal HTML5 Javascript Library, Powerful and Concise.
- Powerful  
The skylark-utils library provides a comprehensive utility functions, let you to develop a HTML5 applications more simpler and more able to focus on the application logic itself.
- Concise  
The skylark-utils library pursues a high modularity and high reusability，and was written to be straightforward and easy to read. Naturally, when the bug occurs, the program will be easier to debug. 

## What's included
The modules contained in the library are listed by category as follows:

base api
-------------

- async  
This module defines some APIs about Asynchronous function
- browser  
This module defines some APIs about brower compatibility.
- css  
This module defines some APIs about stylesheet and rule.
- langx  
This module defines some APIs that extend language functionality
- scripter  
This module defines some APIs wrapping script load and unload.

node level api
----------------

- datax  
This module defines some APIs wrapping DOM attribute and property.
- dnd  
This module defines some APIs wrapping DOM drag and drop.
- eventer  
This module defines some APIs wrapping DOM event.
- filer  
This module defines some APIs wrapping local file reand and write.
- finder  
This module defines some APIs wrapping dom query.
- fx  
This module defines some APIs wrapping DOM transition and animation.
- geom  
This module defines some APIs wrapping DOM geometry.
- mover  
This module defines some APIs wrapping DOM move.
- noder  
This module defines some APIs wrapping DOM construction.
- styler  
This module defines some APIs wrapping dom style and class.

visual element api
-------------------
- velm  
This module implemented VisuleElement type for wrapping a visual dom node.  
VisualElment provides a number of methods encapsulated from the basic utility module function and supports chain calls.

query api
-------------

- query   
This module provides a similar jquery api,  [skykark-jquery](https://github.com/skylarkjs/skylark-jquery) based on this module provides an API that is fully compatible with [jquery](https://jquery.com/), and the code is simpler and more productive.


## Installation
There are multiple ways to install the skylark-uitls library. 
- npm  
npm install skylark-utils --save
- bower  
bower install skylark-utils
- cdn  
http://registry.skylarkjs.org/packages/skylark-utils/v0.9.0/skylark-utils.js    or  
http://registry.skylarkjs.org/packages/skylark-utils/v0.9.0/uncompressed/skylark-utils.js 

## Usage

- Using the skylark-utils library for a AMD module.  
```js
require({
  'paths': {
     'skylark-utils': 'http://registry.skylarkjs.org/packages/skylark-utils/v0.9.0/skylark-utils' 
  }
}, ['skylark-utils'], function(sutils) {
  // sutils.mover.movable(elm,options) 
});
```

- Using the skylark-utils library for a global object named skylark.  
```js
<script type="text/javascript" src="http://registry.skylarkjs.org/packages/skylark-utils/v0.9.0/skylark-utils.js"></script>
<script>
// skylarkjs.mover.movable(elm,options);
</script>
```

- Using the skylark-utils library for a AMD package.  
```js
require({
  'packages': [
    { 'name': 'skylark-utils', 'location': 'http://registry.skylarkjs.org/packages/skylark-utils/v0.9.0/skylark-utils/' }
  ]
}, ['skylark-utils/mover'], function(mover) {
  // mover.movable(elm,options);
});
```

## API Document
skyalrk.js application framwork contains the above modules, so the module API documentation can refer to sklark.js's api doc.

- http://www.skylarkjs.org/api

## Examples
Please access the following site for the execution of each example program under the "/examples" directory.

- http://www.skylarkjs.org/examples
- http://examples.skylarkjs.org/skylark-utils/

## License

Released under the [MIT](http://opensource.org/licenses/MIT)
