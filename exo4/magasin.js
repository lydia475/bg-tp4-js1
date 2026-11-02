const produit = { nom: "Lunette", prix: 2500, quantite: 15 };
console.log("1) Produit :", produit);
console.log(`Valeur du stock de ${produit.nom} : ${produit.prix * produit.quantite} DA`);

const catalogue = [
  { nom: "Lunette",  prix: 2500,  quantite: 15 },
  { nom: "Boucle",   prix: 300,  quantite: 25 },
  { nom: "Montre",    prix: 18000, quantite: 5 },
  { nom: "Casquette",   prix: 2000,  quantite: 60 },
  { nom: "Chaine",   prix: 1500,  quantite: 12 }
];

const prixMoyen =
  catalogue.reduce((somme, p) => somme + p.prix, 0) / catalogue.length;
console.log("\n2) Prix moyen du catalogue :", prixMoyen);

const chers = catalogue.filter(p => p.prix > prixMoyen);
console.log("Produits dont le prix dépasse la moyenne :");
chers.forEach(p => console.log(`- ${p.nom} (${p.prix} DA)`));

const totalArticles = catalogue.reduce((acc, p) => acc + p.quantite, 0);
const valeurGlobale = catalogue.reduce((acc, p) => acc + p.prix * p.quantite, 0);
console.log("\n3) Nombre total d'articles :", totalArticles);
console.log("Valeur globale du stock :", valeurGlobale, "DA");

function valeurStock(p) {
  return p.prix * p.quantite;
}

console.log("\n4) Valeur du stock par produit :");
console.log("Lunette :", valeurStock(catalogue[0]));
console.log("Boucle   :", valeurStock(catalogue[1]));
console.log("Montre  :", valeurStock(catalogue[2]));
console.log("Casquette :", valeurStock(catalogue[3]));
console.log("Chaîne :", valeurStock(catalogue[4]));

function appliquerTraitement(cat, callback) {
  for (const p of cat) {
    callback(p);
  }
}

console.log("\n5) Noms des produits :");
appliquerTraitement(catalogue, p => console.log(p.nom));

console.log("Prix des produits :");
appliquerTraitement(catalogue, p => console.log(p.prix));