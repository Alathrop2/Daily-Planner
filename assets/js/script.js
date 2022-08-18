var today = moment();
var currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
var currentHour = moment().format('ha');
var textBox = document.querySelectorAll('.bg-secondary');
var savedInfo = localStorage.getItem('Saved Task');
var saveButton = document.querySelectorAll('.saveBtn');
var time = document.querySelectorAll('.time');
// code for adding the current day to the top of the screen
var currentDay = $('#currentDay').text(today.format('MMM Do, YYYY'));

// event listener array to set local storage
for (let i = 0; i < saveButton.length; i++) {
  // setting local storage
  saveButton[i].addEventListener('click', function () {
    localStorage.setItem('saved Task' + i, textBox[i].value);
  });
}

// for loop to persist storage on screen load
$(window).ready(function () {
  for (let i = 0; i < saveButton.length; i++) {
    // get local storage

    var getLocal = localStorage.getItem('saved Task' + i);
    var timeNum = time[i].innerHTML;
    $(textBox[i]).text(getLocal);

    console.log(currentHour);
    console.log(timeNum);
    // ! color code based on past, present, future
    if (timeNum < currentHour) {
      textBox[i].classList.add('bg-danger');
    } else if (timeNum === currentHour) {
      textBox[i].classList.add('bg-warning');
    }
    if (timeNum > currentHour) {
      textBox[i].classList.add('bg-success');
    }
  }
});

// GIVEN I am using a daily planner to create a schedule
//  WHEN I open the planner
// * the current day is displayed at the top of the calendar
// WHEN I scroll down
// * I am presented with time blocks for standard business hours
//  WHEN I view the time blocks for that days
// TODO each time block is color-coded to indicate whether it is in the past, present, or future
// WHEN I click into a time block
// * I can enter an event
// WHEN I click the save button for that time block
// * the text for that event is saved in local storage
// WHEN I refresh the page
// * the saved events persist
