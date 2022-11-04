NOTE :- The query selector only takes parameters as the :- Tag name , Class name & ID name. 

- it will give the 1st element that has the given tag name.(in place of tagName write the name of the tag that you want to select).

```js

document.querySelector("tagName");

```

- it will give the 1st element that has the given class name.(in place of className write the name of the class that you want to select).

```js

document.querySelector(".className");

```

- it will give the 1st element that has the given id name.(in place of idName write the name of the id that you want to select).

```js

document.querySelector("#idName");

```

Since, querySelector() selects only the 1st element that has the given tag/class/id name.
So to select all the element with the given tag/class/id name we'll have to use **document.querySelectorAll();**.
- **document.querySelectorAll();** ->it gives the list of all the elements that has the given tag/class/id name.



```js

//this will give the list of all the class with class name button and will add the visible class to them
document.querySelector(".button").classList.add("visible");


//this will give all the class with the class name button and will remove visible class from all of them
document.querySelector(".buttpon").classList.remove("visible");



//this will add if ithe visible class isn't added and if its already added then it will remove the visivle class
// from all the class tha has class name button
document.querySelector(".button").classList.toggle("visible");


```

## Text manipulation 

### inner HTML vs textContent

- we can also use html tages with the value to change the properties of values
- it is also used to manipulate the tag inside the selected tag

```js

document.querySelector("h2").innerHTML = "<em>using innerHTML<em>";

```

- we can't use html tags
- it only manipulate the text inside the selected tag

```js


document.querySelector("h3").textContent = "using textContent"

```

## Attribute manipulation

- Attribute -> anything inside the tag except the tag are attributes like : src, href, class etc.


- it gives all the attributes that are there in in the anchor tag
eg - href

```js


document.querySelector("a").attributes;

```

- it selects the anchor tag and gives the value of the href attribute 

```js

document.querySelector("a").getAttribute("href");

```

- it selects the anchor tag and sets the value of its href attribute to "https://www.youtube.com".  

```js

document.querySelector("a").setAttribute("href","https://www.youtube.com")


```