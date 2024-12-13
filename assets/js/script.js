let firstpage = document.querySelector(".first")
let flareon = document.getElementById("flareon")
let jolteon = document.getElementById("jolteon")
let vaporeon = document.getElementById("vaporeon")
let leafeon = document.getElementById("leafeon")
let espeon = document.getElementById("espeon")
let umbreon = document.getElementById("umbreon")
let glaceon = document.getElementById("glaceon")
let sylveon = document.getElementById("sylveon")
let firstname = document.getElementById("pseudo");
let form = document.getElementById("form");
let img = document.querySelector(".avatar")
let nextpage = document.querySelector(".next")
let secondpage = document.querySelector(".second")
let gamepage = document.querySelector(".gamepage")
let ruleBtn = document.querySelector(".rules-btn")

let resetBtn = document.getElementById("reset");
let scoreJoueur = document.getElementById("score-joueur");
let scoreOrdinateur = document.getElementById("score-ordinateur");
let btnJoueur = [...document.getElementsByClassName("btn-joueur")];
let litten = document.getElementById("litten");
let chespin = document.getElementById("chespin");
let quaxly = document.getElementById("quaxly");
let message = document.getElementById("message");
let nextBtn = document.getElementById("next");


form.addEventListener('submit',e => {
    e.preventDefault();
    validateInputs();
    // validateImg();
});


function flareonimg(){
    img.src="assets/img/Flareon.png"
    
}
flareon.addEventListener("click", flareonimg );

function jolteonimg(){
    img.src = "assets/img/Jolteon.png"
}
jolteon.addEventListener("click", jolteonimg );

function vaporeonimg(){
    img.src = "assets/img/Vaporeon.png"
}
vaporeon.addEventListener("click", vaporeonimg );

function leafeonimg(){
    img.src = "assets/img/Leafeon.png"
}
leafeon.addEventListener("click", leafeonimg );

function espeonimg(){
    img.src = "assets/img/Espeon.png"
}
espeon.addEventListener("click", espeonimg );

function umbreonimg(){
    img.src = "assets/img/Umbreon.png"
}
umbreon.addEventListener("click", umbreonimg );

function glaceonimg(){
    img.src = "assets/img/Glaceon.png"
}
glaceon.addEventListener("click", glaceonimg );

function sylveonimg(){
    img.src = "assets/img/Sylveon.png"
}
sylveon.addEventListener("click", sylveonimg );

function rulesshow(){
    secondpage.style.display = "flex";
    gamepage.style.display = "none" ;
    console.log("test");
    
}
ruleBtn.addEventListener("click", rulesshow );
console.log(ruleBtn);

function next(){
    secondpage.style.display = "none";
    gamepage.style.display = "flex" ;
}
nextpage.addEventListener("click", next)


const validateInputs = () => {
    const firstnameValue = firstname.value.trim();
    if(firstnameValue === '') {
        setError(firstname, "Le Prénom est obligatoire");
    } else if (firstnameValue.length < 3 ) {
        setError(firstname, "Le Prénom doit faire plus de 2 caractères")
    } else {
        setSuccess(firstname);
}}

const validateImg = () => {
    const imgValue = img.src.value
    console.log(imgValue);
    if (imgValue === "assets/img/vierge pp.jpg") {
        setError(img, "Veuillez selectionner un avatar")
    } else {
        setSuccess(img)
    }
}

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error")
    
    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
    firstpage.style.display = "none";
    secondpage.style.display = "flex";
}





// const jouerManche = (e) => {
//     let choix = e.target.closest(".btn-joueur");

//     btnJoueur.forEach((btn) => {
//         btn.classList.add("desactivated");
//         btn.removeEventListener("click", jouerManche);
//     });

//     choix.classList.remove("desactivated");
//     choix.classList.add("active");

//     let choixJoueur = choix.id;

//     let choixOrdi = faireChoixOrdinateur();

//     verifierGagnant(choixJoueur, choixOrdi);

//     nextBtn.style.visibility = "visible";
// };

// const faireChoixOrdinateur = () => {
//     // 0 = water
//     // 1 = grass
//     // 2 = fire

//     let nbAleatoire = Math.floor(Math.random() * 3);

//     switch (nbAleatoire) {
//         case 0:
//             litten.classList.add("active");
//             return water;
//         case 1:
//             chespin.classList.add("active");
//             return grass;
//         default:
//             quaxly.classList.add("active");
//             return fire;
//     }
// };




// const water = "water";
// const grass = "grass";
// const fire = "fire";

// const verifierGagnant = (choixJoueur, choixOrdi) => {
//     if (choixJoueur == choixOrdi) {
//         message.textContent = "Egalité !";
//         return;
//     }

//     if (choixJoueur == water) {
//         if (choixOrdi == grass) {
//             return victoireOrdinateur();
//         } else if (choixOrdi == fire) {
//             return victoireJoueur();
//         }
//     }

//     if (choixJoueur == grass) {
//         if (choixOrdi == fire) {
//             return victoireOrdinateur();
//         } else if (choixOrdi == water) {
//             return victoireJoueur();
//         }
//     }

//     if (choixJoueur == fire) {
//         if (choixOrdi == water) {
//             return victoireOrdinateur();
//         } else if (choixOrdi == grass) {
//             return victoireJoueur();
//         }
//     }
// };

// const victoireOrdinateur = () => {
//     message.textContent = "L'ordinateur gagne...";
//     scoreOrdinateur.textContent++;
// };

// const victoireJoueur = () => {
//     message.textContent = "Vous gagnez ! :)";
//     scoreJoueur.textContent++;
// };

// const preparerNouvelleManche = () => {
//     btnJoueur.forEach((btn) => {
//         btn.classList.remove("desactivated");
//         btn.classList.remove("active");
//         btn.addEventListener("click", jouerManche);
//     });

//     nextBtn.style.visibility = "hidden";

//     litten.classList.remove("active");
//     chespin.classList.remove("active");
//     quaxly.classList.remove("active");

//     message.textContent = "A vous de jouer !";
// };

// resetBtn.addEventListener("click", () => {
//     scoreJoueur.textContent = 0;
//     scoreOrdinateur.textContent = 0;

//     preparerNouvelleManche();
// });

// nextBtn.addEventListener("click", preparerNouvelleManche);

// btnJoueur.forEach((btn) => btn.addEventListener("click", jouerManche));
