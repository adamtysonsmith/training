/* --- Selecting and Manipulating Elements with D3 --- */

// Uses jQuery like syntax
d3.select('body')
    .style('background-color', '#f0f0f0');

d3.selectAll('.row')
    .style('background-color', 'azure')
    .style('padding', '20px')
    .style('margin', '10px');

// You can use objects in style() to add multiple styles
d3.select('#elements')
    .style({
        'background-color': 'aliceblue',
        'padding': '20px',
        'margin': '10px'
    });


// This will select the first .item
// Use selectAll() to target all items
d3.select('.item')
    .text('Selected Aluminum!');

// You can select nth-child(odd), nth-child(even), every 3rd element nth-child(3n), etc
d3.select('.item:nth-child(3)')
    .text('Selected Neptunium, 3rd Child in 1 based index!');


// Lets add another item with append() and html()
// attr() allows you to add attributes to elements
// To toggle additional classes you can use classed()
d3.select('#elements')
    .append('div')
    .attr('class','item')
    .classed('appended', true)
    .html('Appended Item - Oxygen!');

// You can also use objects in classed() for multiple classes
d3.select('#elements')
    .append('div')
    .classed({
        'item': true,
        'appended': true
    })
    .html('Appended Another Classed Item - Helium!');


// We can also insert() an element in a specific position
d3.select('#elements')
    .insert('div', ':nth-child(2)')
    .attr('class','item')
    .html('Inserted Item - Gold!');

// Or we can remove() an element (Krypton will be removed)
d3.select('.item:nth-child(6)')
    .remove();


// That would be sweet if we could loop append 5 items
