var expect = require('expect.js'),
    satNode = require('..');

describe('sat-node', function() {
  it('should say hello', function(done) {
    expect(satNode()).to.equal('Hello, world');
    done();
  });
});
