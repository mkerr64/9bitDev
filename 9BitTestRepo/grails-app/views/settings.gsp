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
    <h1>Budget Buddy </h1>
</div>

    <!--Wrapper for all sidebar elements-->
    <div class="sidebar">
        <!--Profile picture box-->
        <div class="imgbox">
            <img> <!--Insert profile picture-->
        </div>

        <!--Sidebar Options-->
        <div class="selection">
            <p><a href="http://localhost:8080/dashboard"><img src="http://i.imgur.com/p7bALzm.png" width="50px" height="50px"></a></p>
            <p><a href="http://localhost:8080/transaction"><img src="http://i.imgur.com/Oy0HiUk.png" width="50px" height="50px"></a></p>
            <p><a href="http://localhost:8080/settings"><img src="http://i.imgur.com/6iuu6QJ.png" width="50px" height="50px"></a></p>
            <p><a href="http://localhost:8080/login"><img src="http://i.imgur.com/H1YlJbi.png" width="50px" height="50px"></a></p>
        </div>
    </div>
</div>
<div id="settings_form" align="left"></div>

<script type="text/javascript" src="../assets/settings.bundle.js"></script>
<br/>
</body>
</html>