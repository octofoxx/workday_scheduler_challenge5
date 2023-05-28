// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `".time-block"` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //

 $(".saveBtn").on("click",function(){
    var eventInfo = $(this).siblings(".description").val();
    var timeId = $(this).parent().attr("id");
    localStorage.setItem(timeId, eventInfo); 
  }); 

  function newHour (){
  var currentTime = dayjs().hour();

  $(".time-block").each(function(){
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

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do ".time-block"?
  //

  /*localStorage.getItem(based on time id)
  .text("insert pulled from storage here, possible a key from object") */

  $("#9 .description").val(localStorage.getItem("9"));
  $("#10 .description").val(localStorage.getItem("10"));
  $("#11 .description").val(localStorage.getItem("11"));
  $("#12 .description").val(localStorage.getItem("12"));
  $("#13 .description").val(localStorage.getItem("13"));
  $("#14 .description").val(localStorage.getItem("14"));
  $("#15 .description").val(localStorage.getItem("15"));
  $("#16 .description").val(localStorage.getItem("16"));
  $("#17 .description").val(localStorage.getItem("17"));

  var today = dayjs();
  $("#currentDay").text(today.format("dddd MMMM DD"))
});
