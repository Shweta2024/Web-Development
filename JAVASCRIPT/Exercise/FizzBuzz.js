function printNum() {
    var current = 1;
    while (current <= 100) {
        if (current % 3 === 0 && current % 5 === 0)
            console.log("FizzBuzz");
        else if (current % 5 === 0)
            console.log("Buzz");
        else if (current % 3 === 0)
            console.log("Fizz");
        else
            console.log(current);

        current++;
    }
}
printNum();