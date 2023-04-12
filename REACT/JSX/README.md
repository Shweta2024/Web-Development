HTML:-

```html

<!DOCTYPE html>
<html lang="en">
  <head>
    <title>React App</title>
    <link rel="stylesheet" href="styles.css" />
  </head>

  <body>
    <div id="root"></div>
    <script src="../src/index.js" type="text/javascript"></script>
  </body>
</html>



```



JSX

```js

import React from "react";
import ReactDOM from "react-dom";

const name = 'shweta'
//what to show, where to show
ReactDOM.render(<h1>hello {name}</h1>, document.getElementById("root"));


```

![image](https://user-images.githubusercontent.com/75883328/231413720-f0ec2de6-237e-419d-8f68-659ba08d0fb1.png)
