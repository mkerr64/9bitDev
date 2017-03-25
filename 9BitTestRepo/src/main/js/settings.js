//settings.js
//No recorded activity

import React from 'react';
import ReactDOM from 'react-dom';

var SettingsComponent = React.createClass({

    // Used to initialize state
    getInitialState () {
        return {
            //avatar : "",                                      //some kind of avatar ID?
            new_username : "",                                  //possible new username
            new_password : "",                                  //possible new password
            //current_password : ""                             //current password
            new_income : 0.00
        }
    },

    //store new_username in attribute
    handleUsernameChange(e){
        e.preventDefault();
        this.setState({new_username : e.target.value});
    },

    //store new_password in attribute
    handlePasswordChange(e){
        e.preventDefault();
        this.setState({new_password: e.target.value});
    },

    //store old_password in attribute
    /*handleOldPasswordChange(e){
     e.preventDefault();
     this.setState({old_password : e.target.value});
     },*/

    handleIncomeChange(e){
        e.preventDefault();
        this.setState({new_income: e.target.value});
    },

    //return to dashboard page
    handleGoBack(e){
        e.preventDefault();
        window.location = 'http://localhost:8080/dashboard';
    },

    //submit transaction
    handleProfileCheck(e) {
        // Prevents reinitialization
        e.preventDefault();

        let message = "";

        //check if category is selected
        if (!((this.state.new_username) || (this.state.new_password))){
            message += "Please change a field. ";
        }

        //if no invalid inputs, then proceed to add transaction to user account and switch back to dashboard,
        //otherwise display an error messsage and stay on the same page
        if (message == ""){
            let new_username = this.state.new_username;
            let new_password = this.state.new_password;
            let pass = 0
            let user = 0
            if(new_username) {
                fetch('http://localhost:8080/settings/setUsername?'
                    + 'username=' + new_username, {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then(res => {
                    if (res.ok) {
                    this.setState({user: 1});
                }
            else {
                    this.setState({user: 2});
                }
            });
            }
            if(new_password){
                fetch('http://localhost:8080/settings/setPassword?'
                    + 'password=' + new_password, {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then(res => {
                    if (res.ok) {
                    this.setState({pass: 1});
                }
            else {
                    this.setState({pass: 2});
                }
            });
            }
            if(user == 0){
                if(pass == 1){
                    this.setState({user_error: "Password updated"})
                }
                if(pass == 2){
                    this.setState({user_error: "Passwordn not updated"})
                }
            }
            else if(user == 1){
                if(pass == 1){
                    this.setState({user_error: "Username and password updated"})
                }
                if(pass == 2){
                    this.setState({user_error: "Username updated, password not updated."})
                }
            }
            else if(user == 2){
                if(pass == 1){
                    this.setState({user_error: "Username not updated, password updated."})
                }
                if(pass == 2){
                    this.setState({user_error: "Username and password not updated."})
                }
            }
        } else {
            this.setState({user_error: message});
        }
    },

    handleIncomeCheck(e) {
        // Prevents reinitialization
        e.preventDefault();

        let income_message = "";

        //check if category is selected
        if (!this.state.new_income){
            income_message += "Please enter your income.";
        }

        //if no invalid inputs, then proceed to change income
        //otherwise display an error messsage and stay on the same page
        if (income_message == ""){
            let new_income = this.state.new_income;
            fetch('http://localhost:8080/settings/addTransaction?'
                + 'new_income=' + new_income, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(res =>{
                if(res.ok){
                this.setState({income_error: "Income updated!"});
            }
        else{
                this.setState({income_error: "Income couldn't be updated."});
            }
        });
        } else {
            this.setState({income_error: income_message});
        }
    },

    handleAchievements(e){
        fetch('http://localhost:8080/transaction/achievement1?'
            , {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(res =>{
            if(res.ok){
            document.getElementById("1transaction").src = "http://imgur.com/yp98Nwz.jpg";
        }
    });

        fetch('http://localhost:8080/transaction/achievement5?'
            , {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(res =>{
            if(res.ok){
            document.getElementById("5transactions").src = "http://imgur.com/rfcYAkY.jpg";
        }
    });
    },


    render () {
        return (
            <body style={{margin:0, padding:0, fontSize:0}} onLoad={this.handleAchievements}>
                <title>My Account</title>


                {/* wrapper for SETTINGS page*/}
                <div style={{marginLeft:150, marginTop:20}}>
                    <font style={{fontFamily:"Arial"}}>
                        <font size="+5">My Account</font>
                        <div style={{marginTop:30}}>

                            {/* three piddly achievements */}
                            <div style = {{marginTop:30}}>
                                <font size="+2">Achievements</font> <br/>
                                <img id="accountcreated" src="http://imgur.com/PhbcBaA.jpg" width="200" height="325" alt=""/>
                                <img id="1transaction" src="http://imgur.com/LihzuRq.png" width="200" height="325" alt=""/>
                                <img id="5transactions" src="http://imgur.com/b8yATih.png" width="200" height="325" alt=""/>

                            </div>
                        </div>
                    </font>
                </div>
            </body>
        );
    }
});

export class EditSettings extends React.Component{
    render(){
        return(
            <div>
                <SettingsComponent/>
            </div>
        );
    }
};

ReactDOM.render(
    <div>
        <EditSettings/>
    </div>, document.getElementById('settings_form'));
