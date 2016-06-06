import React, { Component } from 'react';

import Test from './Test.js';

var App = React.createClass({
  render() {
    return (
      <div>
        <h1>Hello and hi, world.</h1>
        <Test name="Jakob" count={1}  />
      </div>
    );
  }
});

export default App;
