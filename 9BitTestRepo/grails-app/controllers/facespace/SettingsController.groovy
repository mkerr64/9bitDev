package facespace
import grails.plugin.springsecurity.annotation.Secured
@Secured('ROLE_USER')
class SettingsController {

    def index() { }
}
