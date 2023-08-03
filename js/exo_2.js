const { Observable, filter } = require('rxjs');
const { map } = require('rxjs/operators');

// Observable 
const Users = Observable.create((observer) => {
    let users = [
        { id: 1, name: 'alan', score: 50 },
        { id: 2, name: 'albert', score: 150 },
        { id: 3, name: 'xavier', score: 0 },
        { id: 4, name: 'benoit', score: 5 },
        { id: 5, name: 'phil', score: 17 },
        { id: 6, name: 'sophie', score: 45 },
        { id: 7, name: 'stephan', score: 900 },
        { id: 8, name: 'elie', score: 178 },
        { id: 9, name: 'tony', score: 15 },
        { id: 10, name: 'robert', score: 11 },
        { id: 11, name: 'gerard', score: 8 },
        { id: 12, name: 'sandra', score: 6 },
        { id: 13, name: 'caroline', score: 23 }
    ];
//Ordonner les users par ordre décroissant de score
users.sort((u1, u2) => u2.score - u1.score);
// console.log(users.sort((u1, u2) => u2.score - u1.score));

let count = 0;
    const interval = setInterval(() => {
        if (count >= users.length) {
            // TODO 
            observer.complete();
        }else {
            observer.next(users[count]);
            count++;

        }
    }, 1000);

    // méthode appelée lorsqu'on se désinscrit
    return () => clearInterval(interval);

});

// TODO mapping des données avec les opérateurs
//filtrer les scores supérieure à 100

const pipeUsers = Users.pipe(
    filter((user) => user.score > 100),
    map((user) => `Nom: ${user.name.charAt(0).toUpperCase() + user.name.slice(1).toLowerCase()}`),
)
//mettre les 1ères lettre de chaque nom en Majuscule
// TODO souscription et affichage des valeurs à l'aide d'un console.log

//brute
// Users.subscribe({
//     next: (value) => console.log(value),
//     complete: () => console.log('finished !!'),
// });

//données/scores traités
pipeUsers.subscribe({
    next: (value) => console.log(value),
    complete: () => console.log('finished !!'),
});