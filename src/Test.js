import React, { Component } from 'react';
import ReactDOM from 'react-dom';

var Test = React.createClass({

  getInitialState: function(){
    return { available: '' };
  },

  componentDidMount: function() {
    console.info('componentDidMount');
  },

  onSubmit: function(event) {
    event.preventDefault();
    console.info(ReactDOM.findDOMNode(this.refs.telInput).value);
    var input = ReactDOM.findDOMNode(this.refs.telInput).value;
    $.ajax({
        url: "https://api.dixa.io/v1/validate/subdomain/"+input.value,
        dataType: 'json',
        cache: false,
        success: function(response) {
          this.setState({telInput: input, available: response.data.available});
        }.bind(this),
        error: function(xhr, status, err) {
          console.error(this.props.url, status, err.toString());
        }.bind(this)
      });
  },

  loadCommentsFromServer: function() {
  $.ajax({
    url: "https://api/v1/validate/subdomain/"+input.value,
    dataType: 'json',
    cache: false,
    success: function(data) {
      this.setState({data: data});
    }.bind(this),
    error: function(xhr, status, err) {
      console.error(this.props.url, status, err.toString());
    }.bind(this)
    });
  },

  render() {
    var name = this.props.name;
    var available = this.state.available.toString();

    return (
      <form className="test" onClick={this.onSubmit}>
        <h1>Testing {name}</h1>
        <input type="tel" ref="telInput" />
        <br/>
        <br/>
        <strong>Available:</strong><span className="error-message"> {available}</span>
        <br/>
        <br/>
        <button type="submit" >submit</button>
      </form>
    );
  }
});

export default Test;
