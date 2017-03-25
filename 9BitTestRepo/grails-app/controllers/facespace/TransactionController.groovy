package facespace

import grails.converters.JSON
import grails.rest.RestfulController
import grails.plugin.springsecurity.annotation.Secured
@Secured('ROLE_USER')
class TransactionController extends RestfulController{
    static allowedMethods = [addTransaction: 'POST']
    static responseFormats = ['json', 'xml']

    TransactionController(){
        super(Transaction)
    }
    //for fetch also
    def springSecurityService
    def principal = springSecurityService.principal
    def addTransaction(){
        //Saves the Transaction parameters obtained from front-end
        String uAmount = params.amount
        String uCategory = params.category
        String uDate = params.date

        //Gets the user corresponding to the provided username
        //UserAccount userAcc = UserAccount.findByUserName("bun")
        //System.out.println(uCategory)

        String username = principal.username
        if(username != null){
            //Creates a new transaction and attaches it to the user
            def newTrans = new Transaction(username: username, amount: uAmount, category: uCategory, date: uDate).save()

            //System.out.println(UserAccount.findByUserName("bun").getTransactions().size())
            if(Transaction.findAllByUsername(username).size() != 0){
                response.status = 200
            }
            else{
                response.status = 404
            }

        }
        else{
            //Throws a 404 if the user could not be found
            response.status = 404
        }

    }
    //Returns a list of all the transactions with the associated username
    def getTransactions(){
        String username = principal.username
        //UserAccount userAcc = UserAccount.findByUserName("bun")
        def listy = Transaction.findAllByUsername(username)
        System.out.print(listy.size())
        respond 'hello world'//Transaction.list()


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