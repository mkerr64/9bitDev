package facespace

import grails.rest.RestfulController

class UserAccountController extends RestfulController{

    static allowedMethods = [createAccount: 'POST']
    static responseFormats = ['json', 'xml']
    //each transaction is separated by a semicolon
    //each data point in the transaction is comma separated
    String transactions = "30, food, 2011-01-23;" +
            " 1700, housing, 2013-04-07;" +
            " 53, savings, 2014-10-13;" +
            " 23, transportation, 2013-08-21;" +
            " 400, utilities, 2012-06-15"
    double count = 5

    UserAccountController(){
        super(UserAccount)
    }

    def transaction = {
        // some default behaviour could be here
        redirect (controller: "UserAccountController", action: "transaction")

        //would this index point to the transaction view?
    }

    //for fetch also
    def addTransaction(){
        //def uname = params.userName
        double amount = params.amount
        String category = params.category
        String date = params.date

        //check that username exists and if it's not null then add a new transaction
        //def account = UserAccount.find{userName == uname}
        //if (account != null){
        //respond account.getProfile().get_transactions()
        //create new transaction object and save it
        //new Transaction(amount: amount, category: category, date: date).save()
        //check that transaction is in list?
        //}
        //else {
        //response.status = 404
        //}

        String toAdd = Double.toString(amount) + ',' + category + ',' + date + ';'

        transactions.concat(toAdd)

        double temp = count

        count++

        // check transaction can be found in database
        //def check_transaction = Profile.getTransactions()

        //check if transaction was added (works for single transaction added)
        if(!(temp + 1 == count)){
            response.status = 404
        }
        else {
            response.status = 200
        }

    }

    //for fetch command
    def get_transactions(){
        return transactions
    }
}