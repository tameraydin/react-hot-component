/**
 * my-react-component v0.1.0 ()
 * Copyright 2015 You
 * Licensed under MIT
 */
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var SubComponent = require('./subComponent');
var AnotherSubComponent = require('./anotherSubComponent');

module.exports = {
  SubComponent: SubComponent,
  AnotherSubComponent: AnotherSubComponent
};


},{"./anotherSubComponent":2,"./subComponent":3}],2:[function(require,module,exports){
'use strict';

var React = require('react');

var AnotherSubComponent = React.createClass({displayName: "AnotherSubComponent",
  render:function() {
    return (
      React.createElement("h2", null, "Another component")
    );
  }
});

module.exports = AnotherSubComponent;

},{"react":"react"}],3:[function(require,module,exports){
'use strict';

var React = require('react');

var SubComponent = React.createClass({displayName: "SubComponent",
  render:function() {
    return (
      React.createElement("h1", null, "A component")
    );
  }
});

module.exports = SubComponent;

},{"react":"react"}]},{},[1]);
