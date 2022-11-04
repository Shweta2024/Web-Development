
//since we'll get an array of elements having tag as h1 , so we will have to specipy the h1 whose property we want to change
document.getElementsByTagName("h1")[0].innerHTML = "welcome";


//it selects the element that has the id as name and changes its size to 200px
//id is always unique therefore we'll ge only 1 item always
//in css we write font-size but in javascript we have to write in camel casing i.e. fontSize
document.getElementById("name").style.fontSize = "200px";

//getElementsByClassName -> it gives an array of all the elements that are of the class "list"
//so we'll have to specify that which array element's property we want to change
document.getElementsByClassName("list")[1].style.color = "red";



//-------------------------------------querySelector() -> read more about it in the readme.md----------------------------------------


//this is used to select the achor tag which is nested inside a list tag and then to change its color to red
document.querySelector("li a").style.color = "red";

//this is used to select the element with id #name and then to set its color to blue.
document.querySelector("#name").style.color = "blue";

//in css we write background-color but in javascript we have to write in camel casing i.e. backgroundColor
//also in css we don't write the values like yellow inside double quote but in case of js we have to specify values inside double qoutes
document.querySelector("#btn").style.backgroundColor = "yellow";


//--------------------------------------------------------------------------------------------------------------------------------

// document.querySelector(".button").classList.add("visible"); -> this will give the list of all the class with class name button 
//and will add the visible class to them


// document.querySelector(".buttpon").classList.remove("visible");
//this will give all the class with the class name button and will remove visible class from all of them


//this will add if ithe visible class isn't added and if its already added then it will remove the visivle class
// from all the class tha has class name button
// document.querySelector(".button").classList.toggle("visible");

//----------------------------------------------------------------------------------------------------------------------------

document.querySelector(".heading").classList.add("size");

document.querySelector("#name").classList.add("color");

//-----------------------------------------------------------------------------------------------------------------------------

//we can also use html tages with the value to change the properties of values
//it is also used to manipulate the tag inside the selected tag
document.querySelector("h2").innerHTML = "<em>using innerHTML<em>";


//we can't use html tags
//it only manipulate the text inside the selected tag
document.querySelector("h3").textContent = "using textContent"


//Manipulating attributes
document.querySelector("a").setAttribute("href", "https://www.youtube.com")