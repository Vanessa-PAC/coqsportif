
//Type de variables : Number, String

// 
let a= 10;
// variable constante qui ne change pas
const b = 4;

let vrai = true;
let faux = false;

let c = b + b;

const nom = "PACINI"
const prénom = " VANESSA"
const nomComplet = nom + ' - ' + prénom

function add(a, b) {
    const  result = a + b;

    return result
}

const resultOfAddition = add(8,12)


const isEqualTo20 = a < 20

const roundedRayon = Math



//Calculer l'aire d'un rectangle

function aireRectangle (a, b) {
    return a * b
}

// Calculer le périmètre d'un rectangle
function perimetreRectangle (a, b) {
    return 2*a + 2*b
}
    

// calculer l'aire du triangle rectangle
function perimetreRectangle (a, b) {
    
    return (a*b)/2
}
    
// Calculer le périmetre d'un triangle rectangle
function perimetreTriangleRectangle (a, b, c) {

    return a + b + c
}

// Convertir les kelvins to celcius
function  kelvinsEnCelcius (a) {

    return a - 273.15
}

// Perimetre d'un cercle

function perimetreCercle(radius) {

    return 2 * Math.PI * radius;
}

// L'aire d'un cercle

function aireCercle(a) {

    return Math.PI * r**2
}

// Calculer la monnaie à rendre sur un billet (price, billAmount)
function monnaieRendue (m,p) {

    return m - p
}

// Nb de jours de vacances
function vacances (y,x) {

    return y/x
}


// V/F nombre divisible
function number(a) {
    return ( a % 2 === 0)
}


// retirer la première lettre d'une string

function removeFirstLetter (word) {

    return word.slice(1)
}

console.log(removeFirstLetter ("Vanessa"))



// retirer la dernière lettre d'une string

function removeLastLetter (word) {

    return word.slice(0,-1)
}

console.log(removeLastLetter ("Vanessa"))

