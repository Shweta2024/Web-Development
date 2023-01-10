## <summary> Callbacks </summary>

- callbacks can be defined as a function passed as an argument to another function to be executed latter.

There are two types of callback :- 

- Synchronous

- Asynchronous

## Synchronous callback

- The callbacks which gets executed during the execution of the high-order function to which they are passed as an argument, are called synchronous callbacks.

**Example** :- in the below example the function isOdd(), is a synchronous callback, as it gets executed during the execution of the oddOrNot() function.


```js

function isOdd(num){
    if(num%2 != 0)
        return true;
    return false;
}

function oddOrNot(num){
    return isOdd(num);
}

console.log(oddOrNot(4));
console.log(oddOrNot(5));

```

## Asynchronous callback

- The callbacks that gets executed after the high-order functions(to which it has been passed as an argument) completes its execution,are called asynchronous callbacks.

**Example**

In this example, the process() is a callback passed into an asynchronous function.
When we use a callback to continue code execution after an asynchronous operation, the callback is called an asynchronous callback.


```js


function download(url,callback){
    setTimeout(function(){
        console.log("downloading : "+url);
        callback(url);
    },1000);
}

function process(url){
    console.log("processing : "+url);
}

download("https://www.abcd/img.png",process);

```

## <summary> Nesting callbacks and the Pyramid of Doom/Callback Hell </summary>

- nesting callbacks is called pyramid of doom or callback hell.

- Callback hell is a big issue caused by coding with complex nested callbacks. Here, each and every callback takes an argument that is a result of the previous callbacks. In this manner, the code structure looks like a pyramid, making it difficult to read and maintain. Also, if there is an error in one function, then all other functions get affected.