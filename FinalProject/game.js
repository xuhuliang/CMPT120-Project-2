// game.js

var score = 0;
var CurrentLocation = 0;
var bluekey = 0;
var redkey = 0;            
var playerHasBlueKey = 0;
var playerHasRedKey = 0;
var Bluekey = "";
var Redkey  = "";


                                      //  N   S   E    W
var navigationArray = new Array(     /*  0   1   2    3 */
                                /* 0 */ [ 1, -1, -1, -1],
                                /* 1 */ [-1,  0,  2, -1],
                                /* 2 */ [ 3, -1,  5,  1],
                                /* 3 */ [ 4,  2, -1, -1],
                                /* 4 */ [-1,  3, -1, -1],
                                /* 5 */ [-1, -1,  6,  2],
                                /* 6 */ [-1,  7, -1,  5],
                                /* 7 */ [ 6, -1,  8, -1],
                                /* 8 */ [-1,  9, -1,  7],
                                /* 9 */ [ 8, -1, -1, -1]
                                
                                );
                                
var locationArray = new Array();
                                
                                
function prototype_location(_id, _name, _description){
    this.id = _id;
    this.name = _name;
    this.description = _description;
    
    this.toString = function(){
        var returnValue = "";
        returnValue = this.description + "\n";
        return returnValue;
    }                  
}        

function locations(){
    location_0 =  new prototype_location("0", "Wall", "You are now standing in front of a wall. There is a sentence written on the wall:[This is not an easy game, my boy.]");
    location_1 =  new prototype_location("1", "Starting point", "It seems like your starting position, hmm...");
    location_2 =  new prototype_location("2", "T-junction", "Wow, you are facing a T-junction. It is really not an easy game!");
    location_3 =  new prototype_location("3", "Blue key", "Blue key!");
    location_4 =  new prototype_location("4", "Blue Box", "A blue box in front of you!");
    location_5 =  new prototype_location("5", "Weird Words", "You find some words on the wall:[E^!t tH!$ W@?]");
    location_6 =  new prototype_location("6", "Second corner", "You are standing in a new corner, and you are looking forward to escape!");        
    location_7 =  new prototype_location("7", "Third corner", "Corner again and again! Anxiety exists on your face.");
    location_8 =  new prototype_location("8", "Second time weird words", "You find some weird words which are similar to those you saw last time:[E^!t o\ ?oVr $oVtH $!be]");
    location_9 =  new prototype_location("9", "Red door", "There is a red door in front of you.");
    
    locationArray[0] = location_0;
    locationArray[1] = location_1;
    locationArray[2] = location_2;
    locationArray[3] = location_3;
    locationArray[4] = location_4;
    locationArray[5] = location_5;
    locationArray[6] = location_6;
    locationArray[7] = location_7;
    locationArray[8] = location_8;
    locationArray[9] = location_9;
}
    
function btn_navigation(direction){
    direction = direction;
    var newLocation = navigationArray[CurrentLocation][direction];
    if(newLocation !== -1){
       CurrentLocation = newLocation;
       locations();
       buttonstatus();
       updateDisplay(locationArray[CurrentLocation]);
    } else { 
       updateDisplay(locationArray[CurrentLocation]);
       buttonstatus();
    }
}
         
function help(){
    var ta = document.getElementById("taGame");
    ta.value = "The ONLY valid commands are N,W,S,E,n,w,s,e for directions, I,i for Inventory and TAKE,take for take\n"+ ta.value;
}    
        
function btn_go_click(){
    var userInput = document.getElementById("txtInput").value;
        if ((userInput === "n")  || (userInput === "N")) {
            btn_navigation(0);
        } else if ((userInput === "s") || (userInput === "S")) {
            btn_navigation(1);
        } else if ((userInput === "e") || (userInput === "E")) {
            btn_navigation(2);
        } else if ((userInput === "w") || (userInput === "W")) {
            btn_navigation(3);
        } else if ((userInput === "help") || (userInput === "HELP")) {
            help();
        } else if ((userInput === "take") || (userInput === "TAKE")) {
            inventory();
        } else if ((userInput === "i") || (userInput === "I")){
            btn_inventory_click();    
        } else {
            updateDisplay("Error. Unknown input: " + userInput.value + "Please type help for guides");
        }
}
  
function updateDisplay(msg){
   msg = msg;
   var ta = document.getElementById("taGame");
   ta.value = msg + " \n" + ta.value;
} 

function btn_txtInputGo_click(){
    var userInput = document.getElementbyId("userTxtInput").value;
    alert(userInput);
}
      
