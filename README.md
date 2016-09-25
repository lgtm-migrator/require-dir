# require-dir

Nodejs 

require all modules in a folder

not use module.parent to avoid module cache 

获取一个目录内的所有模块

不使用module.parent 避免模块缓存

example

```js
'use strict'
const rd= require('require.d')

const test = rd(__dirname + '/test');

console.log(test)
```

result

```
{ a: { f3: [Function] }, f1: [Function], f2: [Function] }
```