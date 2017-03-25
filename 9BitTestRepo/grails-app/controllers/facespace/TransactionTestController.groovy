package facespace
import grails.rest.RestfulController
import grails.plugin.springsecurity.annotation.Secured
@Secured('permitAll')
class TransactionTestController extends RestfulController{

    static responseFormats = ['json', 'xml']
    TransactionTestController(){
        super(Transaction)
    }
}
