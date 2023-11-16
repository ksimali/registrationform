// Récuperer de l'emplacement des erreurs
let lastnameError = document.getElementById('lastname-error');
let firstnameError = document.getElementById('firstname-error');
let emailError = document.getElementById('email-error');
let phoneError = document.getElementById('phone-error');
let submitError = document.getElementById('submit-error');

// Functions de validation des inputs du formulaire

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

function validatePhone(){
    let phone = document.getElementById('phone').value;
    // si valeur dans input phone est vide
    if(phone.length == 0){
        phoneError.innerHTML = 'Numéro de telephone obligatoire';
        return false;
    }
    //si la valeur dans input ne match pas au format de RegExp indiqué
    if(!phone.match(/^\([0-9]{3}\)[\s][0-9]{3}-[0-9]{4}$/)){
        phoneError.innerHTML = 'N° non valide, format a respecter: (XXX) XXX-XXXX';
        return false
    }

    phoneError.innerHTML = '<span>valid</span>';
    return true;
}