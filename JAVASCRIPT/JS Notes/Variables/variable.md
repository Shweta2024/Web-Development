## <summary>Variables in JavaScript </summary> 

- Variables are containers used to store data.

- A JavaScript variable can hold any type of data.

- JavaScript is also called **Dynamically typed language/untyped language** .It is because once we declare a variable with the ```var``` keyword it can take values of different data types as well.


```

//number
var container = 5;
console.log(container + " " + typeof (container));

//string
container = "shweta"
console.log(container + " " + typeof (container));

//boolean
container = true
console.log(container + " " + typeof (container));


```

## <summary> Variable Naming Convntion </summary>

- name can contain letters, digits, underscore(_) and dollar($).

- it can ONLY start with _ , $ and letters.

- can't contain spaces

- use **camelCasing**


## <summary> Data Types </summary>

- **Primitive data types**

1) Number : represents both integer & floating-point number.

2) String : series of characters.

3) Boolean : stores either of the two values : true/flase.

4) BigInt : Represents the whole numbers that are larger than 2^(53)-1.To form a bigInt number we need to append ```n``` at its end.

eg - let num = 123453534532324n;

5) Symbol : it is a built-in object & its constructor returns a unique symbol.

6) Null : it has only one value : null.

7) Undefined : a variable that has been declared but not initialized with any value, then by default it is assigned the value ```undefined```.

**note** : according to JS null is equal to undefined.

- **Complex data type**

1) Object : collection of properties & each property is represent as a ```key:value``` pair.

 
## <summary> Template Literals </summary>

Why to use Template Literals ?

- It allows us to substitute a part of string with the value of any other variable.This process is called **String Interpolation**.

- We get the feature of writing multi line strings.


```js

var name = "Shweta Bhagat";
var greet = `Hello! I' am ${name}`;
console.log(greet);

```


How to acheive template literal?

- wrap the entire string inside the backticks(`).


## <summary> Type Conversion </summary>

### conversion to string

```js

var num = 2;
var str = String(num);
console.log(str);

```


### conversion to number

```js

var str = "2";
var num = Number(str);
console.log(num);

```