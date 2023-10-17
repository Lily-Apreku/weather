// Challenge 1
// Create an array weekDays with all days of the week, console log the array
var weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
console.log(weekDays);

// Challenge 2
// Log ‘Monday’ and ‘Sunday’
console.log(weekDays[1]); // 'Monday'
console.log(weekDays[0]); // 'Sunday'

// Challenge 3
// Change ‘Sunday’ by ‘Funday’
weekDays[0] = "Funday";
console.log(weekDays);

// Challenge 4
// Remove Monday and Tuesday
weekDays.splice(1, 2);
console.log(weekDays);

// Challenge 5
// Log every day of the week this way: Temperature on Monday is 18 degrees'
weekDays.forEach(function (day) {
  console.log("Temperature on " + day + " is 18 degrees");
});
