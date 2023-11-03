fetch("names99.json")
.then(function(response) {
    return response.json();
})

// Page 01
.then(function(names1A) {
    let placeholder1A = document.querySelector("#data-1A");
    let out = "";
    for(let name99 of names1A) {
        if (name99.columnID === "1A")
        out += `
            <tr>
                <td class="name99">
                    <span class="nameClick">${name99.name}</span>
                </td>
                <td class="meaning99"> <!-- meaning99 triggers vis -->
                    <span class="meaningClick">${name99.meaningSet01}</span>
                </td>
                <td class="pageNum">
                    ${name99.pageNum}
                </td>
                <td class="columnID">
                    ${name99.columnID}
                </td>
            </tr>
        `;
    }
    placeholder1A.innerHTML = out;
})

fetch("names99.json")
    .then(function(response) {
        return response.json();
    })
.then(function(names1B) {
    let placeholder1B = document.querySelector("#data-1B");
    let out = "";
    for(let name99 of names1B) {
        if (name99.columnID === "1B")
            out += `
        <tr>
            <td class="name99">
                ${name99.name}
            </td>
            <td class="meaning99"> <!-- meaning99 triggers vis -->
                <span class="meaningClick">${name99.meaningSet01}</span>
            </td>
            <td class="pageNum">
                ${name99.pageNum}
            </td>
            <td class="columnID">
                ${name99.columnID}
            </td>
        </tr>
    `;
    }
    placeholder1B.innerHTML = out;
})

// Page 02
fetch("names99.json")
    .then(function(response) {
        return response.json();
    })
    .then(function(names2A) {
        let placeholder2A = document.querySelector("#data-2A");
        let out = "";
        for(let name99 of names2A) {
            if (name99.columnID === "2A")
                out += `
        <tr>
            <td class="name99">
                ${name99.name}
            </td>
            <td class="meaning99"> <!-- meaning99 triggers vis -->
                <span class="meaningClick">${name99.meaningSet01}</span>
            </td>
            <td class="pageNum">
                ${name99.pageNum}
            </td>
            <td class="columnID">
                ${name99.columnID}
            </td>
        </tr>
    `;
        }
        placeholder2A.innerHTML = out;
    })

fetch("names99.json")
    .then(function(response) {
        return response.json();
    })
    .then(function(names2B) {
        let placeholder2B = document.querySelector("#data-2B");
        let out = "";
        for(let name99 of names2B) {
            if (name99.columnID === "2B")
                out += `
        <tr>
            <td class="name99">
                ${name99.name}
            </td>
            <td class="meaning99"> <!-- meaning99 triggers vis -->
                <span class="meaningClick">${name99.meaningSet01}</span>
            </td>
            <td class="pageNum">
                ${name99.pageNum}
            </td>
            <td class="columnID">
                ${name99.columnID}
            </td>
        </tr>
    `;
        }
        placeholder2B.innerHTML = out;
    })


// Page 03
fetch("names99.json")
    .then(function(response) {
        return response.json();
    })
    .then(function(names3A) {
        let placeholder3A = document.querySelector("#data-3A");
        let out = "";
        for(let name99 of names3A) {
            if (name99.columnID === "3A")
                out += `
        <tr>
            <td class="name99">
                ${name99.name}
            </td>
            <td class="meaning99"> <!-- meaning99 triggers vis -->
                <span class="meaningClick">${name99.meaningSet01}</span>
            </td>
            <td class="pageNum">
                ${name99.pageNum}
            </td>
            <td class="columnID">
                ${name99.columnID}
            </td>
        </tr>
    `;
        }
        placeholder3A.innerHTML = out;
    })

fetch("names99.json")
    .then(function(response) {
        return response.json();
    })
    .then(function(names3B) {
        let placeholder3B = document.querySelector("#data-3B");
        let out = "";
        for(let name99 of names3B) {
            if (name99.columnID === "3B")
                out += `
        <tr>
            <td class="name99">
                ${name99.name}
            </td>
            <td class="meaning99"> <!-- meaning99 triggers vis -->
                <span class="meaningClick">${name99.meaningSet01}</span>
            </td>
            <td class="pageNum">
                ${name99.pageNum}
            </td>
            <td class="columnID">
                ${name99.columnID}
            </td>
        </tr>
    `;
        }
        placeholder3B.innerHTML = out;
    })


// Page 04
fetch("names99.json")
    .then(function(response) {
        return response.json();
    })
    .then(function(names4A) {
        let placeholder4A = document.querySelector("#data-4A");
        let out = "";
        for(let name99 of names4A) {
            if (name99.columnID === "4A")
                out += `
        <tr>
            <td class="name99">
                ${name99.name}
            </td>
            <td class="meaning99"> <!-- meaning99 triggers vis -->
                <span class="meaningClick">${name99.meaningSet01}</span>
            </td>
            <td class="pageNum">
                ${name99.pageNum}
            </td>
            <td class="columnID">
                ${name99.columnID}
            </td>
        </tr>
    `;
        }
        placeholder4A.innerHTML = out;
    })

fetch("names99.json")
    .then(function(response) {
        return response.json();
    })
    .then(function(names4B) {
        let placeholder4B = document.querySelector("#data-4B");
        let out = "";
        for(let name99 of names4B) {
            if (name99.columnID === "4B")
                out += `
        <tr>
            <td class="name99">
                <span class="nameClick">${name99.name}</span>
            </td>
            <td class="meaning99"> <!-- meaning99 triggers vis -->
                <span class="meaningClick">${name99.meaningSet01}</span> 
            </td>
            <td class="pageNum">
                ${name99.pageNum}
            </td>
            <td class="columnID">
                ${name99.columnID}
            </td>
        </tr>
    `;
        }
        placeholder4B.innerHTML = out;
    })

