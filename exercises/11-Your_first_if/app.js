let total = prompt('How many km are left to go?');

// Your code below:
total=Number(total);
if(total>100){
    console.log("We still have a bit of driving left to go");
}if (100>=total&&total>50) {
    console.log("We'll be there in 5 minutes");
} else {
    console.log("I'm parking. I'll see you right now");
}