/**
 * Created by Nikita on 2017-03-01.
 */
// Load the Visualization API and the corechart package and table package
google.charts.load('current', {'packages': ['corechart', 'table']});


// Set a callback to run when the Google Visualization API is loaded (this is for the pie chart and bar chart)
google.charts.setOnLoadCallback(drawChart);

// set a callback for the tables
google.charts.setOnLoadCallback(drawTableChart);
google.charts.setOnLoadCallback(drawTableChart2);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
let foodSum = 0;
let housingSum = 0;
let leisureSum = 0;
let transSum = 0;
let savingsSum = 0;
let schoolSum = 0;
let clothSum = 0;
let otherSum = 0;
let foodCn = 0;
let housingCn = 0;
let leisureCn = 0;
let transCn = 0;
let savingsCn = 0;
let schoolCn = 0;
let clothCn = 0;
let otherCn = 0;
jQuery.ajax({
    url: "http://localhost:8080/transactionTest",
    type: "PUT",

    contentType: 'application/json; charset=utf-8',
    success: function(resultData) {
        for(let i = 0; i<resultData.length;i++) {
            let currCat = resultData[0].category;
            let currAm = resultData[0].amount;
            if (currCat == 'food') {
                foodSum = foodSum + parseInt(currAm);
                foodCn = foodCn + 1;
            }
            else if (currCat == "housing") {
                housingSum = housingSum + parseInt(currAm);
                housingCn = housingCn + 1;
            }
            else if (currCat == 'leisure') {
                leisureSum = leisureSum + parseInt(currAm);
                leisureCn = leisureCn + 1;
            }
            else if (currCat == 'transportation') {
                transSum = transSum + parseInt(currAm);
                transCn = transCn + 1;
            }
            else if (currCat == 'savings') {
                savingsSum = savingsSum + parseInt(currAm);
                savingsCn = savingsSum + 1;
            }
            else if (currCat == 'school') {
                schoolSum = schoolSum + parseInt(currAm);
                schoolCn = schoolCn + 1;
            }
            else if (currCat == 'clothing') {
                clothSum = clothSum + parseInt(currAm);
                clothCn = clothCn + 1;
            }
            else {
                otherSum = otherSum + parseInt(currAm);
                otherCn = otherCn + 1;
            }
        }
        drawChart(foodSum, housingSum, leisureSum, transSum, savingsSum, schoolSum, clothSum, otherSum, foodCn, housingCn, leisureCn, transCn, savingsCn, schoolCn, clothCn, otherCn)
    },
    error : function(jqXHR, textStatus, errorThrown, transSum) {
    },

    timeout: 120000,
});
function drawChart(foodSum, housingSum, leisureSum, transSum, savingsSum, schoolSum, clothSum, otherSum, foodCn, housingCn, leisureCn, transCn, savingsCn, schoolCn, clothCn, otherCn) {

    // Create the data table.
    let data = new google.visualization.DataTable();
    data.addColumn('string', 'Topping');
    data.addColumn('number', 'Slices');

    data.addRows([
        ['Food', foodSum],
        ['Housing', housingSum],
        ['Leisure', leisureSum],
        ['Transportation', transSum],
        ['Savings', savingsSum],
        ['School', schoolSum],
        ['Clothing', clothSum],
        ['Other', otherSum],
    ]);

    // Set chart options
    let options = {
        'title': 'Number of Recent Transactions By Type',
        'width': 600,
        'height': 400
    };

    // Instantiate and draw our chart, passing in some options.
    let chart = new google.visualization.PieChart(document.getElementById('chart_div'));
    let barchart = new google.visualization.BarChart(document.getElementById('barchart_div'));
    chart.draw(data, options);
    barchart.draw(data, options);
}

// callback that draws table chart
function drawTableChart(housing,food) {
    let data = new google.visualization.DataTable();

    data.addColumn('string', 'Transaction Category');
    data.addColumn('number', 'Amount');
    data.addColumn('boolean', 'Good');
    data.addRows([
        ['Housing', {v: 10000, f: '$10,000'}, true],
        ['Food', {v: 8000, f: '$8,000'}, false],
        ['Food', {v: 12500, f: '$12,500'}, true],
        ['Leisure', {v: 7000, f: '$7,000'}, true]
    ]);

    let table = new google.visualization.Table(document.getElementById('table_div'));

    table.draw(data, {showRowNumber: true, width: '1100', height: '200'});
}

function drawTableChart2() {
    let data = new google.visualization.DataTable();
    data.addColumn('string', 'Advice Category');
    data.addColumn('string', 'Advice');
    data.addRows([
        ['Spending Habits','Use the 50/30/20 rule'],
    ]);

    let table = new google.visualization.Table(document.getElementById('table_div2'));

    table.draw(data, {showRowNumber: true, width: '600', height: '200'});
}
