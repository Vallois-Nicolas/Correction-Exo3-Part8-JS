// Les paragraphes ont été rendus invisibles au chargement de la page dans le fichier CSS lié dans cet exercice !

// Solution n°1 : une condition par paragraphe à afficher :

// On déclare une variable pour chaque paragraphe à faire apparaître
let firstParagraph = document.getElementById('firstParagraph');
let secondParagraph = document.getElementById('secondParagraph');
let thirdParagraph = document.getElementById('thirdParagraph');
let fourthParagraph = document.getElementById('fourthParagraph');
let fifthParagraph = document.getElementById('fifthParagraph');
let sixthParagraph = document.getElementById('secondParagraph');
let seventhParagraph = document.getElementById('secondParagraph');
let eighthParagraph = document.getElementById('eighthParagraph');
let ninthParagraph = document.getElementById('ninthParagraph');
let tenthParagraph = document.getElementById('tenthParagraph');
let eleventhParagraph = document.getElementById('eleventhParagraph');
let twelfthParagraph = document.getElementById('twelfthParagraph');

// Puis au scroll sur la fenêtre, on délenche une fonction anonyme :
window.onscroll = function () {
    // Nous allons tester la comparaison de 2 valeurs :
    // - Où se trouve l'utilisateur sur le site (window.scrollY nous donnera le nombre de pixels correspondant au défilement réalisé par l'utilisateur)
    // - Où se trouve l'élément que nous devons faire apparaître (paragraph.getBoundingClientRect().top renverra la valeur en pixels de la position du haut de l'élément ciblé, ici, le paragraphe)
    // Si la première valeur est supérieure à la seconde, c'est que l'utilisateur se rapproche du paragraphe à afficher, et donc, qu'il faut l'afficher
    if (window.scrollY >= firstParagraph.getBoundingClientRect().top) {
        firstParagraph.style.visibility = 'visible';
    }
    if (window.scrollY >= secondParagraph.getBoundingClientRect().top) {
        secondParagraph.style.visibility = 'visible';
    }
    if (window.scrollY >= thirdParagraph.getBoundingClientRect().top) {
        thirdParagraph.style.visibility = 'visible';
    }
    if (window.scrollY >= fourthParagraph.getBoundingClientRect().top) {
        fourthParagraph.style.visibility = 'visible';
    }
    if (window.scrollY >= fifthParagraph.getBoundingClientRect().top) {
        fifthParagraph.style.visibility = 'visible';
    }
    if (window.scrollY >= sixthParagraph.getBoundingClientRect().top) {
        sixthParagraph.style.visibility = 'visible';
    }
    if (window.scrollY >= seventhParagraph.getBoundingClientRect().top) {
        seventhParagraph.style.visibility = 'visible';
    }
    if (window.scrollY >= eighthParagraph.getBoundingClientRect().top) {
        eighthParagraph.style.visibility = 'visible';
    }
    if (window.scrollY >= ninthParagraph.getBoundingClientRect().top) {
        ninthParagraph.style.visibility = 'visible';
    }
    if (window.scrollY >= tenthParagraph.getBoundingClientRect().top) {
        secondParagraph.style.visibility = 'visible';
    }
    if (window.scrollY >= eleventhParagraph.getBoundingClientRect().top) {
        eleventhParagraph.style.visibility = 'visible';
    }
    if (window.scrollY >= twelfthParagraph.getBoundingClientRect().top) {
        twelfthParagraph.style.visibility = 'visible';
    }
};

//Solution 2 : Optimisation en récupérant tous les paragraphes dans une seule variable

// On déclare une variable qu'on initialise avec l'ensemble des paragraphes présents dans le DOM (document HTML)
let paragraphs = document.getElementsByTagName('p');
// Etant donné que le type de la variable déclarée précédemment est sous forme d'HTMLCollection, type qui est inexploitable avec une boucle foreach,
// on va devoir créer un tableau qui lui pourra être exploité à partir des paragraphes stockés.
// La syntaxe utilisée (appellée spread operator) est une facilité qui a été ajoutée avec EcmaScript 2015 et qui permet de créer un tableau à partir d'un itérateur (ici notre HTMLCollection)
let paragraphArray = [...paragraphs];

// Au scroll sur la fenêtre, l'évènement déclenchera une fonction flêchée anonyme :
window.onscroll = () => {
    // Dans cette fonction, nous allons parcourir le tableau contenant tous les paragraphes grâce à une boucle foreach,
    // Chaque "p" sera assigné au paramètre "element" pour chaque tour de boucle, ainsi, au premier tour de boucle, element sera initialisé avec le premier paragraphe "firstParagraph"
    paragraphArray.forEach(element => {
        // Ensuite nous allons tester la comparaison de 2 valeurs :
        // - Où se trouve l'utilisateur sur le site (window.scrollY nous donnera le nombre de pixels correspondant au défilement réalisé par l'utilisateur)
        // - Où se trouve l'élément que nous devons faire apparaître (element.getBoundingClientRect().top renverra la valeur en pixels de la position du haut de l'élément ciblé, ici, le paragraphe)
        // Si la première valeur est supérieure à la seconde, c'est que l'utilisateur se rapproche du paragraphe à afficher, et donc, qu'il faut l'afficher
        if (window.scrollY >= element.getBoundingClientRect().top) {
            element.style.visibility = 'visible';
        }
    });
}