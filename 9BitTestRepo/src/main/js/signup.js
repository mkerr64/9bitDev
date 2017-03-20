/**
 * Created by Emily on 2017-03-03.
 */

import React from 'react';
import ReactDOM from 'react-dom';

var AccountSignup = React.createClass({

    // Used to initialize state
    getInitialState () {
        return {
            name : "",
            password : "",
            verifyPassword : "",
            success : ""
        }
    },

    handleNameChange (e) {
        // Prevent following the link.
        e.preventDefault();
        this.setState({ name : e.target.value});
    },

    handlePasswordChange (e) {
        // Prevent following the link.
        e.preventDefault();
        this.setState({ password : e.target.value});
    },

    handleVerifyPassword (e) {
        e.preventDefault();
        this.setState({verifyPassword: e.target.value});
    },

    handleSubmit(e) {
        // Prevents reinitialization
        e.preventDefault();
        let name = this.state.name;
        let password = this.state.password;
        let verifyPassword = this.state.verifyPassword;

        if (password.localeCompare(verifyPassword) != 0){
            e.preventDefault();
            this.setState({ success: "Passwords do not match!"})
        }
        else {
            fetch('http://localhost:8080/accountCreation/signup?'
                + 'userName=' + name + "&password=" + password, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(res => {
                //if account and password was created
                if (res.ok) {
                    e.preventDefault();
                    this.setState({success: 'Account created! Username: ' + name + ' Password: '+ password});
                    //window.location = 'http://localhost:8080/dashboard';
                }
                //if account and password was not created
                else {
                    this.setState({success: 'Account already exists! Username: ' + name + ' Password: '+ password});
                }
            })
        }
    },


    switchpage(e){
        e.preventDefault();
        window.location = 'http://localhost:8080';
    },

    switchdashboard(e){
        e.preventDefault();
        window.location = 'http://localhost:8080/dashboard';
    },


    render () {
        return (
            <body style={{backgroundColor:'#ECECEC', height:700}}>

            <div style={{height:50, margin:'auto', background: '#ECECEC'}}>
            </div>

            <table style={{marginTop:50 ,backgroundColor:'#43a047', margin:'auto', width:"500", height:"417", border:"0", cellpadding:"0", cellspacing:"5"}}>
                <tbody style={{margin:'auto', align:'center'}}>
                <tr>
                    <td style={{align:'left', height:'151', colspan:'2', margin:'auto'}}><blockquote>
                        <h1>
                            <img id="pic" src="http://i.imgur.com/v085Nmb.png" width="115" height="133" alt=""/>
                            Budget Buddy
                        </h1>
                    </blockquote></td>
                </tr>


                <tr>
                    <td>

                        <form onSubmit={this.handleSubmit}>

                            <label>
                                <p style={{paddingLeft:150}}>Username: <input type="text" defaultValue={this.state.name} onChange={this.handleNameChange}/>
                                </p>
                                <p style={{paddingLeft:150}}>Password: <input type="password" defaultValue={this.state.password} onChange={this.handlePasswordChange}/>
                                </p>
                                <p style={{paddingLeft:100}}>Re-Enter Password: <input type="password" defaultValue={this.state.verifyPassword} onChange={this.handleVerifyPassword}/>
                                </p>
                            </label>

                            <p style={{paddingLeft:200}}><input type="submit" value="Sign Up"></input>
                            </p>


                            {this.state.success}

                        </form>

                        <form onSubmit={this.switchpage}>
                            <p style={{paddingLeft:200}}><input type="submit" value="Go Back"></input>
                            </p></form>


                    </td>
                </tr>

                <td width="175"></td></tbody>
            </table>
            </body>
        );
    }

});

export class Signup extends React.Component {
    render(){
        return(
            <div>
                <AccountSignup/>
            </div>
        );
    }
}

ReactDOM.render(
    <div>
        <Signup/>
    </div>, document.getElementById('statusFeed'));