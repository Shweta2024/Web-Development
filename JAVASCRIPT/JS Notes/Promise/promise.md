## <summary> Promise </summary>

- A promise can be defined as an object that encapsulates the result of an asynchronous operation.

### States of promise

- **Pending** : In the beginning, the state of a promise is pending, indicating that the asynchronous operation is in progress. Depending on the result of the asynchronous operation, the state changes to either fulfilled or rejected.

- **Fulfilled** : The fulfilled state indicates that the asynchronous operation was completed successfully.

- **Rejected** : The rejected state indicates that the asynchronous operation failed.


### Syntax

- Promise object is created using the promise constructor.

```js


const promise = new Promise(function(resolve,reject){
    //do something....

    if(sucess)
        resolve();
    else
        reject();
});


```

#### Note :-

- The promise constructor takes only one argument which is a callback function, that typically performs an asynchronous operation. This function is often referred to as an executor.

- The executor takes two callback functions as arguments : **resolve** and **reject**. 

- If the asynchronous operation completes successfully, the executor will call the ```resolve()``` function to change the state of the promise from pending to fulfilled with a value.

- In case of an error, the executor will call the ```reject()``` function to change the state of the promise from pending to rejected with the error reason.


### then() method

- To get the value of promise when its fulfilled, we call the then() method.

**Syntax for using then() method**

```js 

promise.then(onFulfilled,onRejected);

//OR
//the above can also be written like this :- 
.then(function(result){
        //handle success
    }, function(error){
        //handle error
    })

```

#### Note :- 

- The then() method takes two callbacks as arguments : onFulfilled & onRejected.

- then() method calls onFulfilled() with a value if the promise gets fulfilled, otherwise it calls the onRejected(), with an error message if promise gets rejected.

- both onFulfilled and onRejected arguments are optional.


**Example for promise resolved**

```js

const promise = new Promise(function(resolve,reject){
    resolve("Hurray! Promise resolved.");
});

promise.
then(function(sucess){
    console.log(sucess);
}, function(error){
    console.log(error);
});



```

**Example for promise rejected**

```js

const promise = new Promise(function(resolve,reject){
    reject("Oops! An error occured");
});

promise.
then(function(success){
    console.log(success);
}, function(error){
    console.log(error);
});


```

### catch() method

- catch() is invoked when a promise is either rejected or some error has occurred in execution. 

**Syntax of catch() method**

```js

promise.catch(onRejected);

```

#### Note :- 

- Internally, the ```catch()``` method invokes the ```then(undefined, onRejected)``` method.

**Example**

```js

const promise = new Promise(function(resolve,reject){
    reject("Oops! An error occured.");
});

promise.
then(function(success){
    console.log(success);
}).
catch(function(error){
    console.log(error);
});


```


### finally() method

- Sometimes we want to execute a piece of code when our promise gets fulfilled as well as when it gets rejected.So it means that, that piece of code will be common to both of then, so instead of writing that in each of them, we can simply wite that piece of code inside the finally() method.
So irrespective of whether the promise gets fulfilled or rejected, then finally() method will gets executed.


**Example : without using finally() method**

```js

const promise = new Promise(function(resolve,reject){
    const x = 2;
    const y = 4;

    if(x === y)
        resolve("Success!");
    else
        reject("Error!");
});

promise.
then(function(success){
    console.log(success);
    console.log("completed the execution!");//line A
}).
catch(function(error){
    console.log(error);
    console.log("completed the execution!");//line B
});


```

- in the above example line A & line B gets executed when the promise gets fulfilled as well as when it gets rejected, so we can write that line inside the finally() method instead of writing it in both then() & catch() method.


**Example: using finally() method**

```js

const promise = new Promise(function(resolve,reject){
    const x = 2;
    const y = 4;

    if(x === y)
        resolve("Success!");
    else
        reject("Error!");
});

promise.
then(function(success){
    console.log(success);
}).
catch(function(error){
    console.log(error);
}).
finally(function(){
    console.log("completed the execution!");
});

```


### Summary

- A promise is an object that encapsulates the result of an asynchronous operation.

- A promise starts in the pending state and ends in either fulfilled state or rejected state.

- Use then() method to schedule a callback to be executed when the promise is fulfilled, and catch() method to schedule a callback to be invoked when the promise is rejected.

- Place the code that you want to execute in the finally() method whether the promise is fulfilled or rejected.


## Promise chainning

- when we want to execute multiple asynchronous operations such that the next operation starts with the result from the previous step


```js

const promise = new Promise(function(resolve,reject){
    resolve(10);
});

promise.
then(function(result){
    console.log(result);
    return result*2;
}).
then(function(result){
    console.log(result);
    return result*3;
}).
then(function(result){
    console.log(result);
});

```

**Output of the above code**

```

10
20
60

```
