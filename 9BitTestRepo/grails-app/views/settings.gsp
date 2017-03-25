<!doctype html>
<html>
<head>
    <title>Account</title>
    <link rel="stylesheet" href="${resource(dir: '../stylesheets', file: 'interface_style.css')}" type="text/css">
</head>
<body>
<div>
    <!--Title bar elements-->
    <div class="sidetitle"></div><div class="title">
    <img src="https://i.imgur.com/S9TLwK6.png" width="300px" height="70px" align="left" hspace="20">
</div>

    <!--Wrapper for all sidebar elements-->
    <div class="sidebar">
        <!--Profile picture box-->

        <!--Sidebar Options-->
        <div class="selection">
            <p><a href="http://localhost:8080/dashboard"><img src="http://i.imgur.com/p7bALzm.png" width="50px" height="50px"></a><br/>Dashboard</p>
            <p><a href="http://localhost:8080/transaction"><img src="http://i.imgur.com/Oy0HiUk.png" width="50px" height="50px"></a><br/>Transaction</p>
            <p><a href="http://localhost:8080/settings"><img src="http://i.imgur.com/AUDk4YE.png" width="50px" height="50px"></a><br/>Settings</p>
            <p><a href="http://localhost:8080/login"><img src="http://i.imgur.com/H1YlJbi.png" width="50px" height="50px"></a><br/>Logout</p>
        </div>
    </div>
</div>
<div id="settings_form" align="center"></div>

<script type="text/javascript" src="../assets/settings.bundle.js"></script>
<br/>
</body>
</html>