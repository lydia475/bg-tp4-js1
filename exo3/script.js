var Students = [
    [1000, "JOHN", "DOE", 14, 5],
    [2000, "BOB", "CARLTON", 7, 1],
    [3000, "RAYANE", "SMITH", 13, 3]
];

// B : prend un seul paramètre float (la note) et retourne un booléen
function B(note) {
    return note >= 10;
}

// A : parcourt les étudiants, appelle B et affiche le résultat
function A() {
    for (var i = 0; i < Students.length; i++) {
        var id = Students[i][0];
        var note = Students[i][3];
        if (B(note)) {
            console.log(id + ": ADMIS");
        } else {
            console.log(id + ": AJOURNÉ");
        }
    }
}