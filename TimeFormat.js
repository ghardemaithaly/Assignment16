
/*1). The time has a format: hours:minutes. Both hours and minutes
have two digits, like 09:00.
Make a regex to find time in the string: Lunch at 10:10 in the room
123:456. In this task there’s no need to check time correctness yet,
so 25:99 can also be a valid result. The regex should not match
333:333.
*/
const string = 'Lunch at 10:10 in the room 123:456';
const regex = /\b\d{2}:\d{2}\b/g;
const matches = string.match(regex);
console.log(matches); // Output: ["10:10"]
