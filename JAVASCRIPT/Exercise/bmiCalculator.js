function bmiCalculator(weight, height) {
    var bmi = weight / Math.pow(height, 2);
    var interpretation = "";

    if (bmi < 18.5)
        interpretation = "Your BMI is " + bmi + ", so you are underweight.";
    else if (bmi < 24.9)
        interpretation = "Your BMI is " + bmi + ", so you have a normal weight.";
    else
        interpretation = "Your BMI is " + bmi + ", so you are overweight.";


    return interpretation;
}

var weight = prompt("What's your weight ? ");
var height = prompt("What's your weight ? ");
console.log(bmiCalculator(weight, height));