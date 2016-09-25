# require-dir

Nodejs 

require all modules in a folder

获取一个目录内的所有模块


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