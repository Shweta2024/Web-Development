
## Structure of Function

```js

//function definition
function functionName()
{
    //body of the function
}

//function call
functionName();


```

## Structure of if-else statement


```js

if(/*condition*/)
{
    //set of instructions that will be executed when the if statement gets ture
}
else
{
    //set of instructions that will be executed when the if statement gets false
}

```

## Comparators 

| comparators | what are they used to check |
|-------- |------ |
| ===  | equals to |
| !=   | not equals to |
| >    | greater than |
| <    | less than |
| >=   | greater than equal to |     
| <=   | less than equal to |

## what is the difference between === and == ?

- === it checks for eqaulity of values of two variables and their data type.
eg - say if value of a is 1 and value of b is "1" ,(a is number and b is string), so if we'll compare them we'll get that they aren't equal beacuse their data type isn't equal.

```js

var a = 1;
var b = "1";

if(a === b)
    console.log("a and b are Equal");
else
    console.log("a and b are NOT Equal");

/*OUTPUT    
a and b are NOT Equal
*/

```

- == it checks only for the equality of values of variables and not their dada type.
eg - say if value of a is 1 and value of b is "1" ,(a is number and b is string), so if we'll compare them we'll get that they are equal beacuse == doesn't checks for data type. It only checks for value.


```js

var a = 1;
var b = "1";

if(a == b)
    console.log("a and b are Equal");
else
    console.log("a and b are NOT Equal");


/*OUTPUT    
a and b are Equal
*/
    
```

## Logical Operators

- && AND

- || OR

- ! NOT

## Array operations

```js

//creates an empty array
var arr = []; 

//push 5 at the end of the array
arr.push(5);

//pops out a value from the end of the array
arr.pop();

//checks if  8 is present in arr or not
//if present it returns true
//else it gives false
arr.include(8);

```
