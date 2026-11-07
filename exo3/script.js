"use strict"; // Déclaration du mode strict (vu dans le slide 52)

// Déclaration du tableau d'objets Students (vu dans le slide 41)
const Students = [
    { id: 1000, nom: "JOHN", prenom: "DOE", note: 14, credit: 5 },
    { id: 2000, nom: "BOB", prenom: "CARLTON", note: 7, credit: 1 },
    { id: 3000, nom: "RAYANE", prenom: "SMITH", note: 13, credit: 3 }
];

// Fonction B : Prend un paramètre de type float et retourne un booléen (vu dans le slide 42 et 47)
function B(note) {
    // Retourne true si la note est >= 10, sinon false (vu dans le slide 42)
    return note >= 10;
}

// Fonction A : Parcourt les étudiants et appelle la fonction B pour la délibération (vu dans les slides 43 45 et 47)
function A() {
    for (let i = 0; i < Students.length; i++) {
        let etudiant = Students[i];

        // Appel de la fonction B avec la note (type float) de l'étudiant
        let resultatDeliberation = B(etudiant.note);

        // Condition pour afficher ADMIS ou AJOURNÉ selon le booléen retourné (vu dans le slide 43)
        if (resultatDeliberation) {
            console.log(etudiant.id + ": ADMIS"); // Affichage console (vu dans le slide 34)
        } else {
            console.log(etudiant.id + ": AJOURNÉ"); // Affichage console (vu dans le slide 34)
        }
    }
}