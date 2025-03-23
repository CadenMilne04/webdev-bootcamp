var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var firstTime = true;
var level = 0;

$(document).on("keypress", function(){
    if(firstTime === true){
        level = 0;
        gamePattern = [];
        nextSequence();
    }
    firstTime = false;
});

function nextSequence(){
    var randomNumber = Math.floor(Math.random() * 4);
    var randomColor =  buttonColors[randomNumber];

    userClickedPattern = [];

    level++;
    $("h1").text("Level: " + level);

    gamePattern.push(randomColor);
    $("#" + randomColor).fadeOut(50).fadeIn(50);
    playSound(randomColor);
}

$(".btn").on("click", function(e){
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    console.log(userClickedPattern);

    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length-1);
});

function playSound(color){
    var audio = new Audio("./sounds/" + color + ".mp3");
    audio.play();
}

function animatePress(color){
    $("#" + color).addClass("pressed");
    setTimeout(function(){
        $("#" + color).removeClass("pressed");
    },100);
}

function checkAnswer(currLevel){
    if(userClickedPattern[currLevel] === gamePattern[currLevel]){
        console.log("success");
        if(userClickedPattern.length === gamePattern.length){
            setTimeout(function(){
                nextSequence();
            },1000);
        }
    }
    else{
        console.log("wrong");
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },500);
        $("h1").text("Game Over Press Any Key To Retry");
        firstTime = true;
    }
}