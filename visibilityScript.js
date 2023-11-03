//***********TABLE1A
//Show all, Hide All
document.addEventListener('DOMContentLoaded', function() {
    // Select the specific table by ID
    const table1A = document.getElementById('data-1A');

    // Function to change the background of the td.meaning99
    function changeBackground(meaning, background, size) {
        // Check if the meaning's parent is a td.meaning99 and change its background and size
        const parentTd = meaning.closest('td.meaning99');
        if (parentTd) {
            parentTd.style.background = background;
            parentTd.style.backgroundSize = size;
        }
    }

    // Function to show all meanings in table1A
    function showMeanings() {
        const meanings = table1A.querySelectorAll('.meaningClick');
        meanings.forEach(meaning => {
            meaning.style.display = 'block'; // or 'inline', depending on your requirements
            changeBackground(meaning, '', '0 0'); // Clear the background for visible state
        });
    }

    // Function to hide all meanings in table1A
    function hideMeanings() {
        const meanings = table1A.querySelectorAll('.meaningClick');
        meanings.forEach(meaning => {
            meaning.style.display = 'none';
            // Set the radial-gradient background for hidden state with the size
            changeBackground(meaning, 'radial-gradient(circle, #000000 10%, transparent 11%), radial-gradient(circle at bottom left, #000000 5%, transparent 6%), radial-gradient(circle at bottom right, #000000 5%, transparent 6%), radial-gradient(circle at top left, #000000 5%, transparent 6%), radial-gradient(circle at top right, #000000 5%, transparent 6%)', '.35em .35em');
        });
    }

    // Select the 'Show All' and 'Hide All' elements within table1A
    const showAll = table1A.parentNode.querySelector('.meaningBlockShow');
    const hideAll = table1A.parentNode.querySelector('.meaningBlockHide');

    // Event listener for 'Show All' within table1A
    if (showAll) {
        showAll.addEventListener('click', showMeanings);
    }

    // Event listener for 'Hide All' within table1A
    if (hideAll) {
        hideAll.addEventListener('click', hideMeanings);
    }
});

//***********TABLE1B
//Show all, Hide All
document.addEventListener('DOMContentLoaded', function() {
    // Select the specific table by ID
    const table1B = document.getElementById('data-1B');

    // Function to change the background of the td.meaning99
    function changeBackground(meaning, background, size) {
        // Check if the meaning's parent is a td.meaning99 and change its background and size
        const parentTd = meaning.closest('td.meaning99');
        if (parentTd) {
            parentTd.style.background = background;
            parentTd.style.backgroundSize = size;
        }
    }

    function showMeanings() {
        const meanings = table1B.querySelectorAll('.meaningClick');
        meanings.forEach(meaning => {
            meaning.style.display = 'block'; // or 'inline', depending on your requirements
            changeBackground(meaning, '', '0 0'); // Clear the background for visible state
        });
    }

    function hideMeanings() {
        const meanings = table1B.querySelectorAll('.meaningClick');
        meanings.forEach(meaning => {
            meaning.style.display = 'none';
            // Set the radial-gradient background for hidden state with the size
            changeBackground(meaning, 'radial-gradient(circle, #000000 10%, transparent 11%), radial-gradient(circle at bottom left, #000000 5%, transparent 6%), radial-gradient(circle at bottom right, #000000 5%, transparent 6%), radial-gradient(circle at top left, #000000 5%, transparent 6%), radial-gradient(circle at top right, #000000 5%, transparent 6%)', '.35em .35em');
        });
    }

    const showAll = table1B.parentNode.querySelector('.meaningBlockShow');
    const hideAll = table1B.parentNode.querySelector('.meaningBlockHide');

    if (showAll) {
        showAll.addEventListener('click', showMeanings);
    }

    if (hideAll) {
        hideAll.addEventListener('click', hideMeanings);
    }
});


//***********TABLE2A
//Show all, Hide All
document.addEventListener('DOMContentLoaded', function() {
    // Select the specific table by ID
    const table2A = document.getElementById('data-2A');

    // Function to change the background of the td.meaning99
    function changeBackground(meaning, background, size) {
        // Check if the meaning's parent is a td.meaning99 and change its background and size
        const parentTd = meaning.closest('td.meaning99');
        if (parentTd) {
            parentTd.style.background = background;
            parentTd.style.backgroundSize = size;
        }
    }

    function showMeanings() {
        const meanings = table2A.querySelectorAll('.meaningClick');
        meanings.forEach(meaning => {
            meaning.style.display = 'block'; // or 'inline', depending on your requirements
            changeBackground(meaning, '', '0 0'); // Clear the background for visible state
        });
    }

    function hideMeanings() {
        const meanings = table2A.querySelectorAll('.meaningClick');
        meanings.forEach(meaning => {
            meaning.style.display = 'none';
            // Set the radial-gradient background for hidden state with the size
            changeBackground(meaning, 'radial-gradient(circle, #000000 10%, transparent 11%), radial-gradient(circle at bottom left, #000000 5%, transparent 6%), radial-gradient(circle at bottom right, #000000 5%, transparent 6%), radial-gradient(circle at top left, #000000 5%, transparent 6%), radial-gradient(circle at top right, #000000 5%, transparent 6%)', '.35em .35em');
        });
    }

    const showAll = table2A.parentNode.querySelector('.meaningBlockShow');
    const hideAll = table2A.parentNode.querySelector('.meaningBlockHide');

    if (showAll) {
        showAll.addEventListener('click', showMeanings);
    }

    if (hideAll) {
        hideAll.addEventListener('click', hideMeanings);
    }
});



