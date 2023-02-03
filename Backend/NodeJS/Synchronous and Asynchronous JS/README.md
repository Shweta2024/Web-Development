<details>  <summary><h2> Synchronous JS </h2></summary>
 
In which the entire program executes line by line .i.e. one task will have to wait for its previous task to complete its execution. So,if we are 
having an I/O task then its next task will have to wait untill the current I/O tasks completes.


![image](https://user-images.githubusercontent.com/75883328/216625662-3f7e023d-2fe2-4d04-8f79-53a7c14cdb93.png)


## What happens behind the scene?

- First of all the main() function will be pushed into the call stack. 
![image](https://user-images.githubusercontent.com/75883328/216639276-80141864-c621-494a-9de9-8591dc0ee978.png)

- since control is on line 1 and log() is a function so it gets pushed into the stack. Once it completes its execution i.e. 
displaying "start" in the console it gets poped out from the call stack.

![image](https://user-images.githubusercontent.com/75883328/216639867-72308c1d-265c-4dc6-9812-9cacd471cbeb.png)


- contorl on line 2: log() is a function so it gets pushed into the stack, displays "second line" in the terminal and gets
popped out from the call stack.

![image](https://user-images.githubusercontent.com/75883328/216640146-ce631789-ec66-4f28-997e-58b426b1dfcb.png)

- control on line 3: log() is a function so it gets pushed into the stack, displays "third line" in the terminal and gets
popped out from the call stack.

![image](https://user-images.githubusercontent.com/75883328/216640272-ccec02e0-72e7-4d2d-af70-fda0a66200bd.png)

- control on line 4: log() is a function so it gets pushed into the stack, displays "stop" in the terminal and gets
popped out from the call stack.

![image](https://user-images.githubusercontent.com/75883328/216640494-97e94475-f431-415e-80c5-688bc682c073.png)

- since the control has reached on line 5: it means the program has completed its exectuition .i.e. main() is completed
so we'll pop it out from the call stack.

![image](https://user-images.githubusercontent.com/75883328/216640694-a42cb4ad-8ec2-43ca-a886-f34c791501c2.png)

  </details>

<details>  <summary><h2> Asynchronous JS </h2></summary>

In which the current task doen't waits for the previous tasks that appears first is the ordering to get complete. If we are having an I/O task then we can still
perform some other tasks without waiting for the I/O task to complete its execution first.

![image](https://user-images.githubusercontent.com/75883328/216644599-23bdcd97-3063-419e-9803-6b8a4907c4f1.png)

## What happens behind the scene?

- as the execution starts, only main() will be in the call stack.

![image](https://user-images.githubusercontent.com/75883328/216645233-9ebbba79-f018-4faf-b985-bcacbab85929.png)

- control to line 1: since log() is a function so we'll push it into the call stack and then we'll display "start" in the terminal and since log()
has completed its task, so'll pop it out of the call stack.

![image](https://user-images.githubusercontent.com/75883328/216646022-9efd497b-50c0-4aa8-980c-c49e1f8ceb70.png)

- control to line 2: since setTimeout() is a function so we'll push it into the callstack, but it doesn't has any implementation in JS, it is something that is
implemented by node.Hence it is sent to the Node APIs to get it registered.

![image](https://user-images.githubusercontent.com/75883328/216647703-650ddab2-1b42-45d8-a8c7-25a3c942c6d8.png)

- control to line 3: since setTimeout() is a function so  we'll push it into the callstack, but it doesn't has any implementation in JS, it is something that is
implemented by node.Hence it is sent to the Node APIs to get it registered.

![image](https://user-images.githubusercontent.com/75883328/216648119-99e220a3-f004-4d7f-bbeb-b9c9e7c113db.png)

- control to line 4: since log() is a function so we'll push it into the call stack and will display "stop" in the terminal, since the task of log() is completed
so we'll pop it out from the call stack.
Also, by that time 0 seconds have passed, so the setTimeout(log("third line"),0) gets push in the call back queue.

![image](https://user-images.githubusercontent.com/75883328/216648553-64674fea-f4d3-4fb4-a385-e349a3446bfb.png)

- control to line 5: since we have executed the complete program, it implies that the task of main() is done. So, pop it out from the call stack.
Now, send setTimeout(log("second line"),3000) to the call back queue. 
Also, since the call stack is empty so now the Event Loop will take out the call backs from the callback queue and will send then to the call stack & execute them 
one by one.

![image](https://user-images.githubusercontent.com/75883328/216649819-c79f221a-e950-483d-a4f1-cb4e3e41e004.png)

![image](https://user-images.githubusercontent.com/75883328/216650134-d8438828-32ad-456c-ba6e-639e5836b395.png)

