# require-dir

Nodejs 

require all modules in a folder

test
│- f1.js                                                                                                                                                
│- f2.js                                                                                                                                                
└─ a                                                                                                                                                     
     │- f3.js                      

example

```js
'use strict'
const ra = require('./index.js')

const test = ra(__dirname + '/test');

console.log(test)
```

result

```
{ a: { f3: [Function] }, f1: [Function], f2: [Function] }
```