function fibonacci(num) {
    var n1 = 0;
    var n2 = 1;
    console.log(n1);
    console.log(n2);

    for (var i = 0; i < num - 2; i++) {
        var n3 = n1 + n2;
        console.log(n3);
        n1 = n2;
        n2 = n3;
    }
}
var num = prompt("enter a number");
fibonacci(num)