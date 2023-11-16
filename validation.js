// Récuperer de l'emplacement des erreurs
let lastnameError = document.getElementById('lastname-error');
let firstnameError = document.getElementById('firstname-error');
let emailError = document.getElementById('email-error');
let phoneError = document.getElementById('phone-error');
let submitError = document.getElementById('submit-error');

// Functions validate

function validateLastName(){
    let lastname = document.getElementById('lastname').value;

    if(lastname.length == 0){
        lastnameError.innerHTML = 'Nom obligatoire';
        return false;
    }
    if(!lastname.match(/^[A-Za-z]{2,20}$/)){
        lastnameError.innerHTML = 'le nom doit être composé uniquement de lettres(entre 2 et 20 lettres max)';
        return false;
    }
    lastnameError.innerHTML = '<span>valid</span>';
    return true;
}

function validateFirstName(){
    let firstname = document.getElementById('firstname').value;

    if(firstname.length == 0){
        firstnameError.innerHTML = 'Nom obligatoire';
        return false;
    }
    if(!firstname.match(/^[A-Za-z]{2,20}$/)){
        firstnameError.innerHTML = 'le nom doit être composé uniquement de lettres(entre 2 et 20 lettres max)';
        return false;
    }
    firstnameError.innerHTML = '<span>valid</span>';
    return true;
}