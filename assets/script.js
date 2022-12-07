$(jQuery).ready(function () {

  // Displays the current day on the top of the calendar on the webpage
  var today = dayjs().format('dddd MMM D, YYYY')
  $('#currentDay').text("Today is " + today)

  // Listener for click event on save button
  $(".saveBtn").click(function () {
    var parent = $(this).parents().eq(0)
    var clickedHour = parent.attr('id')

    clickedHour = clickedHour.slice(5)
    var slicedHour = clickedHour.slice(0, -2)

    var textDescription = parent.find(".description").val();

    function saveText() {
      var saveText = localStorage.setItem("textDescription", textDescription)
      saveText()
    }

    // to retrieve current time to determine location of past, present, or future

    var currentH = dayjs().hour();
    $('#hour').text(currentH);

    $(".time-block").each(function () {
      
      var blockHour = parseInt($(this).attr('id').split('-')[1]);

      if (currentH === blockHour) {
        $(this).addClass("present");
      } else if (currentH < blockHour) {
        $(this).addClass("future");
      } else {
        $(this).addClass("past");
      }
    })
  })
})