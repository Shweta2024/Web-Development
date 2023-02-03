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
