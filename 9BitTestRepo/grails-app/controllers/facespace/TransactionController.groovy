package facespace

import grails.rest.RestfulController

class TransactionController extends RestfulController{
    static allowedMethods = [addTransaction: 'POST',get_transactions: 'GET']
    static responseFormats = ['json', 'xml']

    TransactionController(){
        super(Transaction)
    }
    //for fetch also
    def addTransaction(){
        //Saves the Transaction parameters obtained from front-end
        String uAmount = params.amount
        String uCategory = params.category
        String uDate = params.date

        //Gets the user corresponding to the provided username
        UserAccount userAcc = UserAccount.findByUserName("bun")
        System.out.println(uCategory)

        if(userAcc != null){
            //Creates a new transaction and attaches it to the user
            Transaction newTran = new Transaction(sourceProfile: userAcc, amounts: uAmount, categorys: uCategory, dates: uDate)
            userAcc.addToTransactions(newTran).save(flush: true)
            System.out.println(userAcc.getTransactions().size())
            response.status = 200
        }
        else{
            //Throws a 404 if the user could not be found
            response.status = 404
        }

    }
    //Returns a list of all the transactions with the associated username
    def get_transactions(){
        UserAccount userAcc = UserAccount.findByUserName("bun")
        [transactionList:userAcc.getTransactions()]
    }

    //check if user has at least 1 transaction
    def achievement1(){
        UserAccount userAcc = UserAccount.findByUserName("bun")
        if ( (userAcc.getTransactions() != null) && (userAcc.getTransactions().size() >= 1)){
            response.status = 200
        } else{
            response.status = 404
        }
    }

    //check if user has at least 5 transactions
    def achievement5(){
        UserAccount userAcc = UserAccount.findByUserName("bun")
        if ( (userAcc.getTransactions() != null) && (userAcc.getTransactions().size() >= 5)){
            response.status = 200
        } else {
            response.status = 404
        }
    }
}