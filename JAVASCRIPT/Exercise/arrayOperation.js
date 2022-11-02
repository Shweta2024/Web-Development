
//arrayName.include(Item) ->it gives ture if Item is present in arrayName,otherwise gives false.


var guestList = ["sahil", "shweta", "janu", "abc", "def", "ghi"];

var yourName = prompt("what's your name ?");

if (guestList.includes(yourName))
    alert("Welcome " + yourName);
else
    alert("Sorry " + yourName + " is not in our guestList");
