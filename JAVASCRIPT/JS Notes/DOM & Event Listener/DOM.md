## <summary> DOM(Document object Model) </summary>

- DOM represents the document in a logical structure so that we can access it & manipulate it.

- DOM  represents the webpage in a structural way so that it becomes easier for the programmers to manipulate them.

- Using DOM we can manipulate tags, IDs, classes, attributes or HTML elements.

- So basically it is an API that interacts with the HTML or XML document.

NOTE :- The query selector only takes parameters as the :- Tag name , Class name & ID name, attributes. 

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

<summary> EventListener </summary>

- addEventListener is a **Higher Order Function** -> since it takes other functions as a parameter.

- The function that are passed as parameter in the addEventListener are called **Call Back Function** because they have to wait for an event to occur and after that they gets executed.

- call back functions aren't called by us,instead its called by the event that triggered it.(like clicking a button can call it).

## Syntax :- 

```js

var current = document.querySelector("Name");//in place of name write -> class name or tag name or id name

current.addEventListener(input1,input2);

```
- input1 -> it is the target Event.
example - click , mouseover etc.

- input2 -> it is the listener i.e. the function that will be called when the target event occurs.

### Wrinting addEventListner

```js

document.querySelector("button").addEventListener("click",handleClick);

function handleClick(){
    alert("I got clicked");
}

```

In the above sample, the **target event is click** and the **event listener is handleClick** when the button will get clicked it will show an alert as "I got clicked".

<h3 style = "color:green;">NOTE</h3> :- we only write the function name, we don't write the funtion call .Because if we'll write the function call then the moment at which the browser will reach this line it will show "I got clicked" but we don't want that.We want to display that alert only when we'll click the button.

## Wrinting addEventListner with anonymous function

```js

document.querySelector("click", function ()
                                {
                                    alert("I got clicked");
                                }
                      );

```

In case of using anonymous function, instead of writing the name of the function as the second parameter of the addEventListener, we write the entire function itself but without any name of the function.


```js
//suppose we are having many buttons and they have event listener to them
//now how will we know which button has triggered the listener .i.e. which button got cliked?

console.log(this);//this -> it gives the element that has triggered the event listener.

```

## <summary> Event Bubbling & Event Delegation </summary>

- it is nicely explained in this article : [**LINK**](https://www.freecodecamp.org/news/event-bubbling-in-javascript/#:~:text=What%20is%20Event%20Bubbling%3F,gets%20to%20the%20root%20element.)