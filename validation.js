// enregistre une réference pour chaque element du formulaire
const form = document.getElementById('registrationForm');
const lastname = document.getElementById('lastname');
const firstname = document.getElementById('firstname');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const language = document.getElementById('autoSizingCheck1');


/*  Ajout d'un EventListener sur le formulaire pour empêcher
    la soumission du formulaire avant la validation des inputs. */
    form.addEventListener('submit', e => {
        e.preventDefault(); // empêche la soumission du formulaire

        validateInputs(); // validation des inputs
    });

// fonction qui recoit un element html un message d'erreur en paramètre
const setError = (element, message) =>{
    const inputControl = element.parentElement; // recupere le parent de l'element en paramètre
    const errorDisplay = inputControl.querySelector('.error') // selectionner les balises de classe error
    const myInput = inputControl.querySelector('input'); // selectionner les balises input

    errorDisplay.innerText = message;
    errorDisplay.style.fontSize = "small"; // Add small font-size when error validation
    errorDisplay.style.color = "#ff3860";   // Add red color to the error text validation
    myInput.style.borderColor= '#ff3860';
}

const setSuccess = (element, message) =>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    const myInput = inputControl.querySelector('input');

    errorDisplay.innerText = message;
    errorDisplay.style.fontSize = "small";
    errorDisplay.style.color = "#09c372";   // Add green color to the .error class
    myInput.style.borderColor= '#09c372';
}

const setCheckboxError = (element, message) =>{
    const inputControl = element.parentElement.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    errorDisplay.style.fontSize = "small"; // Add small font-size when error validation
    errorDisplay.style.color = "#ff3860";   // Add red color to the error text validation 
}
const setCheckboxSuccess = (element, message) =>{
    const inputControl = element.parentElement.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    errorDisplay.style.fontSize = "small"; // Add small font-size when error validation
    errorDisplay.style.color = "#09c372";   // Add red color to the error text validation 
}
// Implémentation de la fonction validateInputs
const validateInputs = () => {
    const lastnameValue = lastname.value.trim();
    const firstnameValue = firstname.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();

// conditions de validation pour chaque value
    // validation du nom
    if(lastnameValue === ''){
        setError(lastname, 'Nom obligatoire');
    }else if(!lastnameValue.match(/^[A-Za-z]{2,20}$/)){
        setError(lastname, 'le nom doit être composé uniquement de lettres(entre 2 et 20 lettres max)');
    }else{
        setSuccess(lastname, 'C\'est parfait!');
    }
    // validation du prénom
    if(firstnameValue === ''){
        setError(firstname, 'Prénom obligatoire');
    }else if(!firstnameValue.match(/^[A-Za-z]{2,20}$/)){
        setError(firstname, 'le prénom doit être composé uniquement de lettres(entre 2 et 20 lettres max)');
    }else{
        setSuccess(firstname, 'C\'est parfait!');
    }
    // validation du courriel
    if(emailValue === ''){
        setError(email, 'Courriel obligatoire');
    }else if(!emailValue.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)){
        setError(email, 'format du courriel non autorisé ! ');
    }else{
        setSuccess(email, 'C\'est parfait!');
    }
    // validation du telephone
    if(phoneValue ===''){
        setError(phone, 'Numéro de téléphone obligatoire');
    }else if(!phoneValue.match(/^\([0-9]{3}\)[\s][0-9]{3}-[0-9]{4}$/)){
        setError(phone, 'N° non valide, format a respecter: (XXX) XXX-XXXX');
    }else{
        setSuccess(phone, 'C\'est parfait!');
    }
    ValidateLanguageSelection()
};

// 
function ValidateLanguageSelection()  
{  
    var checkboxes = document.getElementsByName("languages");  
    console.log(checkboxes);
    var numberOfCheckedItems = 0;  
    for(var i = 0; i < checkboxes.length; i++)  
    {  
        if(checkboxes[i].checked)  
            numberOfCheckedItems++;  
    }
    console.log(numberOfCheckedItems);
    if(numberOfCheckedItems > 2){
        setCheckboxError(language, "Veuillez ne selectionner que deux langages max svp!");
        return false; 
    }else if(numberOfCheckedItems === 0){
        setCheckboxError(language, "Vous devez choisir un langage!"); 
        return false; 
    }else{
        setCheckboxSuccess(language, "c'est parfait!"); 
        return true;
    }
    
} 