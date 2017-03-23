import React from 'react';
import ReactDOM from 'react-dom';

var TransactionComponent = React.createClass({

    // Used to initialize state
    getInitialState () {
        return {
            amount : "",                                        //transaction amount
            choice : "",                                        //category choice
            date: "",                                           //transaction date
            error : " "                                         //error message to be displayed if invalid input
        }
    },

    //store amount in attribute
    handleAmountChange(e){
        e.preventDefault();
        this.setState({amount : e.target.value});
    },

    //select food category
    handleFood(e){
        e.preventDefault();
        this.setState({choice: "food"});
        document.getElementById("food").src = "http://i.imgur.com/rDAfnDb.jpg";
        document.getElementById("housing").src = "http://imgur.com/vizSGpL.png";
        document.getElementById("leisure").src = "http://i.imgur.com/5CM1RDo.png";
        document.getElementById("transportation").src = "http://i.imgur.com/i6RsSYD.png";
        document.getElementById("savings").src = "http://imgur.com/doYW41L.png";
        document.getElementById("school").src = "http://i.imgur.com/N2JdLLN.png";
        document.getElementById("clothing").src = "http://i.imgur.com/rrfDBAq.png";
        document.getElementById("other").src = "http://i.imgur.com/coq5XEj.png";
    },

    //select housing category
    handleHousing(e){
        e.preventDefault();
        this.setState({choice: "housing"});
        document.getElementById("food").src = "http://i.imgur.com/YTFVZ0E.png";
        document.getElementById("housing").src = "http://imgur.com/zCfBceg.jpg";
        document.getElementById("leisure").src = "http://i.imgur.com/5CM1RDo.png";
        document.getElementById("transportation").src = "http://i.imgur.com/i6RsSYD.png";
        document.getElementById("savings").src = "http://imgur.com/doYW41L.png";
        document.getElementById("school").src = "http://i.imgur.com/N2JdLLN.png";
        document.getElementById("clothing").src = "http://i.imgur.com/rrfDBAq.png";
        document.getElementById("other").src = "http://i.imgur.com/coq5XEj.png";
    },


    //select leisure category
    handleLeisure(e){
        e.preventDefault();
        this.setState({choice: "leisure"});
        document.getElementById("food").src = "http://i.imgur.com/YTFVZ0E.png";
        document.getElementById("housing").src = "http://imgur.com/vizSGpL.png";
        document.getElementById("leisure").src = "http://i.imgur.com/Zbe7zeN.jpg";
        document.getElementById("transportation").src = "http://i.imgur.com/i6RsSYD.png";
        document.getElementById("savings").src = "http://imgur.com/doYW41L.png";
        document.getElementById("school").src = "http://i.imgur.com/N2JdLLN.png";
        document.getElementById("clothing").src = "http://i.imgur.com/rrfDBAq.png";
        document.getElementById("other").src = "http://i.imgur.com/coq5XEj.png";
    },

    //select transportation category
    handleTransportation(e){
        e.preventDefault();
        this.setState({choice: "transportation"});
        document.getElementById("food").src = "http://i.imgur.com/YTFVZ0E.png";
        document.getElementById("housing").src = "http://imgur.com/vizSGpL.png";
        document.getElementById("leisure").src = "http://i.imgur.com/5CM1RDo.png";
        document.getElementById("transportation").src = "http://i.imgur.com/EDP6SlO.jpg";
        document.getElementById("savings").src = "http://imgur.com/doYW41L.png";
        document.getElementById("school").src = "http://i.imgur.com/N2JdLLN.png";
        document.getElementById("clothing").src = "http://i.imgur.com/rrfDBAq.png";
        document.getElementById("other").src = "http://i.imgur.com/coq5XEj.png";
    },

    //select savings category
    handleSavings(e){
        e.preventDefault();
        this.setState({choice: "savings"});
        document.getElementById("food").src = "http://i.imgur.com/YTFVZ0E.png";
        document.getElementById("housing").src = "http://imgur.com/vizSGpL.png";
        document.getElementById("leisure").src = "http://i.imgur.com/5CM1RDo.png";
        document.getElementById("transportation").src = "http://i.imgur.com/i6RsSYD.png";
        document.getElementById("savings").src = "http://i.imgur.com/0QeVgBE.jpg";
        document.getElementById("school").src = "http://i.imgur.com/N2JdLLN.png";
        document.getElementById("clothing").src = "http://i.imgur.com/rrfDBAq.png";
        document.getElementById("other").src = "http://i.imgur.com/coq5XEj.png";
    },

    //select school category
    handleSchool(e){
        e.preventDefault();
        this.setState({choice: "school"});
        document.getElementById("food").src = "http://i.imgur.com/YTFVZ0E.png";
        document.getElementById("housing").src = "http://imgur.com/vizSGpL.png";
        document.getElementById("leisure").src = "http://i.imgur.com/5CM1RDo.png";
        document.getElementById("transportation").src = "http://i.imgur.com/i6RsSYD.png";
        document.getElementById("savings").src = "http://imgur.com/doYW41L.png";
        document.getElementById("school").src = "http://i.imgur.com/9IpnNcW.jpg";
        document.getElementById("clothing").src = "http://i.imgur.com/rrfDBAq.png";
        document.getElementById("other").src = "http://i.imgur.com/coq5XEj.png";
    },

    //select clothing category
    handleClothing(e){
        e.preventDefault();
        this.setState({choice: "clothing"});
        document.getElementById("food").src = "http://i.imgur.com/YTFVZ0E.png";
        document.getElementById("housing").src = "http://imgur.com/vizSGpL.png";
        document.getElementById("leisure").src = "http://i.imgur.com/5CM1RDo.png";
        document.getElementById("transportation").src = "http://i.imgur.com/i6RsSYD.png";
        document.getElementById("savings").src = "http://imgur.com/doYW41L.png";
        document.getElementById("school").src = "http://i.imgur.com/N2JdLLN.png";
        document.getElementById("clothing").src = "http://i.imgur.com/aYrA47i.jpg";
        document.getElementById("other").src = "http://i.imgur.com/coq5XEj.png";
    },

    //select other category
    handleOther(e){
        e.preventDefault();
        this.setState({choice: "other"});
        document.getElementById("food").src = "http://i.imgur.com/YTFVZ0E.png";
        document.getElementById("housing").src = "http://imgur.com/vizSGpL.png";
        document.getElementById("leisure").src = "http://i.imgur.com/5CM1RDo.png";
        document.getElementById("transportation").src = "http://i.imgur.com/i6RsSYD.png";
        document.getElementById("savings").src = "http://imgur.com/doYW41L.png";
        document.getElementById("school").src = "http://i.imgur.com/N2JdLLN.png";
        document.getElementById("clothing").src = "http://i.imgur.com/rrfDBAq.png";
        document.getElementById("other").src = "http://i.imgur.com/eh2JP8F.jpg";
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
        //this.setState({choice : this.refs.select.value});         //get category choice and date from user
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
        if (this.state.choice == ""){
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
            fetch('http://localhost:8080/transaction/addTransaction?'
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

            {/* wrapper for TRANSACTION page*/}
            <div style={{marginLeft:150, marginTop:10}}>
                <font style={{fontFamily:"Arial"}}>
                    <font size="+5">Add Transaction/Transfer</font>
                    <div style={{marginTop:15}}>

                        {/* submit transaction form */}
                        <form onSubmit={this.handleCheck}>

                            {/* amount input*/}
                            <font size="+2">Amount:</font>
                            <br/>
                            <font size="+2">$</font>
                            <input type="text" ref="amount" name="amount" defaultValue={this.state.amount} onChange={this.handleAmountChange}/>

                            {/* category selection */}
                            <div style={{marginTop:20, marginBottom:10}}><font size="+2">Category:</font><br/></div><br/>
                            <img id="food" src="http://i.imgur.com/YTFVZ0E.png" width="120" height="120" alt="" onClick={this.handleFood}/>
                            <img id="housing" src="http://imgur.com/vizSGpL.png" width="120" height="120" alt="" onClick={this.handleHousing}/>
                            <img id="leisure" src="http://i.imgur.com/5CM1RDo.png" width="120" height="120" alt="" onClick={this.handleLeisure}/>
                            <img id="transportation" src="http://i.imgur.com/i6RsSYD.png" width="120" height="120" alt="" onClick={this.handleTransportation}/>
                            <br/>
                            <img id="savings" src="http://imgur.com/doYW41L.png" width="120" height="120" alt="" onClick={this.handleSavings}/>
                            <img id="school" src="http://i.imgur.com/N2JdLLN.png" width="120" height="120" alt="" onClick={this.handleSchool}/>
                            <img id="clothing" src="http://i.imgur.com/rrfDBAq.png" width="120" height="120" alt="" onClick={this.handleClothing}/>
                            <img id="other" src="http://i.imgur.com/coq5XEj.png" width="120" height="120" alt="" onClick={this.handleOther}/>



                            {/* date selection */}
                            <div style={{marginTop:20, marginBottom:10}}>
                                <font size="+2">Date of Transaction:</font>
                                <br/>
                            </div>
                            <input ref="date" type="date" id="date" onChange={this.handleDateChange}/>

                            {/* submit transaction button*/}
                            <div style={{marginTop:30}}>
                                <input type="submit" value="Add"/>
                            </div>
                        </form>

                        {/* error message display */}
                        <div style={{marginTop:5}}>
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