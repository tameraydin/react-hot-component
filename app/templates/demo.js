'use strict';

var React = require('react'),
    <%= compNameCamelCase %> = require('./src/index'),
    SubComponent = <%= compNameCamelCase %>.SubComponent,
    AnotherSubComponent = <%= compNameCamelCase %>.AnotherSubComponent;

var DemoApp = React.createClass({
  render: function() {
    return (
      <div>
        <SubComponent />
        <AnotherSubComponent />
      </div>
    );
  }
});

React.render(<DemoApp />, document.body);
