AES-CMAC-PRF-128
================

Simple wrapper for aes-cmac to implement RFC4615's AES-CMAC-PRF-128 algorythm.

Example
-------

```
const aesCmacPrf128 = require('aes-cmac-prf-128');

let key = Buffer.from('000102030405060708090a0b0c0d0e0fedcb', 'hex');
let msg = Buffer.from('000102030405060708090a0b0c0d0e0f10111213', 'hex');
console.log(aesCmacPrf128(key, msg));
```

API
----

```
/**
 * @param key {String|Buffer}
 * @param msg {String|Buffer}
 * @returns Buffer
 */
aesCmacPrf128(key, msg);
```
