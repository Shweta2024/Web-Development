<details> <summary> <h2> what is NodeJS? </h2> </summary>

> NodeJS is an open-source and cross-platform runtime environment for JavaScript codes.

**open-source**: its source code is available publicly and we can contribute to it.

**cross-platform**: it is independent of the platform i.e. Operating System. It can work on windows, linux etc.

**runtime environment**: after writing a JS code, it won't perform any task untill & unless we have executed it. And to execute
a code we need runtime environment. So, NodeJS provides an environment to run our JS codes.

> Node.js is built on Chrome’s V8 JavaScript engine

> Node.js uses an event-driven, asynchronous non-blocking I/O model

**synchornous**: the execution takes place in a sequecnce i.e. one line gets executed only when the previous line has 
completed its execution.

**asynchornous**: in which the execution doesn't occurs in the sequence in which the appear. The current line doesn't waits
for the previous line to complete its execution. It is very much useful in real-life senarios where at the same time we are
performing many tasks without waiting for the previous task to gets completed.  

**blocking**: when a particular task waits for its previous task to complete its execution as it can't start its execution
untill the previous one has completed, so this is called a blocking state and is more frequent in synchronous JS where execution
occurs line by line.

eg- readFileSync()


**non-blocking**: a particular task starts its execution irrespective of the fact that its previous task has completed
its execution or not. This occurs in case of asynchronous JS in which it continues other tasks while waiting for I/O process to complete.

eg- readFile()

**event-driven**

Events: events can be defined as any action performend by the user or the system like a click event or downloading a file.

Event-driven: Event driven means the flow of the execution is determined by the **event**. Whenever an event occurs we perform certain
tasks as a response to that event, we can achieve it using callback functions.

Example:  we are having an h1 tag of black color and we want to change its color to blue when it gets click. So, we can add 
```click``` as the event and in the response to that click event we can write a ```callback``` function that selects that h1 tag and
sets its innerHTML to blue.


> Node.js operates on a single thread event loop


<details> <summary> <h2> Browser Vs Node.js Runtime Environments </h2> </summary>

- In browser runtime environment we can make use of DOM to access and manipulate the document.
However, in NodeJS runtime environment we can't make use of DOM.

- Browser runtime environment doesn't allows us to interact with the operating system and the file systems.Whereas,
NodeJS allows us to interact with the file system and read or write files.

- While using NodeJS runtime environment we have the ease to use any of its versions on the server-side. Whereas, in case
of Browsers we don't know which version of browser our client will be using to access our application.


<details> <summary> <h2> Window Vs Global  </h2> </summary>

JavaScript has a built-in global object.
In Browser runtime environment it is called "**Window**".
In NodeJS runtime environment it is called "**global**"

The window object contains the methods & properties that are present in the browser environment.


<details> <summary> <h2> Why to use NodeJS?</h2> </summary>

1) **NodeJS allows us to write JavaScript code both on client side and server side** i.e. we can use JavaScript
in both front-end & backend.

2) **NPM Library**: The npm library contains millions of packages that makes our life easier, because we don't need to
spend hours to write a code performing a particular task from strach, we can just find a suitable npm library & use
it instead.

3) **Huge Community**, since it has a huge community so we can always get help when we are stuck and there are
lots of tutorials available to get started with NodeJS or to know any concepts of NodeJS.

4) **Market Demand**:  Big tech companies and startups both are building their applications in NodeJS. So, knowing
NodeJS can give an edge over rest candidates.