//***********TABLE2B
//Show all, Hide All
document.addEventListener('DOMContentLoaded', function() {
    // Select the specific table by ID
    const table2B = document.getElementById('data-2B');

    // Function to change the background of the td.meaning99
    function changeBackground(meaning, background, size) {
        // Check if the meaning's parent is a td.meaning99 and change its background and size
        const parentTd = meaning.closest('td.meaning99');
        if (parentTd) {
            parentTd.style.background = background;
            parentTd.style.backgroundSize = size;
        }
    }

    function showMeanings() {
        const meanings = table2B.querySelectorAll('.meaningClick');
        meanings.forEach(meaning => {
            meaning.style.display = 'block'; // or 'inline', depending on your requirements
            changeBackground(meaning, '', '0 0'); // Clear the background for visible state
        });
    }

    function hideMeanings() {
        const meanings = table2B.querySelectorAll('.meaningClick');
        meanings.forEach(meaning => {
            meaning.style.display = 'none';
            // Set the radial-gradient background for hidden state with the size
            changeBackground(meaning, 'radial-gradient(circle, #000000 10%, transparent 11%), radial-gradient(circle at bottom left, #000000 5%, transparent 6%), radial-gradient(circle at bottom right, #000000 5%, transparent 6%), radial-gradient(circle at top left, #000000 5%, transparent 6%), radial-gradient(circle at top right, #000000 5%, transparent 6%)', '.35em .35em');
        });
    }

    const showAll = table2B.parentNode.querySelector('.meaningBlockShow');
    const hideAll = table2B.parentNode.querySelector('.meaningBlockHide');

    if (showAll) {
        showAll.addEventListener('click', showMeanings);
    }

    if (hideAll) {
        hideAll.addEventListener('click', hideMeanings);
    }
});

//***********TABLE3A
//Show all, Hide All
document.addEventListener('DOMContentLoaded', function() {
    // Select the specific table by ID
    const table3A = document.getElementById('data-3A');

    // Function to change the background of the td.meaning99
    function changeBackground(meaning, background, size) {
        // Check if the meaning's parent is a td.meaning99 and change its background and size
        const parentTd = meaning.closest('td.meaning99');
        if (parentTd) {
            parentTd.style.background = background;
            parentTd.style.backgroundSize = size;
        }
    }

    function showMeanings() {
        const meanings = table3A.querySelectorAll('.meaningClick');
        meanings.forEach(meaning => {
            meaning.style.display = 'block'; // or 'inline', depending on your requirements
            changeBackground(meaning, '', '0 0'); // Clear the background for visible state
        });
    }

    function hideMeanings() {
        const meanings = table3A.querySelectorAll('.meaningClick');
        meanings.forEach(meaning => {
            meaning.style.display = 'none';
            // Set the radial-gradient background for hidden state with the size
            changeBackground(meaning, 'radial-gradient(circle, #000000 10%, transparent 11%), radial-gradient(circle at bottom left, #000000 5%, transparent 6%), radial-gradient(circle at bottom right, #000000 5%, transparent 6%), radial-gradient(circle at top left, #000000 5%, transparent 6%), radial-gradient(circle at top right, #000000 5%, transparent 6%)', '.35em .35em');
        });
    }

    const showAll = table3A.parentNode.querySelector('.meaningBlockShow');
    const hideAll = table3A.parentNode.querySelector('.meaningBlockHide');

    if (showAll) {
        showAll.addEventListener('click', showMeanings);
    }

    if (hideAll) {
        hideAll.addEventListener('click', hideMeanings);
    }
});

