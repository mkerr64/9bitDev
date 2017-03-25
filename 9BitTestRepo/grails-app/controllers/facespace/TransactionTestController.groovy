package facespace
import grails.rest.RestfulController
import grails.plugin.springsecurity.annotation.Secured
@Secured('permitAll')
class TransactionTestController extends RestfulController{

    static responseFormats = ['json', 'xml']
    TransactionTestController(){
        super(Transaction)
    }
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
            System.out.print(username)
            //Creates a new transaction and attaches it to the user
            def newTrans =  new Transaction(username: username, amount: uAmount, category: uCategory, date: uDate)
            assert newTrans.save()

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
}
