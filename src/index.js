import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class ControlledInput extends React.Component{
    state = {
        fname: "",
        lname: "",
        uname: ""
    }

    fnameChange = (evt) => {
        this.setState({
            fname: evt.target.value
        });
    }

    lnameChange = (evt) => {
        this.setState({
            lname: evt.target.value
        });
    }

    unameChange = (evt) => {
        this.setState({
            uname: evt.target.value
        });
    }

    submit = () => {
        console.log(this.state.fname, this.state.lname, this.state.uname);
        this.setState({
            fname: "",
            lname: "",
            uname: ""
        });
	}

    reset = () => {
        this.setState({
            fname: "",
            lname: "",
            uname: ""
        });
    }

    render() {
        return (
            <div className="form">
                <br />
				<h1>&nbsp;ONLINE FORM</h1>
                &nbsp;Enter the first name here:-&nbsp;
                <input value={this.state.fname} onChange={this.fnameChange} /> <br/><br/>
                &nbsp;Enter the last name here:-&nbsp;
                <input value={this.state.lname} onChange={this.lnameChange} /> <br/><br/>
                &nbsp;Enter the user name here:-&nbsp;
                <input value={this.state.uname} onChange={this.unameChange} /> <br/><br/>
				<div className="button">
				    &nbsp;
                    <button onClick={this.submit}>Submit</button>
				    &nbsp;
                    <button onClick={this.reset}>Reset</button>
                </div>
				<br />
            </div>
        );
    }
}

ReactDOM.render(<div className="controlled-input"><ControlledInput /></div>, document.getElementById("container"));