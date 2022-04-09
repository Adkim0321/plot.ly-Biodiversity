function buildMetadata(sample) {
  d3.json("samples.json").then((data) => {
    var metadata = data.metadata;
    // Filter the data for the object with the desired sample number
    var resultArray = metadata.filter(x => x.id == sample);
    var result = resultArray[0];
    console.log(result);
    // Use d3 to select the panel with id of `#sample-metadata`
    var PANEL = d3.select("#sample-metadata");

    // Use `.html("") to clear any existing metadata
    PANEL.html("");

    // Use `Object.entries` to add each key and value pair to the panel
    // Hint: Inside the loop, you will need to use d3 to append new
    // tags for each key-value in the metadata.
    Object.entries(result).forEach(([key, value]) => {
      PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
    });
    console.log(Object.entries(result))
  });
}
function charts(sample) {
  d3.json("samples.json").then((data) => {
    var samples = data.samples;
    // Filter the data for the object with the desired sample number
    var resultArray = samples.filter(x => x.id == sample);
    var result = resultArray[0];  
    console.log(result);
    // var results = result.sort(result.sample_values)
    
    var idLoop = result.otu_ids.reverse().slice(-10);
    var ids = []
    for(var i = 0;i<10;i++) {
                    idLoop[i]
                    ids.push("OTU "+idLoop[i])
                  }
    var labels = result.otu_labels.reverse().slice(-10);
    var value = result.sample_values.reverse().slice(-10);
    var idTotal = result.otu_ids
    var labelsTotal = result.otu_labels
    var valueTotal = result.sample_values

    
    // console.log(id);
    console.log(labels);
    console.log(value);
    console.log(ids)
    
    let trace = {
      x: value,
      y: ids,
      type: "bar",
      orientation: "h"
    }
  
  // Data array
  let traces = [trace];
  
  // Apply a title to the layout
  let layout = {
      title: "Top Ten Samples",
      yaxis: { type: 'category' }
  };
  
  // Render the plot to the div tag with id "plot"
  Plotly.newPlot("bar", traces, layout);

  var trace1 = {
    x: idTotal,
    y: valueTotal,
    text: labelsTotal,
    mode: 'markers',
    marker: {
      color: idTotal,
      opacity: [1, 0.8, 0.6, 0.4],
      size: valueTotal
      
    }
  };
  
  var data = [trace1];
  
  var layout1 = {
    title: 'OTU Values by ID',
    showlegend: false,
    height: 600,
    width: 900
  };
  
  Plotly.newPlot('bubble', data, layout1);

  });
}
function init() {
  d3.json("samples.json").then(data => {
    console.log("read samples");
    console.log(data);
    var names = data.names;
    // Filter the data for the object with the desired sample number
    let dropdownMenu = d3.select("#selDataset");
    data.names.forEach((name) => {
      dropdownMenu.append('option').text(name);
    })

    //why is this option
    var result = names[0];
  // this is where the function is called 
  buildMetadata(result)
  charts(result)
  });
}
function optionChanged(value) {
    console.log(value);
    charts(value);
    buildMetadata(value)
}

init();
//as long as you dont use it untill you defined init you are fine
// Let var and const where was it defined.  so if it is in a function and we use let then it only works in that function.
