// jquery('document') is equivalent to $('document')
// This means that we are about to execute a jquery script on the document
    /* ready() vs. onload() - ready() waits for the DOM to finish loading,
       while onload() waits for all content to be loaded (images, everything).
       ready() allows us to run code more quickly if we don't want to wait. */

$('document').ready(function() {
            // Callback function on ready()
    
            // You can target by id, class, or element
            $('body').css('font-family','Helvetica');
            $('code').css('background-color','aquamarine');
            
            // You can use advanced CSS selectors
            $('ul > li:first').css('color','orange');
            
            // Create some new content
            // Notice that html() closes the <p> tag for you in output
            var newParagraph = $('<p>');
            newParagraph.append('Hey this is a string, added via jQuery.');
            $('#example').html(newParagraph);
            
            // Insert some content in the same tag using prepend() or append()
            $('#create').append(' - I just appended this text!');
            
            // Change existing content using html()
            $('#what').html('Why is jQuery Awesome?');
            
            // Event Handling Code
            // We use the on() method with some custom callback functions
            // The events are triggered only on the targeted element
            $('#event-diagnostic').on('mousemove', onMouseOver);
            $('#event-diagnostic').on('click', onMouseClick);
            $('#event-diagnostic').on('mouseleave', onMouseLeave);
            
            // We pass our callback functions the evt param, jQuery's cross browser event object
            function onMouseOver(evt) {
                $('#event-diagnostic').text('Mouse over fired.');
            }
            function onMouseClick(evt) {
                $('#event-diagnostic').text('Mouse click fired.');
            }
            function onMouseLeave(evt) {
                $('#event-diagnostic').text('Mouse leave fired.');
            }
            
            // Animation Code
            // Target the button, on click you will execute callback function.
            // In the callback, we call animate() on the div we wish to animate.
            // In the animate() method we pass in the CSS property, and the timing.
            $('#animation-button').click(function() {
                $('#animated-h1').css('display','block')
                    .animate({
                        fontSize: '80px',
                        marginBottom: '30px'
                    }, 300);
            });
            
            // AJAX Code
            // Click Handlers on the buttons, with callbacks
            $('#getTextButton').click(getText);
            $('#loadHTMLButton').click(loadHTML);
            
            // Call global ajax function
            // Pass a file (or path, or URL) as first argument
            // Second argument is an object with settings to configure the ajax request
               // You may do something on success, you may do a POST or GET, etc
               // There are tons of options you can include in the settings object
               // http://api.jquery.com/jquery.ajax/
            function getText() {
                $.ajax('content/content.txt',{
                    success: setContent, // This function is defined below
                    type: 'GET',
                    dataType: 'text'
                });
            }
            // The 'success' option above accepts a function to be called if the request succeeds
            // We must define a function that takes three parameters:
               // 1. Data returned from the server, formatted according to dataType
               // 2. String describing the status
               // 3. The jqXHR object - superset of browser's native XML HTTP Request Object
            // This function is just taking the data and loading it in our div.  We are not really
            // using the status or jqxhr object, but I will print them out to the console for kicks.
            function setContent(data, status, jqxhr) {
                $('#ajax-example').text(data);
            }
            // This is what it looks like, simply loading html content from a file or path.
            function loadHTML() {
                $('#ajax-example').load('content/content.html');
            }
    
});// End Ready Function