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
            <p><a href="http://localhost:8080/dashboard">Dashboard</a></p>
            <p><a href="http://localhost:8080/transaction">Transactions</a></p>
            <p>Achievements</p>
            <p><a href="http://localhost:8080/settings">My Account</a></p>
        </div>
    </div>
</div>
<div id="settings_form" align="left"></div>

<script type="text/javascript" src="../assets/settings.bundle.js"></script>
<br/>
</body>
</html>