RULES :- 

- We MUST use a hook inside a Functional Component.

```js

const state = useState(arg1,arg2)

//arg1 -> starting state(or the starting value)
//arg2 -> function used to set/change the value of the state


```

 NOTE : Whenever we change the value of state that value gets re-rendered. 
 Dynamically updates the changes value
 
 
 #### EXAMPLE
 
 ```js
 
 import React, { useState } from "react";

function App() {
  //initial state,function to change state
  const [count, setCount] = useState(0);
  // console.log(count);

  function increment() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default App;

 
 
 ```
 
 ![image](https://user-images.githubusercontent.com/75883328/231675446-3d5344a3-e5b7-4f7d-ae88-f38fbb4a448c.png)
 
 
 
 ### EXAMPLE
 
 ```js
 
 import React, { useState } from "react";

function App() {
  //initial state,function to change state
  const [count, setCount] = useState(0);
  // console.log(count);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default App;

 
 ```
 
 ![image](https://user-images.githubusercontent.com/75883328/231675948-50fe45d4-28fd-4ede-919b-87a47835bc0e.png)

