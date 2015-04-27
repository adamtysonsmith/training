/* --- Binding Data to Elements with D3 --- */

var fruitsData = [
    { name:'Apples',        color:'red',        width:'230px' },
    { name:'Oranges',       color:'orange',     width:'300px' },
    { name:'Grapefruit',    color:'magenta',    width:'320px' },
    { name:'Blueberries',   color:'blue',       width:'400px' },
    { name:'Limes',         color:'green',      width:'380px' }
];

// Callback functions to get the fruits_data properties dynamically
// Will use the data loaded from from data() in our d3.select() statement below
var barColor = function(data) {
    return data.color;
}

var barWidth = function(data) {
    return data.width;
}

var barText = function(data) {
    return data.name;
}


// Let's break down the d3.select() statement below in detail:
// 1. We are selecting the #fruits div
// 2. We are using selectAll() to select all the divs that are about to be created and appended to #fruits.
//    This is in non-sequential order, so it looks strange.  We are specifying which elements we are about 
//    to manipulate(that do not exist yet) and these will be inserted inside the #fruits div.
// 3. data() accepts an array and sets the data for our elements - https://github.com/mbostock/d3/wiki/Selections#data
// 4. enter() and append() create divs based on the length of the data array. For each item in data, append new div.
// 5. We use classed() to set classes on all the elements
// 6. We are using style() to set specific styles on individual elements with a callback function
//    referencing the fruits_data, which was set by data()

d3.select('#fruits')
    .selectAll('div')
    .data(fruitsData)
    .enter().append('div')
    .text(barText)
    .classed({
        'item': true,
        'bar': true
    })
    .style({
        'background-color': barColor,
        'width': barWidth
    });