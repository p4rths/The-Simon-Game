
var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];
var start = false;
var level = 0


$(document).keydown(function(){
    if(start === false){
    nextSequence();
    start = true;
}else{
    
}
});


$(".btn").click(function() {

  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);

  animatePress(userChosenColour);

  checkColor(userClickedPattern.length-1);
});









function checkColor(currentLevel){
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        console.log("succes");


        if (userClickedPattern.length === gamePattern.length){
            setTimeout(function () {
                nextSequence();
              }, 1000);
      


    }
    } else {
        console.log("wrong");
        var newAudio = new Audio("sounds/wrong.mp3");
        newAudio.play();

        $("body").addClass("game-over")
        setTimeout(function(){
            $("body").removeClass("game-over")
        }, 200);

        $("h1").html("Game Over, Press Any Key to Restart");

   startOver();



    }
}





function nextSequence() {

userClickedPattern = []


level++
$("#level-title").html(level);


  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

  playSound(randomChosenColour);
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}


function animatePress(currentColor) {

 
  $("#" + currentColor).addClass("pressed");

  
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);

  
}


   function startOver(){
    level = 0;
    gamePattern = [];
    start = false;
   }


    
