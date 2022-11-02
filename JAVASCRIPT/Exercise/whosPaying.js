function whosPaying(names) {
    var numberOfPeople = names.length;
    var randomPersonPosition = Math.floor(Math.random() * numberOfPeople);

    return names[randomPersonPosition] + " is going to buy lunch today!";
}