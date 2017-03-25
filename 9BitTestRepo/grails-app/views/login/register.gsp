<!DOCTYPE html>
<html>
<head>
    <meta name="layout"/>
    <title><g:message code='springSecurity.login.title'/></title>
    <style type="text/css" media="screen">

    #login {
        margin: 15px 0px;
        padding: 0px;
        text-align: center;
    }

    #login .inner {
        width: 400px;
        padding-bottom: 6px;
        margin: 60px auto;
        text-align: left;
        border: 1px solid #43a047;
        background-color: #66BB6A;
        -moz-box-shadow: 2px 2px 2px #eee;
        -webkit-box-shadow: 2px 2px 2px #eee;
        -khtml-box-shadow: 2px 2px 2px #eee;
        box-shadow: 2px 2px 2px #eee;
    }

    #login .inner .fheader {
        padding: 20px 26px 24px 26px;
        background-color: #43a047;
        margin: 0px 0 14px 0;
        color: #FFF;
        font-size: 30px;
        font-weight: bold;
    }

    #login .inner .cssform p {
        clear: left;
        margin: 0;
        padding: 20px 0 0px 0;
        padding-left: 150px;
        margin-bottom: 20px;
        height: 1%;
        white-space: nowrap;
    }

    #login .inner .cssform input[type="text"] {
        width: 120px;
    }

    #login .inner .cssform label {
        font-weight: bold;
        float: left;
        text-align: right;
        margin-left: -105px;
        width: 110px;
        padding-top: 3px;
        padding-right: 10px;
    }

    #login #remember_me_holder {
        padding-left: 120px;
    }

    #login #submit {
        margin-left: 15px;
    }

    #login #remember_me_holder label {
        float: none;
        margin-left: 0;
        text-align: left;
        width: 200px
    }

    #login .inner .login_message {
        padding: 6px 25px 20px 25px;
        color: #c33;
    }


    #login .inner .text_ {
        width: 120px;
    }

    #login .inner .chk {
        height: 12px;
    }
    </style>
</head>

<body>
<div id="login">
    <div class="inner">
        <div class="fheader">
            <img src="http://i.imgur.com/v085Nmb.png" width="90" height="100" alt=""/>
            <g:message code='Budget Buddy'/>
        </div>

        <g:if test='${flash.message}'>
            <div class="login_message">${flash.message}</div>
        </g:if>

        <form action="${postUrl ?: '/dashboard'}" method="POST" id="loginForm" class="cssform" autocomplete="off">
            <p>
                <label for="username"><g:message code='springSecurity.login.username.label'/>:</label>
                <input type="text" class="text_" name="${usernameParameter ?: 'username'}" id="username"/>
            </p>

            <p>
                <label for="password"><g:message code='springSecurity.login.password.label'/>:</label>
                <input type="password" class="text_" name="${passwordParameter ?: 'password'}" id="password"/>
            </p>


            <p>
                <label for="password"><g:message code='Verify Password'/>:</label>
                <input type="password" class="text_" name="${passwordParameter ?: 'password'}" id="password"/>
            </p>


            <p>
                <input type="submit" id="submit" value="${message(code: 'springSecurity.login.button')}"/>
            </p>
        </form>
        <form action="${postUrl ?: '/login'}" method="POST" id="loginForm" class="cssform" autocomplete="off">
            <p>
                <input type="submit" id="submit" value="${message(code: 'Back')}"/>
            </p>

        </form>
    </div>
</div>
<script>
    (function() {
        document.forms['loginForm'].elements['${usernameParameter ?: 'username'}'].focus();
    })();
</script>
</body>
</html>