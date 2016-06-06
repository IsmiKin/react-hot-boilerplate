import React, { Component } from 'react';
import ReactDOM from 'react-dom';

var Test = React.createClass({


  componentDidMount: function() {
    console.info('componentDidMount');
  },

  onSubmit: function(event) {
    event.preventDefault();
    console.info(ReactDOM.findDOMNode(this.refs.telInput).value);
  },


  render() {
    var name = this.props.name;
    return (
      <form className="test" onClick={this.onSubmit}>
        <h1>Testing {name}</h1>
        <input type="tel" ref="telInput" />
        <button type="submti" >submit</button>
      </form>
    );
  }
});

export default Test;
