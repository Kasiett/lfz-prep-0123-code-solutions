function addTwoNumbers(num1, num2) {
  return num1 + num2;
}
var addTwoNumbersResult = addTwoNumbers(2, 2);
console.log('Add two numbers exercise: ', addTwoNumbersResult);

function convertHoursToMinutes(hour) {
  return hour * 60;
}

var convertHoursToMinutesResult = convertHoursToMinutes(2);
console.log('Convert hours to minutes exercise', convertHoursToMinutesResult);

function getGreeting(name) {
  return 'Hello ' + name;
}

var getGreetingResult = getGreeting('World!');
console.log('Get greeting exersice:', getGreetingResult);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}
var addAndMultiplyBy5Result = addAndMultiplyBy5(10, 5);
console.log('Add and multiply exercise: ', addAndMultiplyBy5Result);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}

var multiplyAndDivideBy5Result = multiplyAndDivideBy5(35, 10);
console.log('Multiply and divide by 5 exercise: ', multiplyAndDivideBy5Result);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}
var subtractTwoNumbersResult = subtractTwoNumbers(22, 7);
console.log('Subtract two numbers exercise: ', subtractTwoNumbersResult);

function getCircleCircumference(radius) {
  return 2 * (3.14 * radius);
}
var getCircleCircumferenceResult = getCircleCircumference(5);
console.log('Get circle circumference exercise: ', getCircleCircumferenceResult);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}
var getFullNameResult = getFullName('Kasiet', 'Rakhimdinova');
console.log('Get full name exercise: ', getFullNameResult);

function cube(number) {
  return (number * number) * number;
}
var cubeResult = cube(5);
console.log('cube exercise: ', cubeResult);
