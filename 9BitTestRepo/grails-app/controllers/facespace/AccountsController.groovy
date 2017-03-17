package facespace

import grails.rest.RestfulController

class AccountsController extends RestfulController{

    static allowedMethods = [createAccount: 'POST']
    static responseFormats = ['json', 'xml']
    String accounts = ""
    AccountsController(){
        super(UserAccount)
    }

    def index() { }

    def signUp(){
        def uname = params.userName
        def password = params.password
        boolean found = false

        String account = uname.concat(",").concat(password).concat(";")
        if (accounts.contains(account)){
            response.status = 200
        }  else {
            response.status = 404
        }

    }

    def login(){
        def uname = params.userName
        def password = params.password

        if((uname=="bob") && (password=="123")){
            UserAccount acc = new UserAccount(userName: "bun", password: "234").save()
            if(acc == null){
                System.out.println("nnull")
            }
            else{
                System.out.println(UserAccount.count())
            }
            response.status = 200
        } else {
            response.status = 404
        }

        //boolean found = false

        //String account = uname.concat(" ").concat(password)
        //for (int i = 0; i < accounts.size(); i++) {
        //  if (accounts[i].equals(account)) {
        //    found = true
        // }
        //}
        //if(found){
        // response.status = 200
        //}
        //else {
        //  response.status = 404
        //}

    }

}