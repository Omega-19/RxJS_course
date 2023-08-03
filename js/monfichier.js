const { of } = require('rxjs');
const { max } = require('rxjs/operators');

// liste de points
const source = of(
    { x: 10.5, y: -10.6 },
    { x: 5.5, y: 8.3 },
    { x: -7.3, y: 3.3 },
    { x: 8.9, y: -2.6 }
)
// .pipe(
//     max(
//         (x,y) => x > y ? 1: -1 
//     )
// )
// .subscribe((valeur) => {
//     console.log(valeur);
// });

// mapping data  TODO filtre
const maxPoint = source.pipe(
    //si inférieure je mets -1 : 1
    // max((pA, pB) => Math.sqrt(pA.x ** 2 + pA.y ** 2) < Math.sqrt(pB.x ** 2 + pB.y ** 2)  ? -1 : 1),

    //si supérieure je mets 1 : -1

    max((pA, pB) => Math.sqrt(pA.x ** 2 + pA.y ** 2) > Math.sqrt(pB.x ** 2 + pB.y ** 2)  ? 1 : -1)
);
//s'inscrire TODO et afficher les données

maxPoint.subscribe(v => console.log(`le point le plus éloigné est x: ${v.x} et y: ${v.y}` ));