// enregistre une réference pour chaque element du formulaire
const form = document.getElementById('registrationForm');
const lastname = document.getElementById('lastname');
const firstname = document.getElementById('firstname');
const email = document.getElementById('email');
const phone = document.getElementById('phone');


/*  Ajout d'un EventListener sur le formulaire pour empêcher
    la soumission du formulaire avant la validation des inputs. */
    form.addEventListener('submit', e => {
        e.preventDefault(); // empêche la soumission du formulaire

        validateInputs(); // validation des inputs
    });

// fonction qui recoit un element html un message d'erreur en paramètre
const setError = (element, message) =>{
    const inputControl = element.parentElement; // recupere le parent de l'element en paramètre
    const errorDisplay = inputControl.querySelector('.error') //

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success'); // remove success class if error.
}

const setSuccess = element =>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');

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
        setSuccess(lastname);
    }
    // validation du prénom
    if(firstnameValue === ''){
        setError(firstname, 'Prénom obligatoire');
    }else if(!firstnameValue.match(/^[A-Za-z]{2,20}$/)){
        setError(firstname, 'le prénom doit être composé uniquement de lettres(entre 2 et 20 lettres max)');
    }else{
        setSuccess(firstname);
    }
    
};