/* Descrizione: Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi. Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
NOTA: non è importante l'ordine con cui l'utente inserisce i numeri, basta che ne indovini il più possibile. */


// creo un array vuota

let generateNumbers = []

// imposto la funzione per generare numeri casuali 

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function randomNumbers() {
    const numbers = [];

    for (let i = 0; i < 5; i++) {
        numbers.push(getRndInteger(1, 50));
    }

    return numbers;
}

generateNumbers = randomNumbers()


const listNumbersEl = document.getElementById('numbers-list')

for (let i = 0; i < generateNumbers.length; i++) {
    const liEl = document.createElement('li')
    liEl.innerText = generateNumbers[i]
    listNumbersEl.append(liEl)
}


