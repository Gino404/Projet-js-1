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

let resetBtn = document.getElementById("reset");
let scoreJoueur = document.getElementById("score-joueur");
let scoreOrdinateur = document.getElementById("score-ordinateur");
let btnJoueur = [...document.getElementsByClassName("btn-joueur")];
let litten = document.getElementById("litten")
let quaxly = document.getElementById("quaxly")
let chespin = document.getElementById("chespin")
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

// const validateImg = () => {
//     const imgValue = img.src.value
//     console.log(imgValue);
//     if (imgValue === "assets/img/vierge pp.jpg") {
//         setError(img, "Veuillez selectionner un avatar")
//     } else {
//         setSuccess(img)
//     }
// }

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


