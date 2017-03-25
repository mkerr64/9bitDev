package facespace

import grails.rest.RestfulController

class AccountCreationController extends RestfulController{

    static allowedMethods = [createAccount: 'POST']
    static responseFormats = ['json', 'xml']

    AccountCreationController(){
        super(UserAccount)
    }

    def index() {
        // some default behaviour could be here
    }

    // Our first POST-enabled method
    // We just want to get the status text and save it to the profile.
    def createAccount(){
        def uname = params.userName
        System.out.print(uname)
        def account = UserAccount.find{userName == uname}
        if(account == null){
            account = new UserAccount(userName: uname, password: "2212")
            new Profile(ownerAccount: account).save()
            System.out.print('created')
            response.status = 200
        }
        else{
            // Find a better response code...
            System.out.print('already there')
            response.status = 404
        }
    }
}