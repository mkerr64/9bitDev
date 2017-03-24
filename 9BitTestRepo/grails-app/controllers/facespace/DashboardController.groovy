package facespace
import grails.plugin.springsecurity.annotation.Secured
@Secured('ROLE_USER')
class DashboardController {

    def index() { }
}
