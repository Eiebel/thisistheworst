/* Honestly don't have a plan here. Pokemon doesn't seem exciting enough but I am under the wire. */

const baseURL = 'https://ghibliapi.herokuapp.com';

// Get the button that the user will interect with
let buttonElement = document.getElementById('click');
// Grab the area where the outcome will be displayed
let listElement = document.getElementById('outcome');

function fetchInfo() {

    fetch(`${baseURL}/people`)
        .then(response => response.json())
        .then(jsonData => {
            console.log(jsonData);
            let count = 0;
            for (let name of jsonData) {
                if (count <= 1) {
                    fetchPeopleById(name);
                    count++;
                } else {
                    return;
                }
            }
        })
}

function fetchPeopleById(person) {
    let url = `${baseURL}/people/${person.id}`

    fetch(url)
        .then(response => response.json())
        .then(jsonData => {
            console.log(jsonData);

            displayInfo(jsonData);
        })
}

function displayInfo(info) {

    let displayId = document.createElement('h3');
    let displayName = document.createElement('p');
    let displayAge = document.createElement('a');

    displayName.innerText = info.name;
    displayId.innerText = info.id;
    displayAge.innerText = info.age;

    displayId.classList.add('id');
    displayName.classList.add('name');
    displayAge.classList.add('age');

    listElement.appendChild(displayId);
    listElement.appendChild(displayAge);
    listElement.appendChild(displayName);
}

buttonElement.addEventListener('click', (event) => {
    event.preventDefault();
    fetchInfo();
})

/* buttonElement.addEventListener('click', () => {
    console.log('The click works');
}) */