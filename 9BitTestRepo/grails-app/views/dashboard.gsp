
<!DOCTYPE html>
<html>
<head>
    <title>Dashboard</title>
    <link rel="stylesheet" href="${resource(dir: '../stylesheets', file: 'interface_style.css')}" type="text/css">
    <!--Load the AJAX API-->
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <script>

        //array of advice
        var advice = ["Follow the 50/30/20 rule for expenses: 50% of your income on necessities (bills, groceries, gas, etc.), 30% for leisure (restaurants, clothing, etc.), and 20% in your savings!","When going grocery shopping, make a list and stick to it.","Sales can be good, but don't buy more than you need. A 3-for-1 deal is only good if you'll use all three items.","Plan out what to buy to avoid impulse purchases. If you want something that isn't on the list, plan to come back later to buy it.","If you have multiple entertainment services (cable, internet, etc.) group them into one plan to get a better deal.", "Set aside money for unexpected costs (repairs, replacements, etc.), you never know when an extra expense may pop up!","Check your mail for coupons! You'll often get deals from eateries. So if you're in a rush make to carry coupons just in case.", "If you have a transaction limit on your debit/credit cards, use cash on small purchases to avoid transaction fees at the end of the month.","Be realistic with your budget. When planning, overestimate your expenses and underestimate your income so you won't be left short on funds."];
        var num = 0;

        //advice is switched every 5s (for testing, will be changed to 30s)
        window.setInterval(switchAdvice,5000);


        //cycle through array of advice, shuffle array when reached the end of advice
        function switchAdvice(){
            var string = advice[num];
            var div = document.getElementById("advice");
            div.textContent = string;
            if (num == 8){
                num = 0;
                advice = shuffle(advice);
            } else {
                num++;
            }
            return false;
        }

        //shuffles array so advice is not displayed in the same order
        function shuffle(array) {
            var currentIndex = array.length, temporaryValue, randomIndex;
            while (0 !== currentIndex) {
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;
                temporaryValue = array[currentIndex];
                array[currentIndex] = array[randomIndex];
                array[randomIndex] = temporaryValue;
            }

            return array;
        }


    </script>
    <style>
    @import url('https://fonts.googleapis.com/css?family=Fjalla+One');
    </style>
</head>

<body onload="switchAdvice();">
<div id="advice" style="width:100%; height:50px; position:fixed; font-family: 'Fjalla One', sans-serif;bottom:0%; left:120px; text-align: center; line-height: 3em; background: linear-gradient(to bottom, #ffffff 0%, #ccccff 90%);"></div>
<!--Wrapper for all template elements-->

<script type="text/javascript" src="../assets/dashboard.bundle.js"></script>

<div>
    <!--Title bar elements-->
    <div class="sidetitle"></div>

    <div class="title">
    <img src="https://i.imgur.com/S9TLwK6.png" width="300px" height="70px" align="left" hspace="20">
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
<div id="table_div" style="position:absolute; left:260px; top: 480px;">

</div>


</body>
</html>