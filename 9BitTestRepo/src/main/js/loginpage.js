/**
 * Created by Emily on 2017-03-03.
 */

import React from 'react';
import ReactDOM from 'react-dom';

var AccountLogin = React.createClass({

    // Used to initialize state
    getInitialState () {
        return {
            name : "",
            password : "",
            success : ""
        }
    },

    handleNameChange (e) {
        // Prevent following the link.
        e.preventDefault();
        this.setState({ name: e.target.value, success : "   "});
    },

    handlePasswordChange (e) {
        // Prevent following the link.
        e.preventDefault();
        this.setState({ password: e.target.value, success : "   "});
    },


    handleSubmit(e) {
        // Prevents reinitialization
        e.preventDefault();
        let name = this.state.name;
        let password = this.state.password;

        fetch('http://localhost:8080/accountCreation/login?'
            + 'userName=' + name + "&password=" + password)

            .then(res =>{
                //if account and password was found
                if(res.ok){
                    this.setState({success: 'Account found'});
                    //window.location = 'http://localhost:8080/dashboard';
                }
                //if account and password was not found
                else{
                    this.setState({success: 'Account not found'});
                }
            })

    },

    switchpage(e){
        e.preventDefault();
        window.location = 'http://localhost:8080/signup';
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
                    <td style={{paddingLeft:150}}>

                        <form onSubmit={this.handleSubmit}>

                            <label>
                                <p>Username: <input type="text" defaultValue={this.state.name} onChange={this.handleNameChange}/>
                                </p>
                                <p>Password: <input type="password" defaultValue={this.state.password} onChange={this.handlePasswordChange}/>
                                </p>
                            </label>

                            <p style={{paddingLeft:50}}><input type="submit" value="Login"></input>
                            </p>
                        </form>

                        {this.state.success}

                    </td>
                </tr>

                <tr>
                    <td style={{paddingLeft:150, align:'center', height:'132', margin:'auto'}}>
                        <p>Don't have an account with us?<br></br>
                            Sign up now!</p>

                        <form onSubmit={this.switchpage}>

                            <p style={{paddingLeft:60}}><input type="submit" value="Sign Up"/>
                            </p>

                        </form>


                    </td>
                </tr>
                <td width="175"></td></tbody>
            </table>
            </body>
        );
    }
});

export class AccountCreation extends React.Component {
    render(){
        return(
            <div>
                <AccountLogin/>
            </div>
        );
    }
}


ReactDOM.render(
    <div>
        <AccountCreation/>
    </div>, document.getElementById('statusFeed'));