function scoreCounter(){
    score = score + 5;   
}
    
function Score(){
    updateDisplay("Score: " + score + "\n");
}

function buttonstatus(){
    if(CurrentLocation === 0){
    document.getElementById("north").style.visibility="visible";
    document.getElementById("south").style.visibility="hidden";
    document.getElementById("west").style.visibility="hidden";	
    document.getElementById("east").style.visibility="hidden";
    } else if(CurrentLocation === 1){
    document.getElementById("north").style.visibility="hidden";
    document.getElementById("south").style.visibility="visible";
    document.getElementById("west").style.visibility="hidden";	
    document.getElementById("east").style.visibility="visible";
    } else if (CurrentLocation === 2){
    document.getElementById("north").style.visibility="visible";
    document.getElementById("south").style.visibility="hidden";
    document.getElementById("west").style.visibility="visible";	
    document.getElementById("east").style.visibility="visible";
    } else if(CurrentLocation === 3){
    document.getElementById("north").style.visibility="visible";
    document.getElementById("south").style.visibility="visible";
    document.getElementById("west").style.visibility="hidden";	
    document.getElementById("east").style.visibility="hidden";
    } else if(CurrentLocation === 4){
    document.getElementById("north").style.visibility="hidden";
    document.getElementById("south").style.visibility="visible";
    document.getElementById("west").style.visibility="hidden";	
    document.getElementById("east").style.visibility="hidden";
    } else if(CurrentLocation === 5){
    document.getElementById("north").style.visibility="hidden";
    document.getElementById("south").style.visibility="hidden";
    document.getElementById("west").style.visibility="visible";	
    document.getElementById("east").style.visibility="visible";
    } else if(CurrentLocation === 6){
    document.getElementById("north").style.visibility="hidden";
    document.getElementById("south").style.visibility="visible";
    document.getElementById("west").style.visibility="visible";	
    document.getElementById("east").style.visibility="hidden";
    } else if(CurrentLocation === 7){
    document.getElementById("north").style.visibility="visible";
    document.getElementById("south").style.visibility="hidden";
    document.getElementById("west").style.visibility="hidden";	
    document.getElementById("east").style.visibility="visible";
    } else if(CurrentLocation === 8){
    document.getElementById("north").style.visibility="hidden";
    document.getElementById("south").style.visibility="visible";
    document.getElementById("west").style.visibility="visible";	
    document.getElementById("east").style.visibility="hidden";
    } else if(CurrentLocation === 9){
    document.getElementById("north").style.visibility="visible";
    document.getElementById("south").style.visibility="hidden";
    document.getElementById("west").style.visibility="hidden";	
    document.getElementById("east").style.visibility="hidden";
    }
}


function inventoryPrototype(_id, _name){
    this.id = _id;
    this.name = _name;
    
    this.toString = function(){
        var returnValue = "";
        returnValue = "Id: " + this.id + "\n" +
                      "Name: " + this.name + "\n";
        return returnValue;
    }                  
}

var inventoryArray = new Array();
                                     
var inventoryArray = new Array(     // Location
                                /* 0 */ [-1],
                                /* 1 */ [-1],
                                /* 2 */ [-1],
                                /* 3 */ [ 0],
                                /* 4 */ [ 1],
                                /* 5 */ [-1],
                                /* 6 */ [-1],
                                /* 7 */ [-1],
                                /* 8 */ [-1],
                                /* 9 */ [-1]
                                
                                );

function inventory(){
    bluekey = new inventoryPrototype(0, "Blue key");
    redkey =  new inventoryPrototype(1, "Red key");
    
    if((CurrentLocation === 3) && (playerHasBlueKey === 0)){
       inventoryArray[0] = bluekey;
       updateDisplay("You got the blue key.");
       playerHasBlueKey = 1;
       Bluekey = "a blue key";
       } else if((CurrentLocation === 4) && (playerHasBlueKey === 1) && (playerHasRedKey === 0)){
       inventoryArray[1] = redkey;
       updateDisplay("You got the red key.");
       playerHasRedKey = 1;
       Redkey = " and a red key";
       }
    else {
       updateDisplay("You can not take anything here.");
       }  
}
 
 function btn_inventory_click(){
       updateDisplay("Inventory: " + Bluekey + Redkey + ".");
}
 function win(){
      if ((CurrentLocation === 9) && (playerHasRedKey === 1)){
         updateDisplay("You successfully opened the red door and got out of the maze!");  
         alert("You won!");
      } else {
         updateDisplay("You are not able to open this door :(");
      }
} 