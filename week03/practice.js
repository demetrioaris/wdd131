let firstName = 'Antonia'
let lastName = 'Francesca';
function fullName(first, last) {
    return `${first} ${last}`
}

const fullName = function (firstName, lastName) {
    retunr `${firstName} ${lastName}`;
}

const fullName = (firstName, lastName) => { `${firstName} ${lastName}`;
}

document.querySelector('#fullName').innerHTML = fullName(firstName, lastName);