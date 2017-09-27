import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class ControlledInput extends React.Component{
    state = {
        fname: "",
        lname: "",
        uname: "",
        pword: ""
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

    pwordChange = (evt) => {
        this.setState({
            pword: evt.target.value
        });
    }

    submit = () => {
        var obj = {};
        obj.fname = this.state.fname;
        obj.lname = this.state.lname;
		obj.uname = this.state.uname;
        obj.password = this.state.pword;
		var jsonString= JSON.stringify(obj);
		console.log(jsonString);
        this.setState({
            fname: "",
            lname: "",
            uname: "",
            pword: ""
        });
    }

    reset = () => {
        this.setState({
            fname: "",
            lname: "",
            uname: "",
            pword: ""
        });
    }

    render() {
        return (
            <div className="form">
                <br />
                <h1>&nbsp;<u>ONLINE FORM</u></h1>
                &nbsp;Enter the first name here &nbsp;
                <p>&nbsp;<input value={this.state.fname} onChange={this.fnameChange} /> <br/><br/></p>
                &nbsp;Enter the last name here &nbsp;
                <p>&nbsp;<input value={this.state.lname} onChange={this.lnameChange} /> <br/><br/></p>
                &nbsp;Enter the user name here &nbsp;
                <p>&nbsp;<input value={this.state.uname} onChange={this.unameChange} /> <br/><br/></p>
                &nbsp;Enter your password here &nbsp;
                <p>&nbsp;<input type="password" value={this.state.pword} onChange={this.pwordChange} /> <br/><br/></p>
                <div className="button">
                    <p>
                        &nbsp;
                        <button onClick={this.submit}>Submit</button>
                        &nbsp;
                        <button onClick={this.reset}>Reset</button>
                    </p>
                </div>
                <br />
            </div>
        );
    }
}

ReactDOM.render(<div className="controlled-input"><ControlledInput /></div>, document.getElementById("container"));