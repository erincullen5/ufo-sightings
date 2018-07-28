// from data.js
var tableData = data;
// console.log(data);

// YOUR CODE HERE!
// Select the table body
var tbody = d3.select("tbody");

/// Select the value of the filter button field
var button = d3.select("#filter-btn")

button.on("click", function() {

    d3.event.preventDefault();
    var inputField = d3.select("#datetime")
    var inputValue = inputField.property("value");  
    console.log(inputValue);
    console.log("The Filter button was clicked!");

    tbody.selectAll('tr').remove()

    tableData.forEach(alien =>{
        if (alien.datetime === inputValue) {
            var row = tbody.append("tr");
            Object.entries(alien).forEach(([key,value]) => {
                var cell = row.append("td");
                cell.text(value);

            })
        };
    });
});

