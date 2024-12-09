// MAGIC 8-BALL Practice

let actualVal = '';

let possibleVal = [
  'Don\'t think so',
  'In your dreams homie',
  'You tripping',
  'Ay, this one might happen',
  'Ehhhhh',
  'Stupid question',
  'Do you not get the concept?',
  '100%',
  'Turn up',
  'All day',
  '*sigh* I\'m just here so I won\'t get fined'
]

let randomVal = 10;
const answer = document.querySelector('.answer');

const submit = document.querySelector('.submit');

submit.addEventListener('click', () => {

  randomVal = Math.floor(Math.random() * 8);
  answer.textContent = possibleVal[randomVal];

})


// Race Day Exercise!!!!

// Race Day Prompt:
// You are organizing a running race and need to assign race numbers and start times to participants. Runners are categorized based on the following rules:

// Runners are assigned a race number:

// If they registered early, they receive a number above 1000.
// If they registered late, they receive a number below 1000.
// Start times are assigned based on the runner's age and registration status:

// Adults (18 and older) who registered early will run at 9:30 am.
// Adults who registered late will run at 11:00 am.
// Youth (under 18) run at 12:30 pm, regardless of registration.
// Write a program that assigns race numbers and start times to runners based on these rules. Use control flow (e.g., if, else if, else) and variables to determine the race number and start time for a given runner.

let age = 0;
let arrival = '';


let submitButton = document.querySelector('.submit-button')
const ageInput = document.querySelector('.age');
const arrivalInput = document.querySelector('.arrival-time');
const yourRace = document.querySelector('.your-race');

submitButton.addEventListener('click', () => {
  age = parseInt(ageInput.value);

  let timeInput = arrivalInput.value;
  arrivalTime = parseInt(timeInput.replace(":", ""), 10);

  if (isNaN(age) || isNaN(arrivalTime)) {
    alert('Please fill in both fields!');
    return;
  }

  if (arrivalTime < 930) {
    arrival = 'early';
  } else {
    arrival = 'late';
  };
  
  if (arrival === 'early' && age >= 18) {
    yourRace.textContent = 'You will run at 9:30am';
  } else if (arrival === 'late' && age >= 18) {
    yourRace.textContent = 'You will run at 11:00am';
  } else if (age < 18) {
    yourRace.textContent = 'You will run with all the other little ones at 12:30';
  } 
  
})



