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
        if ( (!this.state.new_username) ||(!this.state.new_password) ){
            message += "Please change a field. ";
        }

        //if no invalid inputs, then proceed to add transaction to user account and switch back to dashboard,
        //otherwise display an error messsage and stay on the same page
        if (message == ""){
            let new_username = this.state.new_username;
            let category = this.state.new_password;
            let old_password = this.state.old_password;
            fetch('http://localhost:8080/userAccount/addTransaction?'
                + 'new_username=' + new_username + '&category=' + category + '&old_password=' + old_password, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(res =>{
                if(res.ok){
                    this.setState({error: "Transaction added!"});
                }
                else{
                    this.setState({error: "Transaction couldn't be added."});
                }
            });
        } else {
            this.setState({error: message});
        }
    },

    handleIncomeCheck(e) {
        // Prevents reinitialization
        e.preventDefault();

        let message = "";

        //check if category is selected
        if (!this.state.new_income){
            message += "Please enter your income. ";
        }

        //if no invalid inputs, then proceed to change income
        //otherwise display an error messsage and stay on the same page
        if (message == ""){
            let new_income = this.state.new_income;
            fetch('http://localhost:8080/userAccount/addTransaction?'
                + 'new_income=' + new_income, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(res =>{
                if(res.ok){
                    this.setState({error: "Income updated!"});
                }
                else{
                    this.setState({error: "Income couldn't be updated."});
                }
            });
        } else {
            this.setState({error: message});
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

                        {/* budget form */}
                        <div style={{marginTop:60}}>
                            <font size="+2">Edit Budget</font>
                            <form onSubmit={this.handleIncomeCheck}>
                                <div style={{marginTop:30}}>
                                    <font size="+2">New Income:</font>
                                    <br/>
                                </div>
                                <font>$</font>
                                <input type="number" min="0.01" step="0.01" max="10000"  ref="new_income" name="new_income" defaultValue={this.state.new_income} onChange={this.handleIncomeChange}/>
                            </form>

                            <div style={{marginTop:30}}>
                                <input type="submit" value="Submit Income Change"/>
                            </div>
                        </div>

                        {/* profile change form */}
                        <div style={{marginTop:30}}>
                            <form onSubmit={this.handleProfileCheck}>

                                {/* new username input*/}
                                <div style={{marginTop:30}}>
                                    <font size="+2">New Username:</font>
                                    <br/>
                                </div>
                                <input type="text" ref="new_username" name="new_username" defaultValue={this.state.new_username} onChange={this.handleUsernameChange}/>

                                {/* new password input*/}
                                <div style={{marginTop:20}}>
                                    <font size="+2">New Password:</font>
                                    <br/>
                                </div>
                                <input type="password" ref="new_username" name="new_username" defaultValue={this.state.new_username} onChange={this.handlePasswordChange}/>

                                {/*/!* old_password selection *!/
                                 <div style={{marginTop:40}}>
                                 <font size="+2">Verify password:</font>
                                 <br/>
                                 </div>
                                 <input ref="old_password" type="password" id="old_password" onChange={this.handleOldPasswordChange}/>*/}

                                {/* submit profile changes button*/}
                                <div style={{marginTop:30}}>
                                    <input type="submit" value="Submit Profile Changes"/>
                                </div>
                            </form>
                        </div>

                        {/* error message display */}
                        <div style={{marginTop:60}}>
                            <font size="+1" color="red">
                                <b>
                                    {this.state.error}
                                </b>
                            </font>
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