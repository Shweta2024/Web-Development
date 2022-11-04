function Student(name, age, roll, languages) {
    this.name = name;
    this.age = age;
    this.roll = roll;
    this.languages = languages;
    this.introduce = function () {
        alert("Hello ! I am " + name);
    }
}

var shweta = new Student("shweta", 20, 90, ["C", "C++", "JavaScript", "Python"]);
var sahil = new Student("sahil", 18, 2, ["C++", "python"]);

//we can write
//shweta.introduce()
//to call the introduce method

