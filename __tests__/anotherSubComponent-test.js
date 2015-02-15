jest.dontMock('../src/anotherSubComponent');

describe('anotherSubComponent', function() {

  it('should work', function() {
    var React = require('react/addons');
    var AnotherSubComponent = require('../dist/my-react-component');

    expect(1).toBe(1);
  });
});
