import React from 'react';
import ReactDOM from 'react-dom';

var SettingsComponent = React.createClass({

    // Used to initialize state
    getInitialState () {
        return {
            //avatar : "",                                        //some kind of avatar ID?
            new_username : "",                                  //possible new username
            new_password : "",                                  //possible new password
            current_password : ""                               //current password
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
    handleOldPasswordChange(e){
        e.preventDefault();
        this.setState({old_password : e.target.value});
    },

    //return to dashboard page
    handleGoBack(e){
        e.preventDefault();
        window.location = 'http://localhost:8080/dashboard';
    },

    //submit transaction
    handleCheck(e) {
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


    render () {
        return (
            <body style={{margin:0, padding:0, fontSize:0}}>
            <title>Add Transaction/Transfer</title>

            {/* Wrapper for all template elements*/}
            {/*<div>*/}
            {/*/!* Title bar elements*!/*/}
            {/*<div style={{width:190, height:80, background:'#43a047', display: "inline-block"}}></div>*/}
            {/*<div style={{height:80, width: 1380, background:'#66BB6A', display:"inline-block", position: "absolute", fontSize: 18}}>*/}
            {/*<h1 style={{color: "#FFFFFF", paddingLeft: 20, fontFamily: "Arial"}}>Budget Buddy </h1>*/}
            {/*</div>*/}

            {/*/!* Wrapper for all sidebar elements*!/*/}
            {/*<div style={{width:190, height: 675, position:"absolute", background: "#ECECEC"}}>*/}
            {/*/!* Profile picture box*!/*/}
            {/*<div style={{height: 200, width: 160, marginLeft: 'auto', marginRight: 'auto', marginTop: 75, marginBottom: 75, background: '#BEBEBE'}}>*/}
            {/*<img/> /!* Insert profile picture*!/*/}
            {/*</div>*/}

            {/* Sidebar Options*/}
            {/*<div style={{color:'#BEBEBE', textAlign: 'center', fontSize: 22, borderTopStyle: 'solid', paddingTop: 7, paddingBottom: 7, margin: 0}}>*/}
            {/*<p>Dashboard</p>*/}
            {/*<p>Transactions</p>*/}
            {/*<p>Achievements</p>*/}
            {/*<p>My Account</p>*/}
            {/*</div>*/}
            {/*</div>*/}
            {/*</div>*/}

            {/* wrapper for TRANSACTION page*/}
            <div style={{marginLeft:225, marginTop:20}}>
                <font style={{fontFamily:"Arial"}}>
                    <font size="+5">Edit Settings</font>
                    <div style={{marginTop:30}}>

                        {/* submit transaction form */}
                        <form onSubmit={this.handleCheck}>

                            {/* new username input*/}
                            <div style={{marginTop:20}}>
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

                            {/* old_password selection */}
                            <div style={{marginTop:40}}>
                                <font size="+2">Verify password:</font>
                                <br/>
                            </div>
                            <input ref="old_password" type="password" id="old_password" onChange={this.handleOldPasswordChange}/>

                            {/* submit transaction button*/}
                            <div style={{marginTop:30}}>
                                <input type="submit" value="Submit"/>
                            </div>
                        </form>

                        {/* go back to dashboard*/}
                        <div style={{marginTop:30}}>
                            <form onSubmit={this.handleGoBack}>
                                <input type="submit" value="Go back to dashboard"/>
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