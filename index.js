// Code your solutions in this file
function writeCards(array, event) {
    arr = []
    for (let i = 0; i < array.length; i++) {
        arr.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`)
    }

    return arr;
}

function countDown(int) {

    let i = int;

    while (i >= 0 ) {
        console.log(i);
        i --;
    }
}