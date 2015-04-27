var chartData = [100, 30, 45, 15, 85, 65, 25, 10, 5, 35, 75, 50, 10, 30, 45, 15, 85, 65, 25, 10, 5, 35, 75, 50, 20, 30, 45, 15, 85, 65, 25, 10, 5, 35, 75, 50, 10, 30, 45, 15, 85, 65, 25, 10, 5, 35, 75, 50, 100, 30, 45, 15, 85, 65, 25, 10, 5, 35, 75, 50, 10, 30, 45, 15, 85, 65, 25, 10, 5, 35, 75, 50, 20, 30, 45, 15, 85, 65, 25, 10, 5, 35, 75, 50, 10, 30, 45, 15, 85, 65, 25, 10, 5, 35, 75, 50, 100, 30, 45, 15, 85, 65, 25, 10, 5, 35, 75, 50, 10, 30, 45, 15, 85, 65, 25, 10, 5, 35, 75, 50, 20, 30, 45, 15, 85, 65, 25, 10, 5, 35, 75, 50, 10, 30, 45, 15, 85, 65, 25, 10, 5, 35, 75, 50];

// Sorting the data ascending or descending
//chartData.sort(function(a, b) {
////    return b - a; // descending
//    return a -b; 
//});
var margin = {top: 30, right: 30, bottom: 30, left: 30};
var backgroundHeight = 400 - margin.left - margin.right;
var backgroundWidth = 600 - margin.top - margin.bottom;
var barWidth = 70;
var barOffset = 5;
var topPadding = 30;
var backgroundColor = '#f1f1f1';

// Function to scale our chart data within the y axis
var yScale = d3.scale.linear()
    .domain([0, d3.max(chartData)])
    .range([0, backgroundHeight]);

// Function to scale our chart data with the x axis
var xScale = d3.scale.ordinal()
    .domain(d3.range(0, chartData.length)) // Output [1,2,3,4,5]
    .rangeBands([0, backgroundWidth], 0.2); // rangeBands([interval start, end], padding, outer padding). Padding is from 0 to 1, 1 means 100% padding.

// Create some meaningful color scales
var colors;

// This function gets passed the chartData as a param that will be loaded from data() below.
// We are passing the data through our yScale() function to remap the data according to our y scale.
var barHeight = function(data) {
    return yScale(data);
}


//////////////////////////////////////////////////
// Making a D3 Vertical Bar Chart in SVG
// 1. Create an svg element that sets height and width
// 2. Create our groups inside the main svg element
// 3. Groups include: Chart Data, Axis, Title, Legend
//////////////////////////////////////////////////

// Maybe this should be a class
var verticalBarChart = d3.select('#chart')
    .append('svg')
        .attr('width', backgroundWidth + margin.left + margin.right)
        .attr('height', backgroundHeight + margin.top + margin.bottom)
        .style('background', backgroundColor)
    .append('g')
        .attr('id', 'chart-data')
        .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
    // Create our Bar Chart using rects and chartData
        .selectAll('rect') // Select rects appended below
        .data(chartData).enter()
    .append('rect')
        .style('fill', 'pink')
        .attr('width', xScale.rangeBand())
        .attr('height', barHeight)

        // data() passes in the chartData array first, then the index of the array as a second parameter
        // We need to reflow our data through our x and y scale functions to scale within the backgroundHeight and backgroundWidth
        .attr('x', function(data, index){
            return xScale(index);
        })
        .attr('y', function(data){
            return backgroundHeight - yScale(data);
        })

    // Still chaining the same chart, lets add some events
    .on('mouseover', function() {
        d3.select(this).style('opacity', 0.5);
    })
    .on('mouseout', function() {
        d3.select(this).style('opacity', 'initial');
    }); // End verticalBarChart


//////////////////////////////////////////////////
// Fun with Axes!                               //
//////////////////////////////////////////////////

// First the Y-Axis
var yAxisScale = d3.scale.linear()
    .domain([0, d3.max(chartData)])
    .range([backgroundHeight, 0]);

var yAxis = d3.svg.axis()
    .scale(yAxisScale)
    .orient('left')
    .ticks(12);

var yAxisGuide = d3.select('#chart > svg')
    .append('g')
        .attr('id', 'chart-y-axis')
        .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

yAxis(yAxisGuide);

// Next, the X-Axis
var xAxis = d3.svg.axis()
    .scale(xScale)
    .orient('bottom')
    .tickValues(xScale.domain().filter(function(data, index){
        return !(index % (chartData.length/8)); // Weird thing going on with divisble by 8
    }));

var xAxisGuide = d3.select('#chart > svg')
    .append('g')
        .attr('id', 'chart-x-axis')
        .attr('transform', 'translate(' + margin.left + ',' + (backgroundHeight + margin.bottom) + ')');

xAxis(xAxisGuide);



//////////////////////////////////////////////////
// Lets do some stuff like this later           //
// 1. Title                                     //
// 2. Description                               //
// 3. Legend                                    //
// 4. Whatever!                                 //
//////////////////////////////////////////////////