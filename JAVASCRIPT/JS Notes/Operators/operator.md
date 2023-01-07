## <summary> Arithmetic Operators </summary> 

| Operator | Description | Example |
|   -----   |   ------- |   -----   |
| + |   Adds two values | a+b   |
| - | Subtracts two values | a-b |
| * | Multiplies two values | a*b |
| / | Divides two values | a/b |
| % | Gives remainder | a%b |
| ** | Exponentiation operator | a**b, a->base & b->power |

we can also use Math.pow(base,exponent)


## <summary> Unary Operators </summary>

| Unary Operators | Description | 
|   -----   |   ------- |  
| +x | Unary plus |
| -x | Unary minus |
| ++x |  Increment operator(prefix), increments and returns the value after incrementing. |
| --x |  Decrement operator(prefix), decrements & returns the value after decrementing. |
| x++ |  Increment operator(postfix),increments & returns the value before incrementing. |
| x-- |  Decrement operator(postfix),decrements & returns the value before decrementing. |


## <summary> Logical Operators </summary>

| Operators | Description | 
|   -----   |   ------- | 
|  || | logical OR  |
|  && | logical AND  |
|  ! | logical NOT |


## <summary> Comparison Operators </summary>

| Operators | Description | 
|   -----   |   ------- | 
| < | less than  |
| >  |  greater than |
| <=  | less than or equal to  |
| >=  | greater than or equal to  |
|  != | not equal to  |
|  == | equal to  |
| ===  |  Strict equal to |
| !==  |  Strict not equal to |


## <summary> What is the difference between == & === ? </summary>

== compares the two values that two values are equal or not.It does not checks if their data types are equal or not, whereas === checks even for the data types along with the values.


```js

console.log("20" == 20);;//true
console.log("20" === 20);//false

```