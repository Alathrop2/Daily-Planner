var today = moment();
var currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
var textBox = document.getElementById('textBox');
var savedInfo = localStorage.getItem('Saved Task');
var saveButton = document.getElementById('saveButton');
// code for adding the current day to the top of the screen
var currentDay = $('#currentDay').text(today.format('MMM Do, YYYY'));

// setting local storage
saveButton.addEventListener('click', function () {
  localStorage.setItem('saved Task', textBox.value);
  console.log(textBox.value);
});
// GIVEN I am using a daily planner to create a schedule
//  WHEN I open the planner
// * the current day is displayed at the top of the calendar
// WHEN I scroll down
// * I am presented with time blocks for standard business hours
// WHEN I view the time blocks for that days
// TODO each time block is color-coded to indicate whether it is in the past, present, or future
// WHEN I click into a time block
// * I can enter an event
// WHEN I click the save button for that time block
// TODO the text for that event is saved in local storage
// WHEN I refresh the page
// TODO the saved events persist
