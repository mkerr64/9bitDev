package facespace
import grails.plugin.springsecurity.SpringSecurityUtils

class LogoutController {

    def index() {

        // TODO put any pre-logout code here
        //clears the session and redirects to login page
        session.invalidate()
        redirect uri: SpringSecurityUtils.securityConfig.logout.filterProcessesUrl

    }
}
