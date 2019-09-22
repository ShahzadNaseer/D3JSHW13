// from data.js
var tableData = data;
var tbody = d3.select("tbody");

data.forEach((ufoReport) => {
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
});

var button = d3.select("#filter-btn");

button.on("click", function() {

    tbody.html("");

    // Select the input element and get the raw HTML node
    // var inputElement = d3.select("#datetime1");

    // // Get the value property of the input element
    // var inputValue = inputElement.property("value");

    // console.log(people);
    // var inputElement = d3.select("#datetime1");

    // Get the value property of the input element
    // var inputValue = d3.select("#datetime1").property("value");

    // var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);
    // var inputValue = d3.select("#datetime1").property("value");
    // var a = document.getElementById("datetime1").value
    // // console.log(len(a));
    // // if (inputValue.value.length === 0) {

    // userFilters = ["datetime1", "city1", "state1", "country1", "shape1"];
    // dataColumns = ["datetime", "city", "state", "country", "shape"];
    // for (i= 0; i<= userFilters.length; i++) {

    //     if (document.getElementById(userFilters[i]).value.length === 0) {

    //         tableData = filteredData;
    //         console.log(document.getElementById(dataColumns[i]).value);
    //     } else {

    //         // filteredData = tableData.filter(tableData => tableData.dataColumns[i] === d3.select(userFilters[i]).property("value")); 
            
    //         console.log(document.getElementById(dataColumns[i]).value);
    //         // filteredData = tableData.filter(tableData => tableData.dataColumns[i].text === document.getElementById(userFilters[i]).value); 

    //         tableData = filteredData;
    //     }datetime1
    // }

    
    if (document.getElementById("datetime1").value.length === 0) {

        console.log("no filter");
        filteredData = tableData;
        } else {
        // console.log(inputValue);
        var filteredData = tableData.filter(tableData => tableData.datetime === d3.select("#datetime1").property("value"));

    }
    

    filteredData.forEach((ufoReport) => {
        var row = tbody.append("tr");
        Object.entries(ufoReport).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
        });
    });

});
