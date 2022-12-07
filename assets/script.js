$(jQuery).ready(function () {

  // Displays the current day on the top of the calendar on the webpage
  var today = dayjs().format('dddd MMM D, YYYY')
  $('#currentDay').text("Today is " + today)

  
}