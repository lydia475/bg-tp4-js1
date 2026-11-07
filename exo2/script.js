"use strict"; // Déclaration du mode strict (vu dans le slide 52)

// 1. Déclaration d'un tableau simple (vu dans le slide 39)
const tableauEtudiants = ["Etudiant1", "Etudiant2", "Etudiant3"];

// 2. Déclaration d'un objet littéral (vu dans le slide 40)
const objetEtudiant = {
    nom: 'John',
    prenom: 'DOE',
    age: 30
};

// 3. Déclaration d'un tableau d'objets (vu dans le slide 41)
const tableauObjetsEtudiants = [
    { nom: "nom1", prenom: "prenom1", age: 21 },
    { nom: "nom2", prenom: "prenom2", age: 22 },
    { nom: "nom3", prenom: "prenom3", age: 23 }
];

// Fonction f1 : Parcourt le tableau simple avec une boucle (vu dans le slide 45)
function f1() {
    for (let i = 0; i < tableauEtudiants.length; i++) {
        console.log(tableauEtudiants[i]); // Affichage console (vu dans le slide 34)
    }
}

// Fonction f2 : Affiche directement l'objet étudiant (vu dans le slide 40)
function f2() {
    console.log(objetEtudiant); // Affichage console (vu dans le slide 34)
}

// Fonction f3 : Parcourt le tableau d'objets et concatène nom-prenom-age (vu dans les slides 41 et 45)
function f3() {
    for (let i = 0; i < tableauObjetsEtudiants.length; i++) {
        const etudiant = tableauObjetsEtudiants[i];
        console.log(etudiant.nom + "-" + etudiant.prenom + "-" + etudiant.age); // Affichage console (vu dans le slide 34)
    }
}