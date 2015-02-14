(function (root, factory) {
  'use strict';

  if (typeof define === 'function' && define.amd) {
    define(['react'], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory(require('react'));
  } else {
    root.MyReactComponent = factory(root.React);
  }
}(this, function(React) {
  'use strict';

  var MyReactComponent = React.createClass({
    render() {
      return (
        <h1>Hello, world.</h1>
      );
    }
  });

  return MyReactComponent;
}));