var container = $(".container");
var div = $("<div>");
var textarea = $("textarea");
var button = $("<button>");
var currentDay = $("#currentDay");
var hour = $(".hour");

var nineAm = $("#9am").attr("time");
var tenAm = $("#10am").attr("time");
var elevenAm = $("#11am").attr("time");
var twelvePm = $("#12pm").attr("time");
var onePm = $("#1pm").attr("time");
var twoPm = $("#2pm").attr("time");
var threePm = $("#3pm").attr("time");
var fourPm = $("#4pm").attr("time");
var fivePm = $("#5pm").attr("time");

var weekday = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var d = new Date();
var getMonth = d.getMonth();
var getDay = d.getDay();
var getDate = d.getDate();
var getYear = d.getFullYear();
var getHours = d.getHours();

currentDay.text(weekday[getDay] + ", " + months[getMonth] + " " + getDate + ", " + getYear);


// Compares 9AM timeblock to current hour
if (+nineAm < getHours) {
    $("#textarea0").addClass("past");
}
else if (+nineAm == getHours) {
     $("#textarea0").addClass("present");
}
else if (+nineAm > getHours) {
     $("#textarea0").addClass("future");
}

// Compares 10AM timeblock to current hour
if (+tenAm < getHours) {
    $("#textarea1").addClass("past");
}
else if (+tenAm == getHours) {
     $("#textarea1").addClass("present");
}
else if (+tenAm > getHours) {
     $("#textarea1").addClass("future");
}

// Compares 11AM timeblock to current hour
if (+elevenAm< getHours) {
    $("#textarea2").addClass("past");
}
else if (+elevenAm == getHours) {
     $("#textarea2").addClass("present");
}
else if (+elevenAm > getHours) {
     $("#textarea2").addClass("future");
}

// Compares 12PM timeblock to current hour
if (+twelvePm < getHours) {
    $("#textarea3").addClass("past");
}
else if (+twelvePm == getHours) {
     $("#textarea3").addClass("present");
}
else if (+twelvePm > getHours) {
     $("#textarea3").addClass("future");
}

// Compares 1PM timeblock to current hour
if (+onePm < getHours) {
    $("#textarea4").addClass("past");
}
else if (+onePm == getHours) {
     $("#textarea4").addClass("present");
}
else if (+onePm > getHours) {
     $("#textarea4").addClass("future");
}

// Compares 2PM timeblock to current hour
if (+twoPm < getHours) {
    $("#textarea5").addClass("past");
}
else if (+twoPm == getHours) {
     $("#textarea5").addClass("present");
}
else if (+twoPm > getHours) {
     $("#textarea5").addClass("future");
}

// Compares 3PM timeblock to current hour
if (+threePm < getHours) {
    $("#textarea6").addClass("past");
}
else if (+threePm == getHours) {
     $("#textarea6").addClass("present");
}
else if (+threePm > getHours) {
     $("#textarea6").addClass("future");
}

// Compares 4PM timeblock to current hour
if (+fourPm < getHours) {
    $("#textarea7").addClass("past");
}
else if (+fourPm == getHours) {
     $("#textarea7").addClass("present");
}
else if (+fourPm > getHours) {
     $("#textarea7").addClass("future");
}

// Compares 5PM timeblock to current hour
if (+fivePm < getHours) {
    $("#textarea8").addClass("past");
}
else if (+fivePm == getHours) {
     $("#textarea8").addClass("present");
}
else if (+fivePm > getHours) {
     $("#textarea8").addClass("future");
}

console.log(getHours);
console.log(+nineAm);