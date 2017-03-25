
<!DOCTYPE html>
<html>
<head>
    <title>Dashboard</title>
    <link rel="stylesheet" href="${resource(dir: '../stylesheets', file: 'interface_style.css')}" type="text/css">
    <!--Load the AJAX API-->
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js">
    var transactList = "${createLink(url: [controller: 'TransactionController', action: 'get_transactions'])}";
</script>

</head>

<body onload="loadChart()">
<!--Wrapper for all template elements-->

<script type="text/javascript" src="../assets/dashboard.bundle.js"></script>
<div>
    <!--Title bar elements-->
    <div class="sidetitle"></div>

    <div class="title">
    <h1>Budget Buddy </h1>
    </div>

    <!--Wrapper for all sidebar elements-->
    <div class="sidebar">

        <!--Sidebar Options-->
        <div class="selection">
            <p><a href="http://localhost:8080/dashboard"><img src="http://i.imgur.com/p7bALzm.png" width="50px" height="50px"></a><br/>Dashboard</p>
            <p><a href="http://localhost:8080/transaction"><img src="http://i.imgur.com/Oy0HiUk.png" width="50px" height="50px"></a><br/>Transaction</p>
            <p><a href="http://localhost:8080/settings"><img src="http://i.imgur.com/AUDk4YE.png" width="50px" height="50px"></a><br/>Settings</p>
            <p><a href="http://localhost:8080/login"><img src="http://i.imgur.com/H1YlJbi.png" width="50px" height="50px"></a><br/>Logout</p>
        </div>
    </div>
</div>

<!--Wrapper for all other dashboard elements-->
<div>

</div>
<!--Div that will hold the pie chart-->
<div id="chart_div" style="position:absolute; left:190px; top: 80px;">

</div>
<div id="barchart_div" style="position:absolute; left:800px; top: 80px;">

</div>
<div id="table_div" style="position:absolute; left:190px; top: 500px;">

</div>
<div id="table_div2" style="position:absolute; left:900px; top: 500px;">

</div>

</body>
</html>