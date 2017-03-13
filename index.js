'use strict';

const aesCmac = require('node-aes-cmac').aesCmac;

function aesCmacPrf128(key, message)
{
  if (key instanceof String)
    key = Buffer.from(key);

  if (!(key instanceof Buffer))
    throw new Error('key must be string or buffer');

  if (key.length !== 16)
    key = aesCmac(Buffer.alloc(16), key, {
      returnAsBuffer: true
    });

  if (message instanceof String)
    message = Buffer.from(message);

  if (!(key instanceof Buffer))
    throw new Error('message must be string or buffer');

  return aesCmac(key, message, {
    returnAsBuffer: true
  });
}

module.exports = aesCmacPrf128;
