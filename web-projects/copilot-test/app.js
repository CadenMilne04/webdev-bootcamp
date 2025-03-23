const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

reader.question("What is your name? ", function(answer) {
    console.log("Hi " + answer);
    reader.close()
});