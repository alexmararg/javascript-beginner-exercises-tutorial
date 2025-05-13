/*function sing() {
    let coro="";
    for(i=0; i < 11; i++) {
        switch (i) {
            case 4:
                coro+="there will be an answer, ";
                break;
            case 10:
                coro+="whisper words of wisdom, let it be";
                break;
            default:
                coro+="let it be, ";
                break;
        }
    }
    return coro;
}

//Your code above ^^^

console.log(sing());*/
function sing(){
    let str = "";
    for(let i = 0; i < 11; i++){
        if(i === 4) str += 'there will be an answer, ';
        else if (i === 10) str += 'whisper words of wisdom, let it be';
        else str += 'let it be, ';
    }
    return str;
}

//Your code above ^^^

console.log(sing());