//This will enable and disable some buttons based on current locations.

function SetButtonStatus() {
   if (currentLocation == 1) {
    document.getElementById("north").disabled = false;
    document.getElementById("west").disabled = true;
    document.getElementById("south").disabled = true;
    document.getElementById("east").disabled = true;
   } else if (currentLocation == 2) {
    document.getElementById("north").disabled = true;
    document.getElementById("west").disabled = true;
    document.getElementById("south").disabled = false;
    document.getElementById("east").disabled = false;
   } else if (currentLocation == 3) {
    document.getElementById("north").disabled = false;
    document.getElementById("west").disabled = false;
    document.getElementById("south").disabled = true;
    document.getElementById("east").disabled = false;
   } else if (currentLocation == 4) {
    document.getElementById("north").disabled = false;
    document.getElementById("west").disabled = true;
    document.getElementById("south").disabled = false;
    document.getElementById("east").disabled = true;
   } else if (currentLocation == 5) {
    document.getElementById("north").disabled = true;
    document.getElementById("west").disabled = true;
    document.getElementById("south").disabled = false;
    document.getElementById("east").disabled = true;
   } else if (currentLocation == 6) {
    document.getElementById("north").disabled = true;
    document.getElementById("west").disabled = false;
    document.getElementById("south").disabled = true;
    document.getElementById("east").disabled = false;
   } else if (currentLocation == 7) {
    document.getElementById("north").disabled = true;
    document.getElementById("west").disabled = false;
    document.getElementById("south").disabled = false;
    document.getElementById("east").disabled = true;
   } else if (currentLocation == 8) {
    document.getElementById("north").disabled = false;
    document.getElementById("west").disabled = true;
    document.getElementById("south").disabled = true;
    document.getElementById("east").disabled = false;
   } else if (currentLocation == 9) {
    document.getElementById("north").disabled = true;
    document.getElementById("west").disabled = false;
    document.getElementById("south").disabled = false;
    document.getElementById("east").disabled = true;
   } else if (currentLocation == 10) {
    document.getElementById("north").disabled = false;
    document.getElementById("west").disabled = true;
    document.getElementById("south").disabled = true;
    document.getElementById("east").disabled = true;
   } else {
     alert("something bad happened.");
   }
   }