JSX(JS file) :- 

```js

import React from 'react'
import ReactDOM from 'react-dom'

//what to show, where to show
ReactDOM.render(<h1>hello</h1>,document.getElementById('root'))

```


HTML file :- 

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

OUTPUT

![image](https://user-images.githubusercontent.com/75883328/231413152-e56dd2fb-133a-46de-91f5-fb9b0b16af94.png)
