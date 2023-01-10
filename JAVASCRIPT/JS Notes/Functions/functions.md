## <summary> Function </summary>

- Function can be defined as a set of blocks of statements that performs a specific task.

- It can have zero, one or more parameters.

- Invoking function : calling function.

- if we do not specify the return value of a function, then it implicitly returns ```undefined``.


## <summary> Syntax </summary>

```js

//function definition
function functionName(parameters){
    //function body
}

//function calling
functionName(argument);

```


**Example**

```js

function add(num1, num2){
    return num1+num2;
}

var value = add(4,5);

```


## <summary> Function Hosting </summary>

- It allows us to use a function before declaring it in the program.

- It is the process in which JS moves the function declaration to the top of the program before execution.


**Example**

```js

display();//function hosting 

function display(){
    console.log("This is an example of function hosting");
}

```

## <summary> First-class citizens/ First class functions </summary>

- A first class function can be defined as those which can be treated as variables. In js we can pass functions to other functions as argument, return function from any other function and also can store functions in variables. This means that functions are just values of some other type.


```js

function add(num1,num2){
    return num1+num2;
}

function subtract(num1,num2){
    return num1-num2;
}

function calculate(operation,num1,num2){
    return operation(num1,num2);
}

console.log(calculate(add,4,2));
console.log(calculate(subtract,4,2));

```



## <summary> Higher Order functions </summary>

- A higher order functions can be defined as those which recieves a function as an argument or returns a function as output.

**Example** :- In the below example calculate() is a higher-order-function, it is because it is receiving add() function as an argument.


```js


function add(num1,num2){
    return num1+num2;
}

function calculate(operation,num1,num2){
    return operation(num1,num2);
}


console.log(calculate(add,2,4));

```


**Example** :- In the below example the function greet(), returns another function greetMorning(), hence the function greet() is  higher-order function.


```js

function greetMorning(){
    return console.log("good morning");
}

function greet(){
    return greetMorning();
}

greet();


```


## <summary> Anonymous Function </summary>

- They are the functions that don't have a name.

### Syntax for writing an anonymous function

```js

(function(){
    console.log("anonymous function");
});

```

- it is important to wrap the anonymous functions inside () ,it is because it then treats it as an expression.

- once we created an anonymous function we can't access it.Hence we can store it in a variable and the invoke the function later.

- in the below example we don't need wrap the anonymous function inside (), because we have assigned it to a constant show & hence it makes a valid expression.


**Example**

```js

const show = function(){
    console.log("anonymous function");
}

show();

```

- we can **immediately invoke** an anonymous function by adding a parenthesis just after its declaration.


```js


(function(){
    console.log("anonymous function");
})();

```


- anonymous functions can also be passed as arguments to other functions.

**Example**

```js

setTimeout(function() {
    console.log('Execute later after 1 second')
}, 1000);

```

## <summary> Arrow Functions </summary>

- In arrow function we don't use the ```function``` keyword.Here, we define the function by a single parenthesis and then ‘=>’ followed by the function body.

- Since we don't use the function keyword hence its important to assign the arrow function to a variable.

**Syntax**

```js

const myFunction = (parameters)=>{
    //function body
}

```

**Example**

```js

const add = (num1,num2)=>{
    console.log(num1+num2);
}

add(10,20);


```

**Limitition of Arrow function**
No binding of this keyword: It cannot be used as a method because of not having a binding of this keyword. Arrow function contains the lexical this instead of their own. The value of this will be based upon the scope in which they are defined. So the arrow function is defined in the window scope hence this will refer to the window object instead of the object in which the function has been written.

An arrow function doesn’t have its own this value. Instead, it uses the this value of the enclosing lexical scope. An arrow function also doesn’t have the arguments object.
Avoid using the arrow function for event handlers, object methods, prototype methods, and functions that use the arguments object.

## <summary> JavaScript pass-by-value or pass-by-reference?</summary>

Pass-by-values :- it means that the copy of arguments are sent to the function parameters during function call.Any changes made in the parameters inside the function won't be reflected anywhere.

Pass-by-reference :- it means that if the values of the parameters are changed within a function, then it will be reflected everywhere in the program.

In JavaScript ONLY **pass by value** is possible.
**Pass by reference** is not possible in JS.


## <summary> Recursive Function </summary>

- a function which calls itself untill the base condition is met.

```js

function fibonacci(num){
    if(num == 0)
        return 0;

    if(num == 1)
        return 1;

    return fibonacci(num-1)+fibonacci(num-2);
}

console.log(fibonacci(7));

```


## <summary> Pure Function </summary>

- a function which returns the same output for a particular argument.It does not depend on any other state change or data change during the execution of the program.

- below is the example of a pure function, as the result doesn't depends on any other factor except the price, which is passed as an argument.So for the same value of price we'll get the same result.


**Example**

```js 

function calculateGST(price){
    return price*0.05;
}

```

- below is not an example of a pure function, because the value of price is dependent on tax, so if we'll change the value of tax then the result will also get changed.


```js

var tax = 20;
function calculateGST(price){
    return price*(tax/100)+price;
}

```

- a function won't be called a pure function if it does :- 
    
    - Making a HTTP request
    
    - Mutating data
    
    - Printing to a screen or console
    
    - DOM Query/Manipulation
    
    - Math.random()
    
    - Getting the current time


