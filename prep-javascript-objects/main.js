var person = {
  firstName: 'Angel',
  lastName: 'Tan',
  hobby: 'traveling',
  job: 'driver',
  previousJob: 'Photographer'
};
console.log(person, 'job => ' + person.job);

var fullName = person.firstName + ' ' + person.lastName;
console.log(fullName);

console.log("The person's name is : " + person.firstName, person.lastName + '. ' + "The person's current job is: " + person.job + '. ');
console.log('The persons previous job is: ' + person.previousJob + '.');
console.log(person);
