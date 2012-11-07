//move functions and updateDisplay function
var currentLocation = 1;
 function btn_direction_click(direction) {
    if (direction === 1) {                   //moving north
       if (currentLocation == 1) {
          currentLocation = 2;
          score2();
        } else if (currentLocation == 3) {
          currentLocation = 4;
          score4();
        } else if (currentLocation == 4) {
          currentLocation = 5;
          score5();
        } else if (currentLocation == 8) {
          currentLocation = 7;
        } else if (currentLocation == 10) {
          currentLocation = 9;
        }
          displayNewLocation();
          SetButtonStatus();   
        } else if (direction === 2) {        //moving west
          if (currentLocation == 3) {
          currentLocation = 2;
        } else if (currentLocation == 6) {
          currentLocation = 3;
        } else if (currentLocation == 7) {
          currentLocation = 6;
        } else if (currentLocation == 9) {
          currentLocation = 8;
        }
          displayNewLocation();
          SetButtonStatus(); 
        } else if (direction === 3) {        //moving south
          if (currentLocation == 2) {
          currentLocation = 1;
        } else if (currentLocation == 4) {
          currentLocation = 3;
        } else if (currentLocation == 5) {
          currentLocation = 4;
        } else if (currentLocation == 7) {
          currentLocation = 8;
          score8();
        } else if (currentLocation == 9) {
          currentLocation = 10;
          score10();
        } 
          displayNewLocation();
          SetButtonStatus(); 
        } else if (direction === 4) {        //moving east
          if (currentLocation == 2) {
          currentLocation = 3;
          score3();
        } else if (currentLocation == 3) {
        currentLocation = 6;
          score6();
        } else if (currentLocation == 6) {
          currentLocation = 7;
          score7();
        } else if (currentLocation == 8) {
          currentLocation = 9;
          score9();
        }
          displayNewLocation();
          SetButtonStatus(); 
        }
        else {
          updateDisplay("Error. Unknown direction: ");
        }
   }
 function updateDisplay(msg) {
    msg = msg + " [" + currentLocation + "]";
    var ga = document.getElementById("game");
    ga.value = msg + "\n" + ga.value;
 }
 function btn_go_click() {
     var userInput = document.getElementById("txtInput");
     if (userInput.value === "N" || userInput.value === "n") {  //moving north
         btn_direction_click(1);
      }
      else if (userInput.value === "W" || userInput.value === "w") {  //moving west
          btn_direction_click(2);
      }
      else if (userInput.value === "S" || userInput.value === "s") {  //moving south
          btn_direction_click(3);
      }
      else if (userInput.value === "E" || userInput.value === "e") {  //moving east
          btn_direction_click(4); 
      } 
      else if (userInput.value === "help") {       // help command
          updateDisplay("The ONLY valid commands are N,W,S,E,n,w,s,e");
      }
      else {
          updateDisplay("Error. Unknown direction: " + userInput.value);
          updateDisplay("The ONLY valid commands are N,W,S,E,n,w,s,e");
     }
 }
 function displayNewLocation() {
    switch (currentLocation) {
      case 1 : location1(); break;
      case 2 : location2(); break;
      case 3 : location3(); break;
      case 4 : location4(); break;
      case 5 : location5(); break;
      case 6 : location6(); break;
      case 7 : location7(); break;
      case 8 : location8(); break;
      case 9 : location9(); break;
      case 10 : location10(); break;
      default: updateDisplay("Invalid currentLocation value: "+ currentLocation + ".")
 }
 }