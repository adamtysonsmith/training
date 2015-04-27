d3.select('#svg-in-d3')
    .append('svg')
        .attr({
            'width': 600,
            'height': 400
        })
        .style('background','#93A1A1')
    .append('g')
        .attr('id','long-rect')
    .append('rect')
        .attr({
            'width': 30,
            'height': 300,
            'x': 50,
            'y': 50,
            'style': 'fill: #91E7E7'
        });

// Now we select our svg element again, because we want to append to the svg instead of nesting rects
// We can reuse our #long-rect created in the g tag above
// It would be better to loop this, but just to be explicit we are creating 4 more rects
d3.select('#svg-in-d3 svg')
    .append('use')
        .attr({
            'xlink:href': '#long-rect',
            'x': 50,
            'y': 0
        });

d3.select('#svg-in-d3 svg')
    .append('use')
        .attr({
            'xlink:href': '#long-rect',
            'x': 100,
            'y': 0
        });

d3.select('#svg-in-d3 svg')
    .append('use')
        .attr({
            'xlink:href': '#long-rect',
            'x': 150,
            'y': 0
        });

d3.select('#svg-in-d3 svg')
    .append('rect')
        .attr({
            'width': 30,
            'height': 350,
            'x': 40,
            'y': 30,
            'style': 'fill: plum',
            'transform': 'rotate(-45 100 100)'
        });

d3.select('#svg-in-d3 svg')
    .append('text')
        .attr({
            'x': 240,
            'y': 150,
            'font-family': 'sans-serif',
            'font-size': 22,
            'fill': 'white'
        })
    .text('SVG shapes created in pure D3');