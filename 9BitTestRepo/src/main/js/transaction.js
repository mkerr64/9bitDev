import React from 'react';
import ReactDOM from 'react-dom';

var TransactionComponent = React.createClass({

    // Used to initialize state
    getInitialState () {
        return {
            amount : "",                                        //transaction amount
            choice : "",                                        //category choice
            date: "",                                           //transaction date
            error : ""                                          //error message to be displayed if invalid input
        }
    },

    //store amount in attribute
    handleAmountChange(e){
        e.preventDefault();
        this.setState({amount : e.target.value});
    },

    //store amount in attribute
    handleCategoryChange(e){
        e.preventDefault();
        this.setState({choice: this.refs.select.value});
    },

    //store amount in attribute
    handleDateChange(e){
        e.preventDefault();
        this.setState({date : e.target.value});
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
        this.setState({choice : this.refs.select.value});         //get category choice and date from user
        let message = "";

        //check if the amount is a valid number
        if (isNaN(this.state.amount)){
            message +="Please enter valid amount. ";
        } else {
                if (this.state.amount == ""){
                    message += "Please enter amount. ";
                }
        }

        //check if category is selected
        if ( (this.state.choice == "selectcategory") ||(this.state.choice == "") ){
            message += "Please choose a category. ";
        }

        //check if date is selected
        if (this.state.date == ""){
            message += "Please choose a date. ";
        }

        //if no invalid inputs, then proceed to add transaction to user account and switch back to dashboard,
        //otherwise display an error messsage and stay on the same page
        if (message == ""){
            let amount = this.state.amount;
            let category = this.state.choice;
            let date = this.state.date;
            fetch('http://localhost:8080/userAccount/addTransaction?'
                + 'amount=' + amount + '&category=' + category + '&date=' + date, {
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
                    <font size="+5">Add Transaction/Transfer</font>
                    <div style={{marginTop:30}}>

                        {/* submit transaction form */}
                        <form onSubmit={this.handleCheck}>

                            {/* amount input*/}
                            <font size="+2">Amount</font>
                            <br/>
                            <font size="+2">$</font>
                            <input type="text" ref="amount" name="amount" defaultValue={this.state.amount} onChange={this.handleAmountChange}/>

                            {/* category selection */}
                            <div style={{marginTop:20}}><font size="+2">Category:</font><br/></div>
                            <div style={{marginTop:5}}>
                                <select ref="select" id="select" onChange={this.handleCategoryChange}>
                                    <option value="selectcategory"> -- Please select -- </option>
                                    <option value="food">Food</option>
                                    <option value="housing">Housing</option>
                                    <option value="utilities">Utilities</option>
                                    <option value="leisure">Leisure</option>
                                    <option value="transportation">Transportation</option>
                                    <option value="savings">Savings</option>
                                    <option value="school">School</option>
                                    <option value="clothing">Clothing</option>
                                    <option value="other">Other</option>
                                </select>
                                <br/>
                            </div>

                            {/* date selection */}
                            <div style={{marginTop:20}}>
                                <font size="+2">Date of Transaction:</font>
                                <br/>
                            </div>
                            <input ref="date" type="date" id="date" onChange={this.handleDateChange}/>

                            {/* submit transaction button*/}
                            <div style={{marginTop:30}}>
                                <input type="submit" value="Add"/>
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

export class Transaction extends React.Component{
    render(){
        return(
            <div>
                <TransactionComponent/>
            </div>
        );
    }
};

ReactDOM.render(
    <div>
        <Transaction/>
    </div>, document.getElementById('statusFeed'));