// Retrieved each individual textarea using ID's in the html and assigned them to variables
var currentDay = $("#currentDay");
var nineAm = $("#9am").attr("time");
var tenAm = $("#10am").attr("time");
var elevenAm = $("#11am").attr("time");
var twelvePm = $("#12pm").attr("time");
var onePm = $("#1pm").attr("time");
var twoPm = $("#2pm").attr("time");
var threePm = $("#3pm").attr("time");
var fourPm = $("#4pm").attr("time");
var fivePm = $("#5pm").attr("time");

// Created array's meant to display the day of the week and month on the page
var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// Declared the new Date object and its methods, assigned them into variables for ease of use
var d = new Date();
var getMonth = d.getMonth();
var getDay = d.getDay();
var getDate = d.getDate();
var getYear = d.getFullYear();
var getHours = d.getHours();

// Assigned text to the paragraph element with ID #currentDay using the above variables and arrays
currentDay.text(weekday[getDay] + ", " + months[getMonth] + " " + getDate + ", " + getYear);


// Compares 9AM timeblock to current hour
if (+nineAm < getHours) {
     $("#textarea1").addClass("past");
}
else if (+nineAm == getHours) {
     $("#textarea1").addClass("present");
}
else if (+nineAm > getHours) {
     $("#textarea1").addClass("future");
}

// Compares 10AM timeblock to current hour
if (+tenAm < getHours) {
     $("#textarea2").addClass("past");
}
else if (+tenAm == getHours) {
     $("#textarea2").addClass("present");
}
else if (+tenAm > getHours) {
     $("#textarea2").addClass("future");
}

// Compares 11AM timeblock to current hour
if (+elevenAm < getHours) {
     $("#textarea3").addClass("past");
}
else if (+elevenAm == getHours) {
     $("#textarea3").addClass("present");
}
else if (+elevenAm > getHours) {
     $("#textarea3").addClass("future");
}

// Compares 12PM timeblock to current hour
if (+twelvePm < getHours) {
     $("#textarea4").addClass("past");
}
else if (+twelvePm == getHours) {
     $("#textarea4").addClass("present");
}
else if (+twelvePm > getHours) {
     $("#textarea4").addClass("future");
}

// Compares 1PM timeblock to current hour
if (+onePm < getHours) {
     $("#textarea5").addClass("past");
}
else if (+onePm == getHours) {
     $("#textarea5").addClass("present");
}
else if (+onePm > getHours) {
     $("#textarea5").addClass("future");
}

// Compares 2PM timeblock to current hour
if (+twoPm < getHours) {
     $("#textarea6").addClass("past");
}
else if (+twoPm == getHours) {
     $("#textarea6").addClass("present");
}
else if (+twoPm > getHours) {
     $("#textarea6").addClass("future");
}

// Compares 3PM timeblock to current hour
if (+threePm < getHours) {
     $("#textarea7").addClass("past");
}
else if (+threePm == getHours) {
     $("#textarea7").addClass("present");
}
else if (+threePm > getHours) {
     $("#textarea7").addClass("future");
}

// Compares 4PM timeblock to current hour
if (+fourPm < getHours) {
     $("#textarea8").addClass("past");
}
else if (+fourPm == getHours) {
     $("#textarea8").addClass("present");
}
else if (+fourPm > getHours) {
     $("#textarea8").addClass("future");
}

// Compares 5PM timeblock to current hour
if (+fivePm < getHours) {
     $("#textarea9").addClass("past");
}
else if (+fivePm == getHours) {
     $("#textarea9").addClass("present");
}
else if (+fivePm > getHours) {
     $("#textarea9").addClass("future");
}

// Assigned "on click" event listeners onto each individual button on the HTML document
// Button's will take the values input into the text areas and store them to Local Storage
$("#button1").on("click", function () {
     localStorage.setItem("textvalue1", $("#textarea1").val());
});
$("#button2").on("click", function () {
     localStorage.setItem("textvalue2", $("#textarea2").val());
});
$("#button3").on("click", function () {
     localStorage.setItem("textvalue3", $("#textarea3").val());
});
$("#button4").on("click", function () {
     localStorage.setItem("textvalue4", $("#textarea4").val());
});
$("#button5").on("click", function () {
     localStorage.setItem("textvalue5", $("#textarea5").val());
});
$("#button6").on("click", function () {
     localStorage.setItem("textvalue6", $("#textarea6").val());
});
$("#button7").on("click", function () {
     localStorage.setItem("textvalue7", $("#textarea7").val());
});
$("#button8").on("click", function () {
     localStorage.setItem("textvalue8", $("#textarea8").val());
});
$("#button9").on("click", function () {
     localStorage.setItem("textvalue9", $("#textarea9").val());
});

// Each individual text area will retrieve text from values input into local storage, if any
$("#textarea1").text(localStorage.getItem("textvalue1"));
$("#textarea2").text(localStorage.getItem("textvalue2"));
$("#textarea3").text(localStorage.getItem("textvalue3"));
$("#textarea4").text(localStorage.getItem("textvalue4"));
$("#textarea5").text(localStorage.getItem("textvalue5"));
$("#textarea6").text(localStorage.getItem("textvalue6"));
$("#textarea7").text(localStorage.getItem("textvalue7"));
$("#textarea8").text(localStorage.getItem("textvalue8"));
$("#textarea9").text(localStorage.getItem("textvalue9"));