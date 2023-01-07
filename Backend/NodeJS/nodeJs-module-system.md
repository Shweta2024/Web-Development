There are two types of module :- 
1) Global : that we don't need to require before using.(example nodemon)
2) Local : Those models which we need to require/load before using them.

There are further three types of models that we need to require :- 

1) Importing Node.js Core modules

// we don't need to install the core modules

like :- fs

fs is the module for file system.It allows us to interact with the files of our system.
We can load the fs module by the below command :- 

```js

const fs = require('fs'); 

```

More about file system :- 

- fs.writeFileSync(fileName,dataToBeWritten); 

```js

fs.writeFileSync('text.txt','I am shweta.');

```

It takes two parameters :- 
a) the name of the file
b) data to be written

if the file doesn't exists then it will create a file with the name text.txt and will write 'I am shweta' to it.
if the file already exists then it will overwrite its content.


- fs.appendFileSync(fileName,dataToBeAppended)

```js

fs.appendFileSync('text.txt','I am a backend developer.');

```

It takes two parameter :- 
a) file to which we want to append data
b) data to be appended

It simply adds the data to the end of the file 'text.txt'.


2) Importing our own js file as node module

```js

module.exports = function add(num1,num2){
    return num1+num2;
}

```

we can import our one js file into another js by assigning ```module.exports``` the values/functions that we want to export to another files.


3) Importing npm modules


npm modules can be find here :- [**LINK**](https://www.npmjs.com/)

a) Initialize npm   ```npm init```
b) Install the required package     ```npm i packageName```

after completing the above steps we can simply require the module by the below code :- 


```js

const express = require('express');

```

# Taking Command line input

```js

console.log(process.argv);

```

argv -> it is the argument vector, which is an array of elements written in the command line


if we write the below in the command line :- 

```cmd

node app.js shweta

```

then the output will contain three elements :-
a) the path where node is installed
b) path of the current directory
c) shweta

so if I only want to display ```shweta```, then I have to write   ```console.log(process.argv[2])```.

note :- we can use the yargs module to parse the command line arguments



# Debugging node.js code
- using console.log()
- using debugger : it shows all the steps followed/control flow