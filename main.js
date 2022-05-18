"use strict"

function renderCoffee(coffee) {
    let html = '<div class="col-6 fs-5">';
    // html += '<td>' + coffee.id + '</td>';
    html += '<strong>' + coffee.name + '</strong>';
    html += ' <span class="text-muted">' + coffee.roast + '</span>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    let html = '';
    for(let i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    let selectedRoast = roastSelection.value;
    let filteredCoffees = [];
    if (selectedRoast === "all") {
        for (const coffee of coffees) {
            filteredCoffees.push(coffee);
        }
    } else {
        coffees.forEach(function (coffee) {
            if (coffee.roast === selectedRoast) {
                filteredCoffees.push(coffee);
            }
        });

    }
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

//---------------------------- ADDED JS ----------------------------
//  search input function
function updateCoffees2(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    let coffee1 = coffeeInput.value.toLowerCase();
    let filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.name.toLowerCase().includes(coffee1)) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}
//------------------------------------------------------------------

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
let coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

let tbody = document.querySelector('#coffees'); // an empty container for coffees object to be displayed by JS.
let submitButton = document.querySelector('#submit');
let roastSelection = document.querySelector('#roast-selection'); // grabs <select> dropdown tag in <form>.

tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);

//---------------------------- ADDED JS ----------------------------
let coffeeInput = document.getElementById("coffee-name");
coffeeInput.addEventListener("input", updateCoffees2)

roastSelection.addEventListener('input', updateCoffees);

let addedRoastedSelectionEl = document.getElementById("add-roast-selection");
let addedCoffeeNameEl = document.getElementById("added-coffee-name")
let addCoffeeSubmitEl = document.getElementById("add-coffee-submit")
addCoffeeSubmitEl.addEventListener('click', function(e) {
    e.preventDefault()
    let newCoffee = {name: addedCoffeeNameEl.value, roast: addedRoastedSelectionEl.value}
    coffees.push(newCoffee)
    updateCoffees(e)
})
//------------------------------------------------------------------
