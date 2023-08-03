`use strict`

const { Observable, map } = require('rxjs');
const products = {
    data: [
        {
            nom: "spaghetti", 
            prix: "26950", 
            qualité: "inférieure"
        },
        {
            nom: "tomate", 
            prix: "2650", 
            qualité: "supérieure"
        },
        {
            nom: "oignon", 
            prix: "26450", 
            qualité: "inférieure"
        },
        {
            nom: "piment_vert", 
            prix: "2950", 
            qualité: "supérieure"
        },
        {
            nom: "viande", 
            prix: "2350", 
            qualité: "inférieure"
        },
        {
            nom: "pain", 
            prix: "3200", 
            qualité: "supérieure"
        },
    ]
};
const observable = new Observable((suscriber) => {
    suscriber.next(products);
}).pipe(

    map((valeur) => {
        console.log("dans le premier opérateur valeur = ", valeur);
        return valeur.data;
    }),

    map((valeur) => {
console.log("dans le deuxième opérateur valeur = ", valeur);
return valeur.filter((prod => prod.qualité === "supérieure"));
    }),

    map((valeur) => {
        console.log("vérification de la présence du pain en stock");
        valeur.forEach(obj => {
            if (obj.nom === "pain") {
                console.log("pain est prêt");
            }
        })
        return valeur
    })
)
observable.subscribe((valeur) => {
console.log("Reception de : ", valeur);
});// cette fonction équivaut à const observer = {next: (valeur) => console.log(".....")}

