const names = [
    "Lisa",
    "Kaitlin",
    "Jan"
]

let messages = [];

function writeCards(names, event) {
    for(let i=0; i<names.length; i++){
        messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return messages;
};

function countDown() {
    for(let i=10; i>=0; i--){
        console.log(i)
    }
}