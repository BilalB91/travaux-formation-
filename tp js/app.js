// je récupere mes blocs d'alerte*//
let alertPseudo = document.getElementById("alert-pseudo");
let alertPass1 = document.getElementById("alert-pass1");
let alertPass2 = document.getElementById("alert-pass2");

// je recupere mes champs de formulaire*//

let Pseudo = document.getElementById("pseudo");
let Pass1 = document.getElementById("pass1");
let Pass2 = document.getElementById("pass2");

//* je recupére mon boutton*// 

let boutton = document.getElementById("boutton");


var validPass1 = false;
var validPass2 = false;
var validPseudo = false;
pseudo.addEventListener("keyup", function() {
    let content = pseudo.value;
    let contentLength = content.length;
    if(contentLength >= 5 ){
        validPseudo = true; 
        alertPseudo.innerHTML = "Le champs est valide";
    } else {
        alertPseudo.innerHTML = "Le champs n'est pas valide"
    }

});

Pass1.addEventListener("keyup", function() {
    let content = Pass1.value;
    let contentLength = content.length;
    
    if(contentLength >= 8 ){
        validPass1 = true; 
        alertPass1.innerHTML = "Le champs est valide";
    } else {
        alertPass1.innerHTML = "Le champs n'est pas valide";
    }

});
Pass2.addEventListener("keyup", function() {
    let contentPass2 = Pass2.value;
    let contentPass1 = Pass1.value;

    if((contentPass1 === contentPass2)&& validPass1 ){
        validPass2 = true; 
        alertPass2.innerHTML = "Les mots sont identiques";
    } else {
        alertPass2.innerHTML = "Les mots doivent être identiques ";
    }

});
boutton.addEventListener("click", function(event){

    if (!validPseudo || !validPass1 || !validPass2){

    //*"event.preventdefault () permet d'annuler l'evenement normalement censé se produire*//
    event.preventDefault();

    //*je lance l'alerte à l'utilisateur (pop-up)*//

    alert("Veuillez remplir le formulaire");
    }
})