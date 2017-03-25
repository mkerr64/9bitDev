package facespace
import grails.plugin.springsecurity.annotation.Secured
@Secured('ROLE_USER')
class UrlMappings {
    static mappings = {
        "/$controller/$action?/$id?(.$format)?"{
            constraints {
                // apply constraints here
            }
        }

        "/" (view:"/dashboard")
        "/login" (view:"/login/auth")
        "/signup" (view: "/signup")
        "/dashboard"(view:"/dashboard")
        "/transaction"(view:"/transaction")
        "/settings"(view:"/settings")
        "/register"(view:"/login/register")
        "500"(view:'/error')
        "404"(view:'/notFound')
    }
}
