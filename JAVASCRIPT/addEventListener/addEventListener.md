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