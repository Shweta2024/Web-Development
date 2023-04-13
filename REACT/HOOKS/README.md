RULES :- 

- We MUST use a hook inside a Functional Component.
- We can't use HOOKS in class component.

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

 
 
 
 ### EXAMPLE : [link](https://codesandbox.io/s/usestate-hook-forked-fixm2t?file=/src/components/App.jsx)
 
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
 
 increment/decrement using class component :- [link](https://codesandbox.io/s/react-forms-completed-forked-sgbo5b?file=/src/index.js)
 
Timer :- [link](https://codesandbox.io/s/usestate-hook-practice-forked-ipy4gf?file=/src/components/App.jsx)

Button color changer :- [link](https://codesandbox.io/s/event-handling-in-react-forked-gx2wgy?file=/src/components/App.jsx)

Changing heading :- [link](https://codesandbox.io/s/react-forms-forked-n5ej8u?file=/src/components/App.jsx)

changing contact using complex state :- [link](https://codesandbox.io/s/changing-complex-state-practice-forked-hqqof4?file=/src/components/App.jsx)
