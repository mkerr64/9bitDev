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

        "/" (view:"/loginpage")
        "/signup" (view: "/signup")
        "/dashboard"(view:"/dashboard")
        "/transaction"(view:"/transaction")
        "/settings"(view:"/settings")
        "/register"(view:"/login/register")
        "500"(view:'/error')
        "404"(view:'/notFound')
    }
}
