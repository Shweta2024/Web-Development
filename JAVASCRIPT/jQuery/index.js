//manipulating css
$("h1").addClass("heading");


//manipulating html
$("h2").html("connect with me");


//manipulating attribute
$("a").attr("https://www.linkedin.com/in/shweta-bhagat-5a3969200/");


//adding eventListener
$("button").click(function () {
    alert("I got clicked!");
});

$("h1").mouseover(function () {
    $("h1").addClass("change-color");
    setTimeout(function () {
        $("h1").removeClass("change-color");
    }, 500)
});

$(document).keydown(function (event) {
    var currentKey = event.key;
    $("h3").html(currentKey);
});


//adding elements
//  1) before()
$(".name").before("<h1>Welcome<h1>");

//  2) after()
$(".name").after("<h1 class='heading'>Bhagat</h1>");

//  3) prepend()
$("h3").prepend("<label>what's your name?</label><input type='text' ></input>");

//  4) append()
$("h3").append("<button>click me</button>");



//adding animation
$("h1").click(function () {
    $("h1").animate({ opacity: 0.5 });
});

//chaining animations together
$("h2").mouseover(function () {
    $("h2").slideUp().slideDown();
});

