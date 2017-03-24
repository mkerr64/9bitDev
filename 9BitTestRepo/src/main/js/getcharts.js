/**
 * Created by Daniel on 2017-03-24.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import drawChart from './dashboard'
import drawTableChart from './dashboard'
import drawTableChart2 from './dashboard'
var chartData = React.createClass({

    // Used to initialize state
    getInitialState () {
        return {
            transactionList : "",                                        //transactionlist
        }
    },

    handleGetChart(){
        fetch('http://localhost:8080/transaction/get_transactions?'
            , {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res =>{
            if(res.ok){
                let list = this.state.transactionList;
                if (list != ""){
                    console.log("SUCCESS");
                } else {
                    console.log("FAIL")
                }
            }
        });
    },

    render () {
        return (<div></div>
        );
    }
});

export class ChartList extends React.Component{
    render(){
        return(
            <div>
                <chartData/>
            </div>
        );
    }
};

ReactDOM.render(
    <div>
        <ChartList/>
    </div>, document.getElementById('statusFeed'));
