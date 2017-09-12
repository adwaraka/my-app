import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// eslint-disable-next-line
var ControlledInput = React.createClass({
    getInitialState: function() {
        return {
            fname: "",
            lname: ""
        };
    },

    fnameChange: function(evt) {
        this.setState({
            fname: evt.target.value
        });
    },

    lnameChange: function(evt) {
        this.setState({
            lname: evt.target.value
        });
    },

    submit: function() {
        console.log(this.state.fname, this.state.lname);
        this.setState({
            fname: "",
            lname: ""
        });
	},

    reset: function() {
        this.setState({
            fname: "",
            lname: ""
        });
    },

    render: function() {
        return (
            <div>
                Enter the name here :-&nbsp;
                <input value={this.state.fname} onChange={this.fnameChange} /> <br/><br/>
                Enter the last name here :-&nbsp;
                <input value={this.state.lname} onChange={this.lnameChange} /> <br/><br/>
                <button onClick={this.submit}>Submit</button>&nbsp;
                <button onClick={this.reset}>Reset</button>
            </div>
		);
    }
});

ReactDOM.render(<div><ControlledInput /></div>, document.getElementById("container"));