/**
 * my-react-component v0.1.0 ()
 * Copyright 2015 You
 * Licensed under MIT ()
 */
"use strict";

(function (root, factory) {
  "use strict";

  if (typeof define === "function" && define.amd) {
    define(["react"], factory);
  } else if (typeof exports === "object") {
    module.exports = factory(require("react"));
  } else {
    root.Infinite = factory(root.React);
  }
})(undefined, function (React) {
  "use strict";

  var MyReactComponent = React.createClass({ displayName: "MyReactComponent",
    render: function render() {
      return React.createElement("h1", null, "Hello, world.");
    }
  });

  return MyReactComponent;
});