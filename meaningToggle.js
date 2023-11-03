// This function will run once the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Attach the event listener to a parent element, like the table or the document
    document.addEventListener('click', function(event) {
        // Check if the clicked element is, or is inside, a 'td.meaning99'
        let target = event.target;
        while (target != null) {
            if (target.matches('td.meaning99')) {
                // Toggle the visibility of the corresponding 'span.meaningClick'
                const meaningClick = target.querySelector('.meaningClick');
                if (meaningClick) {
                    const isHidden = meaningClick.style.display === 'none';
                    // Toggle display style
                    meaningClick.style.display = isHidden ? 'block' : 'none';
                    // Toggle background and background size based on visibility
                    if (isHidden) {
                        // Clear the background for visible state
                        target.style.background = '';
                        target.style.backgroundSize = '0 0';
                    } else {
                        // Set the radial-gradient background for hidden state
                        target.style.background = 'radial-gradient(circle, #000000 10%, transparent 11%), radial-gradient(circle at bottom left, #000000 5%, transparent 6%), radial-gradient(circle at bottom right, #000000 5%, transparent 6%), radial-gradient(circle at top left, #000000 5%, transparent 6%), radial-gradient(circle at top right, #000000 5%, transparent 6%)';
                        target.style.backgroundSize = '.35em .35em';
                    }
                }
                break; // Exit the loop if we found our matching element
            }
            target = target.parentElement; // Move up in the DOM tree
        }
    });
});


/*
// This function will run once the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Attach the event listener to a parent element, like the table or the document
    document.addEventListener('click', function(event) {
        // Check if the clicked element is, or is inside, a 'td.meaning99'
        let target = event.target;
        while (target != null) {
            if (target.matches('td.meaning99')) {
                // Toggle the visibility of the corresponding 'span.meaningClick'
                const meaningClick = target.querySelector('.meaningClick');
                if (meaningClick) {
                    const isHidden = meaningClick.style.display === 'none';
                    // Toggle display style
                    meaningClick.style.display = isHidden ? 'block' : 'none';
                    // Toggle background color based on visibility
                    target.style.backgroundColor = isHidden ? '' : '#d9d9d9';
                }
                break; // Exit the loop if we found our matching element
            }
            target = target.parentElement; // Move up in the DOM tree
        }
    });
});
*/
/*
// This function will run once the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Attach the event listener to a parent element, like the table or the document
    document.addEventListener('click', function(event) {
        // Check if the clicked element is, or is inside, a 'td.meaning99'
        let target = event.target;
        while (target != null) {
            if (target.matches('td.meaning99')) {
                // Toggle the visibility of the corresponding 'span.meaningClick'
                const meaningClick = target.querySelector('.meaningClick');
                if (meaningClick) {
                    meaningClick.style.display = meaningClick.style.display === 'none' ? 'block' : 'none';
                }
                break; // Exit the loop if we found our matching element
            }
            target = target.parentElement; // Move up in the DOM tree
        }
    });
});
*/
