// from data.js
var tableData = data;
var tbody = d3.select("tbody");

// data.forEach((ufoReport) => {
//     var row = tbody.append("tr");
//     Object.entries(ufoReport).forEach(([key, value]) => {
//       var cell = row.append("td");
//       cell.text(value);
//     });
// });

showTable(tableData);
d3.select("#reset-btn").on("click",resetdata);
d3.select("#filter-btn").on("click",filterdata);

function showTable(data) {

    data.forEach((ufoReport) => {
        var row = tbody.append("tr");
        Object.entries(ufoReport).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
    });    
};

// reset filters
function resetdata(){
    tableData = data;
    showTable(tableData);
    d3.select("#datetime1").node().value = "";
    d3.select("#city1").node().value = "";
    d3.select("#country1").node().value = "";
    d3.select("#shape1").node().value = "";
};

// multi Filter
function filterdata(){

    //  Prevent from refreshing
    d3.event.preventDefault();
    // Clear all data
    d3.select("tbody").html("");

    let filteredData = tableData;

    if (document.getElementById("datetime1").value.length === 0) {

        console.log("no date filter");
        // filteredData = tableData;
        } else {
        filteredData = tableData.filter(tableData => tableData.datetime === d3.select("#datetime1").property("value").toLowerCase());
    }
    tableData = filteredData;

    if (document.getElementById("city1").value.length === 0) {

        console.log("no city filter");
        // filteredData = tableData;
        } else {
        filteredData = tableData.filter(tableData => tableData.city === d3.select("#city1").property("value").toLowerCase());
    }
    tableData = filteredData;
    // if (document.getElementById("state1").value.length === 0) {

    //     console.log("no state filter");
    //     // filteredData = tableData;
    //     } else {
    //     var filteredData = tableData.filter(tableData => tableData.state === d3.select("#state1").property("value"));
    // }
    // tableData = filteredData;
    if (document.getElementById("country1").value.length === 0) {

        console.log("no country filter");
        // filteredData = tableData;
        } else {
        filteredData = tableData.filter(tableData => tableData.country === d3.select("#country1").property("value").toLowerCase());
    }
    tableData = filteredData;
    if (document.getElementById("shape1").value.length === 0) {

        console.log("no shape filter");
        // filteredData = tableData;
        } else {
        filteredData = tableData.filter(tableData => tableData.shape === d3.select("#shape1").property("value").toLowerCase());
    }

    showTable(filteredData);
};
    // let filtercondition= {};
      
    // Get the value property of the input element for date
    // var dateinputvalue =d3.select("#datetime1").property("value");
    // if (dateinputvalue != ""){
    //   filtercondition["datetime1"]=dateinputvalue;
    // }
     // Get the value property of the input element for city
    // var cityinputvalue =d3.select("#city1").property("value");
    // if (cityinputvalue != ""){
    //   filtercondition["city1"]=cityinputvalue.toLowerCase();
    // }
    // Get the value property of the input element for state
    // var stateinputvalue =d3.select("#state1").property("value");
    // if (stateinputvalue != ""){
    //    filtercondition["state1"]=stateinputvalue.toLowerCase();
    // }
    // // Get the value property of the input element for country
    // var countryinputvalue =d3.select("#country1").property("value");
    // if (countryinputvalue != ""){
    //    filtercondition["country1"]=countryinputvalue.toLowerCase();
    // }
    // // Get the value property of the input element for shape
    // var shapeinputvalue =d3.select("#shape1").property("value");
    // if (shapeinputvalue != ""){
    //    filtercondition["shape1"]=shapeinputvalue.toLowerCase();
    // }
    // console.log(filtercondition);
    // let filterData = (array, filter) => {

    // return array.filter( (item) => {
    
    //     // here, we iterate each item and compare with your filter,
    //     // if the item pass, you must return true. Otherwise, false
    
    //     //   e.g.: datetime, city, state, country, shape check (if present only)
    //       if (filter.datetime && filter.datetime !== item.datetime) {
    //           return false;
    //       }
    //       if (filter.city && filter.city !== item.city) {
    //         return false;
    //       }
    //       if (filter.state && filter.state !== item.state) {
    //         return false;
    //       }
    //       if (filter.country && filter.country !== item.country) {
    //         return false;
    //       }
    //       if (filter.shape && filter.shape !== item.shape) {
    //         return false;
    //       }
      
    //       return true;
    // })
    // }
    // let dataFiltered = filterData(tableData, filtercondition);
    // console.log(dataFiltered);
    // showTable(dataFiltered);
// }; 

