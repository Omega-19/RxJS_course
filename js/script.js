`use strict`
// import { fromEvent } from "rxjs";
// import { Observable } from "rxjs/internal/Observable";
const { Observable, of, from } = require('rxjs');
// const btn = document.querySelector('button');
//au clique du bouton console loguer 'bouton cliqué'

// btn.addEventListener('click', () => console.log(('Bouton cliqué')))
// fromEvent(btn,'click').subscribe(()=> console.log('Bouton cliqué'));


//les noms de la fonction sont réservés et ne change pas
let monObserver = {
    next: (x) => console.log("une valeur reçue : " + x), //s'execute à chaque fois que le serveur retourne une valeur
    error: (err) =>console.error("Une erreur s'est produite : " + err),//s'execute si une erreur advient
    complete: () => console.log("L'Observer a reçu une modification de completion"),//s'execute quand on a récupéré toutes les valeurs
}

// let monObservable = new Observable((observer) => {
//     observer.next(12);
//     observer.next(3);
//     observer.next(2);
//     setTimeout(() => {
//         observer.next( 4 );//envoi d'une notification
//         observer.error( "une erreur s'est produite dans le navigateur");//envoi d'une notification
//         observer.complete();//envoi d'une notification
//     } , 4000)
// }); //ce code devient:

let obs = of(12, 3, 4, 2);

let o = from([12, 3, 4])

let source = of(
    { x: 10.5, y: -10.6 },
    { x: 5.5, y: 8.3 },
    { x: -7.3, y: 3.3 },
    { x: 8.9, y: -2.6 }
);

// monObservable.subscribe(monObserver);
obs.subscribe((x) => {
    console.log("une valeur reçue: " + x);
});
source.subscribe((x) => {
    console.log("une valeur reçue: " + x);
});
o.subscribe((x) => {
    console.log("une valeur reçue: " + x);
});