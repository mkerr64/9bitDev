<!doctype html>
<html>
    <head>
        <title>Add Transaction</title>
        <link rel="stylesheet" href="${resource(dir: '../stylesheets', file: 'interface_style.css')}" type="text/css">
    </head>
    <body>
    <div>
        <!--Title bar elements-->
        <div class="sidetitle"></div><div class="title">
        <h1>Budget Buddy </h1>
    </div>

        <!--Wrapper for all sidebar elements-->
        <div class="sidebar">
            <!--Profile picture box-->

            <!--Sidebar Options-->
            <div class="selection">
                <p><a href="http://localhost:8080/dashboard"><img src="http://i.imgur.com/p7bALzm.png" width="50px" height="50px"></a><br/>Dashboard</p>
                <p><a href="http://localhost:8080/transaction"><img src="http://i.imgur.com/Oy0HiUk.png" width="50px" height="50px"></a><br/>Transaction</p>
                <p><a href="http://localhost:8080/settings"><img src="http://i.imgur.com/6iuu6QJ.png" width="50px" height="50px"></a><br/>Account</p>
                <p><a href="http://localhost:8080/"><img src="http://i.imgur.com/H1YlJbi.png" width="50px" height="50px"></a><br/>Logout</p>
            </div>
        </div>
    </div>
    <div id="statusFeed" align="left"></div>
    <div id="statusUpdate" align="left"></div>
    <script type="text/javascript" src="../assets/transaction.bundle.js"></script>
    <br/>
    </body>
</html>

