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


}