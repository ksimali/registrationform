// enregistre une réference pour chaque element du formulaire
const form = document.getElementById('registrationForm');
const lastname = document.getElementById('lastname');
const firstname = document.getElementById('firstname');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const job = document.getElementsByName('gridRadios');
const language = document.getElementsByName('lang');
const framework = document.getElementById('exampleFormControlSelect1');

const myModal = new bootstrap.Modal(document.getElementById('myModal'));

/*  Ajout d'un EventListener sur le formulaire pour empêcher
    la soumission du formulaire avant la validation des inputs. */
    form.addEventListener('submit', e => {
        e.preventDefault(); // empêche la soumission du formulaire

        validateInputs() // validation des inputs
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

// Implémentation de la fonction validateInputs
const validateInputs = () => {
    const lastnameValue = lastname.value.trim();
    const firstnameValue = firstname.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();

    var testValidation = false;

// conditions de validation pour chaque value
    // validation du nom
    if(lastnameValue === ''){
        setError(lastname, 'Nom obligatoire');
        testValidation = true;
    }else if(!lastnameValue.match(/^[A-Za-z]{2,20}$/)){
        setError(lastname, 'le nom doit être composé uniquement de lettres(entre 2 et 20 lettres max)');
        testValidation = true;
    }else{
        setSuccess(lastname, 'C\'est parfait!');
    }
    // validation du prénom
    if(firstnameValue === ''){
        setError(firstname, 'Prénom obligatoire');
        testValidation = true;
    }else if(!firstnameValue.match(/^[A-Za-z]{2,20}$/)){
        setError(firstname, 'le prénom doit être composé uniquement de lettres(entre 2 et 20 lettres max)');
        testValidation = true;
    }else{
        setSuccess(firstname, 'C\'est parfait!');
    }
    // validation du courriel
    if(emailValue === ''){
        setError(email, 'Courriel obligatoire');
        testValidation = true;
    }else if(!emailValue.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)){
        setError(email, 'format du courriel non autorisé ! ');
        testValidation = true;
    }else{
        setSuccess(email, 'C\'est parfait!');
    }
    // validation du telephone
    if(phoneValue ===''){
        setError(phone, 'Numéro de téléphone obligatoire');
        testValidation = true;
    }else if(!phoneValue.match(/^\([0-9]{3}\)[\s][0-9]{3}-[0-9]{4}$/)){
        setError(phone, 'N° non valide, format a respecter: (XXX) XXX-XXXX');
        testValidation = true;
    }else{
        setSuccess(phone, 'C\'est parfait!');
    }
    console.log(">>>>>>>>>" + testValidation)
    if(!testValidation){
        const nom = document.getElementById('nomModal');
        nom.innerHTML = lastnameValue
        const prenom = document.getElementById('prenomModal');
        prenom.innerHTML = firstnameValue
        const courriel = document.getElementById('courrielModal');
        courriel.innerHTML = emailValue
        const phoneM = document.getElementById('phoneModal');
        phoneM.innerHTML = phoneValue
        const jobM = document.getElementById('jobModal');
        for (i = 0; i < job.length; i++) {
            if (job[i].checked)
                jobM.innerHTML
                    += job[i].value + " - ";
        }
        const languageM = document.getElementById('langModal');
        for (i = 0; i < language.length; i++) {
            if (language[i].checked)
            languageM.innerHTML
                    += language[i].value + " - ";
        }
        const frameworkM = document.getElementById('frameModal');
        frameworkM.innerHTML = framework.value
        
        myModal.show();
    }
};

const closeModal = () => {
    myModal.hide()
}