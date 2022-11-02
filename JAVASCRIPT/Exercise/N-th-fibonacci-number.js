function fibonacci(num) {
    var n1 = 0;
    var n2 = 1;
    var n3 = 0;
    for (var i = 0; i < num - 2; i++) {
        n3 = n1 + n2;
        n1 = n2;
        n2 = n3;
    }
    return n3;
}
var num = prompt("enter a number");
alert("The " + num + "-th fibonacci number is : " + fibonacci(num));
