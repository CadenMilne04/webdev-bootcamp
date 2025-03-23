var num1 = Math.floor(Math.random() * 6);
var num2 = Math.floor(Math.random() * 6);

var dicePaths = [];

for(var i = 1; i < 7; i++){
    dicePaths.push("./images/dice" + i + ".png");
}


document.querySelector(".img1").setAttribute("src", dicePaths[num1]);
document.querySelector(".img2").setAttribute("src", dicePaths[num2]);

if(num1>num2){
    document.querySelector(".title").innerHTML = "Player 1 Wins!";
}
else if (num2>num1){
    document.querySelector(".title").innerHTML = "Player 2 Wins!";
}
else{
    document.querySelector(".title").innerHTML = "Tie";
}