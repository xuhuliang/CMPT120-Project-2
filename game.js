//init, inventory and score
var s1=5;//score of location 1 (players will have 5 points when they start the game)
var s2=0;//score of location 2
var s3=0;//score of location 3
var s4=0;//score of location 4
var s5=0;//score of location 5
var s6=0;//score of location 6
var s7=0;//score of location 7
var s8=0;//score of location 8
var s9=0;//score of location 9
var s10=0;//score of location 10
function init() {
    location1();
}

function btn_inventory_click(){
     updateDisplay("Inventory: " + bluekey + redkey + ".");
}
function score1() {      //the score of a position will be changed to 5 when the player first time go to that place.
   s1=5;
}
function score2() {
   s2=5;
}
function score3() {
   s3=5;
}
function score4() {
   s4=5;
}
function score5() {
   s5=5;
}
function score6() {
   s6=5;
}
function score7() {
   s7=5;
}
function score8() {
   s8=5;
}
function score9() {
   s9=5;
}
function score10() {
   s10=5;
}
function btn_score_click() {       
   alert(s1 + s2 + s3 + s4 + s5 + s6 + s7 + s8 +s9 +s10);       
}