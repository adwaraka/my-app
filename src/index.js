import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

var ControlledInput = React.createClass({
    getInitialState: function() {
        return {
            value: ""
        };
    },

    handleChange: function(evt) {
        this.setState({
            value: evt.target.value
        });
    },

    submit: function() {
        console.log(this.state.value);
        this.setState({
            value: ""
        });
	},

    reset: function() {
        this.setState({
            value: ""
        });
    },

    render: function() {
        return (
            <div>
                Enter the name here :-&nbsp;
                <input value={this.state.value} onChange={this.handleChange} /> <br/><br/>
				<button onClick={this.submit}>Submit</button>&nbsp;
                <button onClick={this.reset}>Reset</button>
            </div>
		);
    }
});

ReactDOM.render(<div><ControlledInput /></div>,
document.getElementById("container"));