//***********TABLE3B
//Show all, Hide All
document.addEventListener('DOMContentLoaded', function() {
    // Select the specific table by ID
    const table3B = document.getElementById('data-3B');

    // Function to change the background of the td.meaning99
    function changeBackground(meaning, background, size) {
        // Check if the meaning's parent is a td.meaning99 and change its background and size
        const parentTd = meaning.closest('td.meaning99');
        if (parentTd) {
            parentTd.style.background = background;
            parentTd.style.backgroundSize = size;
        }
    }

    function showMeanings() {
        const meanings = table3B.querySelectorAll('.meaningClick');
        meanings.forEach(meaning => {
            meaning.style.display = 'block'; // or 'inline', depending on your requirements
            changeBackground(meaning, '', '0 0'); // Clear the background for visible state
        });
    }

    function hideMeanings() {
        const meanings = table3B.querySelectorAll('.meaningClick');
        meanings.forEach(meaning => {
            meaning.style.display = 'none';
            // Set the radial-gradient background for hidden state with the size
            changeBackground(meaning, 'radial-gradient(circle, #000000 10%, transparent 11%), radial-gradient(circle at bottom left, #000000 5%, transparent 6%), radial-gradient(circle at bottom right, #000000 5%, transparent 6%), radial-gradient(circle at top left, #000000 5%, transparent 6%), radial-gradient(circle at top right, #000000 5%, transparent 6%)', '.35em .35em');
        });
    }

    const showAll = table3B.parentNode.querySelector('.meaningBlockShow');
    const hideAll = table3B.parentNode.querySelector('.meaningBlockHide');

    if (showAll) {
        showAll.addEventListener('click', showMeanings);
    }

    if (hideAll) {
        hideAll.addEventListener('click', hideMeanings);
    }
});


//***********TABLE4A
//Show all, Hide All
document.addEventListener('DOMContentLoaded', function() {
    // Select the specific table by ID
    const table4A = document.getElementById('data-4A');

    // Function to change the background of the td.meaning99
    function changeBackground(meaning, background, size) {
        // Check if the meaning's parent is a td.meaning99 and change its background and size
        const parentTd = meaning.closest('td.meaning99');
        if (parentTd) {
            parentTd.style.background = background;
            parentTd.style.backgroundSize = size;
        }
    }

    function showMeanings() {
        const meanings = table4A.querySelectorAll('.meaningClick');
        meanings.forEach(meaning => {
            meaning.style.display = 'block'; // or 'inline', depending on your requirements
            changeBackground(meaning, '', '0 0'); // Clear the background for visible state
        });
    }

    function hideMeanings() {
        const meanings = table4A.querySelectorAll('.meaningClick');
        meanings.forEach(meaning => {
            meaning.style.display = 'none';
            // Set the radial-gradient background for hidden state with the size
            changeBackground(meaning, 'radial-gradient(circle, #000000 10%, transparent 11%), radial-gradient(circle at bottom left, #000000 5%, transparent 6%), radial-gradient(circle at bottom right, #000000 5%, transparent 6%), radial-gradient(circle at top left, #000000 5%, transparent 6%), radial-gradient(circle at top right, #000000 5%, transparent 6%)', '.35em .35em');
        });
    }

    const showAll = table4A.parentNode.querySelector('.meaningBlockShow');
    const hideAll = table4A.parentNode.querySelector('.meaningBlockHide');

    if (showAll) {
        showAll.addEventListener('click', showMeanings);
    }

    if (hideAll) {
        hideAll.addEventListener('click', hideMeanings);
    }
});

//***********TABLE4B
//Show all, Hide All
document.addEventListener('DOMContentLoaded', function() {
    // Select the specific table by ID
    const table4B = document.getElementById('data-4B');

    // Function to change the background of the td.meaning99
    function changeBackground(meaning, background, size) {
        // Check if the meaning's parent is a td.meaning99 and change its background and size
        const parentTd = meaning.closest('td.meaning99');
        if (parentTd) {
            parentTd.style.background = background;
            parentTd.style.backgroundSize = size;
        }
    }

    function showMeanings() {
        const meanings = table4B.querySelectorAll('.meaningClick');
        meanings.forEach(meaning => {
            meaning.style.display = 'block'; // or 'inline', depending on your requirements
            changeBackground(meaning, '', '0 0'); // Clear the background for visible state
        });
    }

    function hideMeanings() {
        const meanings = table4B.querySelectorAll('.meaningClick');
        meanings.forEach(meaning => {
            meaning.style.display = 'none';
            // Set the radial-gradient background for hidden state with the size
            changeBackground(meaning, 'radial-gradient(circle, #000000 10%, transparent 11%), radial-gradient(circle at bottom left, #000000 5%, transparent 6%), radial-gradient(circle at bottom right, #000000 5%, transparent 6%), radial-gradient(circle at top left, #000000 5%, transparent 6%), radial-gradient(circle at top right, #000000 5%, transparent 6%)', '.35em .35em');
        });
    }

    const showAll = table4B.parentNode.querySelector('.meaningBlockShow');
    const hideAll = table4B.parentNode.querySelector('.meaningBlockHide');

    if (showAll) {
        showAll.addEventListener('click', showMeanings);
    }

    if (hideAll) {
        hideAll.addEventListener('click', hideMeanings);
    }
});
