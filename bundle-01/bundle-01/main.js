/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
for (let i = 0; i > 5; i++) {
    console.log(i);
}
//questo codice stampoa in console i numeri tra 0 e 5.
//errore logico: questo ciclo non funziona perche la condizione i > 5 e falsa.
// non ci sono errori di sintassi.


// ESERCIZIO 2
function addIfEven(num) {
    if (num % 2 = 0) {
        return num + 5;
    }
    return num;
}

//questo codice restituisce il numero + 5 se e pari.
//errore sintassi: la condizione di if e sbagliata, si deve usare == invece di =.
//non dovrebbero esserci se non consideriamo che aggiungendo 5 diventera dispari.


// ESERCIZIO 3
function loopToFive() {
    for (let i = 0, i < 5, i++) {
        console.log(i);
    }
}

//questo codice stampa in console i numeri da 0 a 5.
//errore sintassi: ci sono 2 virgole invece di punto e virgola.
//non ci sono errori logici.



// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i < numbers.length - 1; i++;) {
        if (numbers % 2 = 0); {
            evenNumbers.push(i);
        }
        return evenNumbers;
    }
}
displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]