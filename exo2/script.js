// F1 : tableau de chaînes, affiché élément par élément
function f1() {
    var etudiants = ["Etudiant1", "Etudiant2", "Etudiant3"];
    for (var i = 0; i < etudiants.length; i++) {
        console.log(etudiants[i]);
    }
}

// F2 : un objet étudiant affiché tel quel
function f2() {
    var etudiant = { nom: "John", prenom: "DOE", age: 30 };
    console.log(etudiant);
}

// F3 : tableau d'objets, affiché sous la forme nom-prenom-age
function f3() {
    var etudiants = [
        { nom: "nom1", prenom: "prenom1", age: 21 },
        { nom: "nom2", prenom: "prenom2", age: 22 },
        { nom: "nom3", prenom: "prenom3", age: 23 }
    ];
    for (var i = 0; i < etudiants.length; i++) {
        console.log(etudiants[i].nom + "-" + etudiants[i].prenom + "-" + etudiants[i].age);
    }
}