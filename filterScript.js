// Add active class to the current control button (highlight it)
document.addEventListener('DOMContentLoaded', (event) => {
    let filterButtons = document.querySelectorAll('#myBtnContainer .btn');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove 'active' class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add 'active' class to the clicked button
            this.classList.add('active');
            // Get the filter type from the button's text
            let filterType = this.textContent.toLowerCase().replace('show all', 'all').replace('page ', 'page');
            // Call the filterSelection function
            filterSelection(filterType);
        });
    });
});

// Show filtered elements
function w3AddClass(element, name) {
    if (!element.classList.contains(name)) {
        element.classList.add(name);
    }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
    element.classList.remove(name);
}

function filterSelection(c) {
    console.log('Filtering:', c);
    var x, i;
    x = document.getElementsByClassName("tableBlock");
    if (c === "all") c = "";
    // Add the "show" class (display:flex) to the filtered elements, and remove the "show" class from the elements that are not selected
    for (i = 0; i < x.length; i++) {
        w3RemoveClass(x[i], "show");
        if (c === "" || x[i].classList.contains(c)) {
            w3AddClass(x[i], "show");
        }
    }
}
