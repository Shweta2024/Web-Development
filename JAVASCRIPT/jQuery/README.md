## jQuery -> it's a JavaScript library

- it shortens our code

```js

document.querySelector("h1");

```

The above line of code can be written in jQuery as shown below :- 

```js

jQuery("h1");

//OR

$("h1");

```

jQuery("h1") and $("h1") both are same they will do the same job as that of documment.querySelector and that's it will select the tag/class/id written within it.

**cdn** -> content delivery network

## Manipulating Class

### adding class to an element

```js

$("h1").addClass("heading");

```

### removing class from an element

```js

$("h1").removeClass("heading");

```

## Manipulating CSS

### getting css value of a property

```js

$("h1").css("color");

```

### setting css value of a property

```js

$("h1").css("color","blue");

```

- although this isn't prefered because javaScript is for behaviour and css is for styling .So we can add a class to the element whose css we want to change, using addClass method and can write the values of the property that we want to change in the css file inside that particular class.


## Manipulating HTML

## Changing text

```js

$("h1").text("shweta bhagat");

```

**NOTE** :- since ```js document.querySelector("h1"); ``` selects only the 1st h1 element ,so for selecting all the h1 elements we were supposed to use ```js document.querySelectorAll("h1"); ```.
But in case of jQuey, when we are writing ```js  $("h1"); ``` it selects all the h1 element.
So if we'll write  ```js  $(h1).text("shweta bhagat"); "``` ,then it'll change the text of all the h1 to "shweta bhagat".

**But what if we don't want to change the text of all the h1 instead we want to change the text of only one h1,then what should we do?**

Well, in that case we'll use something like this :- 

```js

$("h1").html("shweta bhagat");

```

- the above code selects only one h1 and changes its html to "shweta bhagat".
- by using html method instead of text method we can also add a new html tag to the current text ,something like this :- 

```js

$("h1").html("<em> shweta bhagat </em>");

```

## Manipulating Attributes

### getting attribute

```js

$("a").attr("href");//getting link of the anchor tag

$("img").attr("src");//getting source of image

```

### setting attribute

```js

$("a").attr("https://www.youtube.com");

```

## Adding EventListener

```js

$("h1").click(function(){
    alert("I got clicked!");
});


// OR

$("h1").on("click",function(){
    alert("I got clicked!");
});

```

## Adding elements using jQuery

- **before()** -> it adds the html written inside the method before() **before the current selected tag**.

```js

$("h1").before("<p>hey this is shweta</p>");

```

- **after()** -> it adds the html written inside the after() method, **after the current selected tag**.

```js

$("h1").after("<p>hey this is shweta</p>");

```

- **prepend()** -> it adds the html written inside the prepend() method **inside the html of the current selected tag but at the start**.

```js

$("h1").prepend("<p>hey this is shweta</p>");

```

- **append()** -> it adds the html written inside the append() method **inside the html of the current selected tag but at the end**.

```js

$("h1").append("<p>hey this is shweta</p>");

```

## Method to remove an element

```js

$("h1").remove();

```

## Adding animations
There are some built-in methods that we can use to add animations like :- 
- hide() & show()
- slideUp() & slideDown()
- fadeIn() & fadeOut()

but if we wan to define our own animation then we can do it in this way :- 

```js

$("h1").click(function()
{
    $("h1").animate({opacity : 0.5});
});

```
- now inside the animate() method we can write our own css but we can write only those css which has **numeric values** like width,height,opacity,margin ; and we can't write color or background-color.