function test() {
    var a = "3";
    var b = "8";

    var c = a;
    a = b;
    b = c;

    console.log("a is : " + a);
    console.log("b is : " + b);
}