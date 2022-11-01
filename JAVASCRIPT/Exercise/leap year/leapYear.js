/*
Intuition :- 
1) If year is divisible by 4,then
        i) if its not divisible by 100->its a leap year.
        ii) if its divisible by 100 but not by 400 -> not a leap year.
        iii) if its divisible by 100 and by 400->its a leap year.
2) If its not divisible by 4->its not a leap year.*/

function isLeap(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0)
                return "Leap year";
            else
                return "Not leap year.";
        }
        else
            return "Leap year.";
    }
    else
        return "Not leap year.";
}