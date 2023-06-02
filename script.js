// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {

  //when a save button is clicked, takes the info user put into the scheduler and saves to local storage
 $(".saveBtn").on("click",function(){

  //keyword "this" refers back to saveBtn, so ".description" are siblings to it
    var eventInfo = $(this).siblings(".description").val();
    var timeId = $(this).parent().attr("id");

    //uses the timeId as a key to store eventInfo
    localStorage.setItem(timeId, eventInfo); 
  }); 

  function newHour (){
  //gets us the current hour of the day, in 24 hour format  
  var currentTime = dayjs().hour();

  //runs over all time blocks and checks what state they should be in based on time of day
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

//actually runs the function to check time of day and state of time blocks
newHour();
setInterval(newHour, 1000);

  //gave the time blocks 24 hour id codes so we can easily check hours after noon. sets all time block descriptions with whatever is in local storage, leaves blank if nothing is there
  $("#9 .description").val(localStorage.getItem("9"));
  $("#10 .description").val(localStorage.getItem("10"));
  $("#11 .description").val(localStorage.getItem("11"));
  $("#12 .description").val(localStorage.getItem("12"));
  $("#13 .description").val(localStorage.getItem("13"));
  $("#14 .description").val(localStorage.getItem("14"));
  $("#15 .description").val(localStorage.getItem("15"));
  $("#16 .description").val(localStorage.getItem("16"));
  $("#17 .description").val(localStorage.getItem("17"));

  //sets the day at bottom of header area
  var today = dayjs();
  $("#currentDay").text(today.format("dddd MMMM DD"))
});
