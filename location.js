var playerHasBlueKey = false;
var playerHasOpenedBlueBox = false;
var playerHasRedKey = false;
var bluekey = "";   // for inventory use
var redkey = "";    // for inventory use
function location1() {
  updateDisplay("It seems like your starting position, hmm...");
}
function location2() {
  updateDisplay("You are now standing in the corner. There is a sentence written on the floor:[This is not an easy game, my boy.]");
}
function location3() {
  updateDisplay("Wow, you are facing a T-junction. It is really not an easy game!");
}
function location4() {
  if (playerHasBlueKey == false) {
     updateDisplay("There is a blue key on the floor, hope it will help open something!");
     updateDisplay("You picked up the blue key.");
     playerHasBlueKey = true;
     bluekey = "a blue key";
     } else {
     updateDisplay("You remember that you picked up a blue key here.");
     }
}
function location5() {
   if (playerHasOpenedBlueBox == false) {
     updateDisplay("You are so lucky that you find a blue box in front of you!");
     updateDisplay("You opened the blue box by using the blue key, and you got a red key from the blue box.");
     playerHasOpenedBlueBox = true;
     playerHasRedKey = true;
     redkey = " and a red key";
     } else {
     updateDisplay("You remember that you opened a blue box and picked up a red key here.");
     }
}
function location6() {
  updateDisplay("You find some words on the wall:[E^!t tH!$ W@?]");
}
function location7() {
  updateDisplay("You are standing in a new corner, and you are looking forward to escape!");
}
function location8() {
  updateDisplay("Corner again and again! Anxiety exists on your face.");
}
function location9() {
  updateDisplay("You find some weird words which are similar to those you saw last time:[E^!t o\ ?oVr $oVtH $!be]");
}
function location10() {
     updateDisplay("There is a red door in front of you.");
  if (playerHasRedKey == true) {
     updateDisplay("You opened the red door with the red key.");
     alert("Congratulations! You won!");
     } else {
     updateDisplay("You are not able to open this red door, RED door!(go back and try to find some clues!)");
     }
}