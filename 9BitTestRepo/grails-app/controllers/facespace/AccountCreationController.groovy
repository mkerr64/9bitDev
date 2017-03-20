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

    def signup(){
        def uname = params.userName

        def account = UserAccount.find{userName == uname}
        if(account == null){
            account = new UserAccount(userName: uname, password: "123")
            new Profile(ownerAccount: account).save()
            response.status = 200
        }  else {
            response.status = 404
        }

    }

    def login(){
        def uname = params.userName

        def account = UserAccount.find{userName == uname}
        if(account == null){
            response.status = 404
        }  else {
            response.status = 200
        }

    }


}