// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var saveBtn = $("saveBtn");
var hr9 = $("9");
var hr10 = $("10");
var hr11 = $("11");
var hr12 = $("12");
var hr13 = $("13");
var hr14 = $("14");
var hr15 = $("15");
var hr16 = $("16");
var hr17 = $("17")

$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `".time-block"` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //

  /*saveBtn.on("click",function(){
    when button is clicked
    localStorage.setItem (the text from text area by id) 
  }) */
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //

  function newHour (){
  var currentTime = dayjs().hour();

  $('.time-block').each(function(){
    var idHour = parseInt($(this).attr("id"));
    if (idHour < currentTime){
        $(this).addClass("past");
    } else if (idHour === currentTime){
        $(this).addClass("present");
        $(this).removeClass("past");
    } else {$(this).addClass("future");
    $(this).removeClass("past");
    $(this).removeClass("present");
    }
  })
}
newHour();
setInterval(newHour, 1000);

 /* using if statement, need to add past, present or future class from css to each time block

  needs to compare the id to current time 

  need to get current hour in 24 time 
  
  dayjs().hour(); // gets current hour */

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do ".time-block"?
  //

  /*localStorage.getItem(based on time id)
  .text("insert pulled from storage here, possible a key from object") */
  // TODO: Add code to display the current date in the header of the page.
  var today = dayjs();
  $("#currentDay").text(today.format("dddd MMMM DD"))
});
