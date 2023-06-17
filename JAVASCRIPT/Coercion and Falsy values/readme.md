## Falsy values:- 

- undefined
- null
- 0
- ""
- NaN

NOTE:- these are called falsy values because these when applied to an if condition will give false. All values except the above are truthy values.

### Example

```js

// instead of "" we can also write the other falsy values and in all the cases the control won't go inside the if the condition
let name = "" ;

//It won't go inside the if condition
if(name){
  console.log(name);
}

```


## Coercion
- Conversion of the data type of a value from one to another.
- It occurs implicitly in JS when we apply an operator or a function to a value of a different type.

### Example

```js

// converts Number 2 to string and concatenate them
console.log(2 + "2"); //22

// it will be true
if(2 == "2"){
  console.log("equal")
}

```
