/*******************************************************************************
​
    Per questo esercizio, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?
​
    Inserisci i tuoi commenti con le risposte alla fine dell'esercizio
​
*******************************************************************************/


// ESERCIZIO 1
function checkAge() {
    const myAge = 32;
    const message = '';

    if (myAge < 18) {
        message = `Sei troppo giovane! Hai ${myAge} anni!`;
    } else {
        message = 'Hai più di 18 anni!';
    }
}
checkAge();

//questo docice controlla la variabile myAge e restituisce un messaggio diverso a seconda del valore.
//errore sintassi: la variabile message non puo essere modificata perche e stata dichiarata con const.
//errore logico non avrebbe senso creare una funzione che controlli una data se la suddetta non viene inserita da fonti esterne.

// ESERCIZIO 2
function printColorsNumber() {
    const colors = ['blue', 'red', 'yellow', 'green', 'black'];
    console.log(`Nella mia palette ci sono ${colors.lenght} colori!`);
}
printColorsNumber();

//questo codice stampa la lunghezza dell'array colors
//errore di sintassi: la proprieta lenght e scritta con l h sbagliata.
//non ci sono errori logici.


// ESERCIZIO 3
function addNumbers() {
    const userNumber = prompt('Inserisci un numero');
    const total = userNumber + 12;

    console.log(`Il risultato finale è ${total}`);
}
addNumbers();
//questo codice chiede all'utente di inserire un numero e poi lo somma a 12.
//errore logico: la variabile total non e stata convertita in numero.
//potrebbe essere un errore logico anche il mettere un  numero fisso da sommare.
//errore sintassi: non ci sono errori di sintassi.


// ESERCIZIO 4
function checkAccess() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];
    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = 'false';

    if (addresses.includes(userEmail)) {
        grantAccess = 'true';
    }

    if (grantAccess === true) {
        console.log('Accesso consentito!');
    } else {
        console.log('Accesso negato!');
    }
}
checkAccess();

//questo codice controlla se l email inserita nel prompt e presente nell array addresses e restituisce un messaggio diverso a seconda del risultato.
//errore di sintassi grantAccess se e un booleano non dovrebbe mettere gli apici.
//errore logico: non ci sono errori logici.
//sarebbe corretto mettere un controllo sul prompt per la chiocciola.


// ESERCIZIO 5 (suggerimento: c'è un solo errore)
function checkAccessImproved() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];

    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = 'false';

    for (let i = 0; i < addresses.length; i++) {
        const email = addresses[i];

        if (userEmail.length > 5) {

            if (email === userEmail) {
                grantAccess = 'true';

            }

        }

        if (grantAccess) {
            console.log('Accesso consentito!');
        } else {
            console.log('Accesso negato!');
        }
    }
    checkAccessImproved();

    //questo codice controlla se l email inserita nel prompt e presente nell array addresses e restituisce un messaggio diverso a seconda del risultato con un controllo sulla lunghezza dell email.
    //errore di sintassi: stesso errore del booleano di sopra e in piu c e un errore di indentazione. quindi erano due errori bugiardi.
    //errore logico: non ci sono errori logici.





























