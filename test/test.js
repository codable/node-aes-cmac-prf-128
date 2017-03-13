const assert = require('assert');
const aesCmacPrf128 = require('../index');

describe('aesCmacPrf128', function() {
  describe('RFC4615 tests', function() {
    it('should pass with key lenngth 18', function() {
      let key = Buffer.from('000102030405060708090a0b0c0d0e0fedcb', 'hex');
      let msg = Buffer.from('000102030405060708090a0b0c0d0e0f10111213', 'hex');
      let expected = Buffer.from('84a348a4a45d235babfffc0d2b4da09a', 'hex');

      assert(expected.equals(aesCmacPrf128(key, msg)));
    });

    it('should pass with key lenngth 16', function() {
      let key = Buffer.from('000102030405060708090a0b0c0d0e0f', 'hex');
      let msg = Buffer.from('000102030405060708090a0b0c0d0e0f10111213', 'hex');
      let expected = Buffer.from('980ae87b5f4c9c5214f5b6a8455e4c2d', 'hex');

      assert(expected.equals(aesCmacPrf128(key, msg)));
    });

    it('should pass with key lenngth 10', function() {
      let key = Buffer.from('00010203040506070809', 'hex');
      let msg = Buffer.from('000102030405060708090a0b0c0d0e0f10111213', 'hex');
      let expected = Buffer.from('290d9e112edb09ee141fcf64c0b72f3d', 'hex');

      assert(expected.equals(aesCmacPrf128(key, msg)));
    });
  });
});
