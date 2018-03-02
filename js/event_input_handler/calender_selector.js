 $('#departure_date').pickadate({
selectMonths: true,//Creates a dropdown to control month
selectYears: 15,//Creates a dropdown of 15 years to control year
//The title label to use for the month nav buttons
labelMonthNext: 'Next Month',
labelMonthPrev: 'Last Month',
//The title label to use for the dropdown selectors
labelMonthSelect: 'Select Month',
labelYearSelect: 'Select Year',
//Months and weekdays
monthsFull: [ 'January', 'February', 'March', 'April', 'March', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ],
monthsShort: [ 'Jan', 'Feb', 'Mar', 'Apr', 'Mar', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ],
weekdaysFull: [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ],
weekdaysShort: [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ],
//Materialize modified
weekdaysLetter: [ 'S', 'M', 'T', 'W', 'T', 'F', 'S' ],
//Today and clear
today: 'Today',
clear: 'Clear',
close: 'Close',
closeOnSelect: true ,
//The format to show on the `input` element
format: 'dd mmm yyyy',
min: 'Today'
});

var startdate = $('#departure_date').pickadate('picker');

 $('#arrival_date').pickadate({
     min:'Today',
selectMonths: true,//Creates a dropdown to control month
selectYears: 15,//Creates a dropdown of 15 years to control year
//The title label to use for the month nav buttons
labelMonthNext: 'Next Month',
labelMonthPrev: 'Last Month',
//The title label to use for the dropdown selectors
labelMonthSelect: 'Select Month',
labelYearSelect: 'Select Year',
//Months and weekdays
monthsFull: [ 'January', 'February', 'March', 'April', 'March', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ],
monthsShort: [ 'Jan', 'Feb', 'Mar', 'Apr', 'Mar', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ],
weekdaysFull: [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ],
weekdaysShort: [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ],
//Materialize modified
weekdaysLetter: [ 'S', 'M', 'T', 'W', 'T', 'F', 'S' ],
//Today and clear
today: 'Today',
clear: 'Clear',
close: 'Close',
closeOnSelect: true ,
//The format to show on the `input` element
format: 'dd mmm yyyy',
onSet: function(event){
    $('#arrival_date').focus();
}
});
var enddate = $('#arrival_date').pickadate('picker');


$('#departure_date').change(function() {
  selected_ci_date ="";
  selected_ci_date = $('#departure_date').val();
  if (selected_ci_date != null)   {
    var cidate = new Date(selected_ci_date);
    $("#departure_date").removeAttr("disabled");
    min_codate = "";
    min_codate = new Date();
    min_codate.setDate(cidate.getDate()+1);
    enddate.set('min', min_codate);
  }

})


$("#departure_date").val(moment(new Date()).format("DD MMM YYYY"));
$("#arrival_date").val(moment(new Date()).add(4,'days').format("DD MMM YYYY"));


