package facespace
import grails.plugin.springsecurity.annotation.Secured
@Secured('ROLE_USER')
class SettingsController {

    def index() { }

    /*def setIncome(){
        def springSecurityService
        def user = spring.SecurityService.currentUser
        User userAcc = User.findByUserName(user)

        user.income = pram
    }

    //Changes username
    def setUser(){
        def user = spring.SecurityService.currentUser
        def new_user = params.new_user

        UserAccount userAcc = UserAccount.findByUserName(user)
        accounts.replaceAll(account, )
        spring.SecurityService.currentUser.ch

        if (accounts.contains(account)){
            response.status = 200
        }  else {
            response.status = 404
        }
    }

    //Changes password
    def setPassword(){
        def user = spring.SecurityService.currentUser
        def password = params.new_password
        UserAccount userAcc = UserAccount.findByUserName(user)

        if (accounts.contains(account)){
            response.status = 200
        }  else {
            response.status = 404
        }
    }*/
}
