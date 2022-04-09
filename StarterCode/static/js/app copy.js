d3.selectAll("#selDataset").on("optionChanged", updatePlotly);

function init() {
    function updatePlotly() {
    d3.json("samples.json").then(data => {
        var name = data.names;
        console.log(names);

}
init()

d3.selectAll("#selDataset").on("change", updatePlotly);
// This function is called when a dropdown menu item is selected
function updatePlotly() {
    d3.json("samples.json").then(data => {var name = data.names;console.log(names);}    
  // Use D3 to select the dropdown menu
    var dropdownMenu = d3.select("#selDataset");
  // Assign the value of the dropdown menu option to a variable
  var dataset = dropdownMenu.property("value");
  console.log(dataset);
  // Initialize x and y arrays

// function init() {
//     d3.json("samples.json").then(data => {
//         console.log(data);
//         let topten = [];

        
//         for(var i = 0;i<10;i++) {
//               data.samples[i]
//               topten.push(data.samples[i])
//             }
//             console.log(i);
//             console.log(topten);
//         const sample_values = topten.map(x => x.sample_values)
//         const otu_labels = topten.map(y=>y.otu_labels)
//         console.log(otu_labels)
//     });
// }
// function optionChanged(value) {
//     console.log(value);
// }

// init()


function init() {
    d3.json("samples.json").then(data => {
    var samples = data.samples;
    console.log(data);


    // let trace = {
    //     x: topten.map(elt => elt["greekSearchResults"]),
    //     y: topten.map(elt => elt["greekName"]),
    //     type: "bar",
    //     orientation: "h"
    // };

    // let traces = [trace];

    // let layout = {
    //     title: "Top Ten by Greek Search Results"
    // }

    // Plotly.newPlot("plot", traces, layout);
    });
}
function optionChanged(value) {
    console.log(value);
}

init()

