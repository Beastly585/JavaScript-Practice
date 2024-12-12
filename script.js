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




// Rock Paper Scissors

let cpuMoveSet = ['paper', 'rock', 'scissors'];

let userMove = '';

let option = document.querySelectorAll('.option');

option.forEach(element => {
  element.addEventListener('click', (opt) => {
    userMove = opt.target.textContent;

    cpuMove = cpuMoveSet[Math.floor(Math.random() * 3)];

    switch(userMove) {
      case 'paper':
        if (cpuMove === 'paper') {
          console.log('retry');
        } else if (cpuMove ==='rock'){
          console.log('you win!');
        } else if (cpuMove === 'scissors') {
          console.log('try again, loser!')
        }
        break;
      case 'rock':
          if (cpuMove === 'paper') {
            console.log('try again, loser!');
          } else if (cpuMove ==='rock'){
            console.log('retry');
          } else if (cpuMove === 'scissors') {
            console.log('you win!')
          }
      break;
      case 'scissors':
          if (cpuMove === 'rock') {
            console.log('try again, loser!');
          } else if (cpuMove ==='scissors'){
            console.log('retry');
          } else if (cpuMove === 'paper') {
            console.log('you win!')
          }
      break;
    }
  })
})



// Training Days

const activities = {
  running: 30,
  cycling: 40,
  swimming: 50
}

const level = {
  beginner: 1,
  intermediate: 0.75,
  expert: 0.25
}

function getTrainingDays(act, lev) {

  if (act in activities && lev in level){
    let requiredTraining = activities[act] * level[lev];
    return 'You need ' + requiredTraining + ' days of training ' + act + ' at the ' + lev + ' level';
  } else if (!(act in activities) || !(lev in level)) {
    return 'Allowed activities: running, cycling, swimming \n Allowed levels: beginner, intermediate, expert.'
  } 
}

console.log(getTrainingDays('running', 'intermediate'));


// Secret Message Exercise - Arrays/Array Methods

const mysteryQuote = ['courage', 'the', 'with', 'change', 'accept', 'to', 'things', 'I'];

let removal = mysteryQuote.indexOf('accept');


mysteryQuote.splice(removal, 1, 'understand', 'the');

mysteryQuote.reverse();

;


console.log(mysteryQuote.join(' '));


//Birdsong Translator 

// Rules
// Only the vowels a, e, i, o, and u are stretched.
// For each vowel in the input string:
// Replace it with itself repeated 3 times.
// For example, a becomes aaa, e becomes eee.
// Ignore all other characters (non-vowels) but keep their positions intact.
// Instructions
// Write a function birdsongTranslator() that:
// Takes a string as input.
// Returns a string where all vowels are replaced as per the rules.
// Test your function with a sentence of your choice.

function birdSongTranslator(input) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let translated = '';
  let vowel = '';
  let consonant = '';

  for(let i=0; i<input.length; i++) {
    vowel = false;
    for(let j=0; j<vowels.length; j++) {
      
      if(input[i] === vowels[j]) {
        vowel = true;
      } 
    }
    vowel ? translated += input[i].repeat(3) : translated += input[i];
  }

  console.log(translated)
}

birdSongTranslator('killer')



// Exercise: Count Vowel Groups
// Write a function countVowelGroups(input) that counts how many consecutive vowel groups (a sequence of vowels) appear in the input string.

// For example:

// Input: "hello", Output: 1 (because the only vowel group is "e")
// Input: "aeiou", Output: 1 (one continuous vowel group)
// Input: "abcde", Output: 1 (only "e" is a vowel)
// Input: "apple", Output: 2 (the vowel groups are "a" and "e")
// Guidelines:
// A vowel group is a continuous sequence of vowels (e.g., "aei" is one group).
// When a new vowel group starts, increase the count.
// If a non-vowel is encountered, stop the current group and reset the flag that tracks whether you're in a group.


function vowelCounter(e) {

  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let flag = false;
  let counter = 0;
  let isVowel = [];


  //figure out which letters are vowels

  for(let i=0; i<e.length; i++) {
    flag = false;

      for(let j=0; j<vowels.length; j++) {
        if(e[i] === vowels[j]){
          flag = true;
        } 
      }

      flag ? isVowel.push('yes') : isVowel.push('no');
  }

  // I have an array telling me which letter is a vowel

  if (isVowel.every(value => value === "no")) {
    counter = 0;
    console.log(counter);
    return;
  }  
  
  if(isVowel.every(value => value === "yes")) {
    counter = 1;
    console.log(counter);
    return;
  } 
  
  for(let i=0; i<isVowel.length - 1; i++) {
    if(isVowel[i] === "yes" && isVowel[i+1] === "yes" && i===0) {
      counter = 1;
    } else if(isVowel[i-1] === "no" && isVowel[i] === "yes" && isVowel[i+1] === "yes") {
      counter++;
    }

      console.log(counter);

  }

  
}

vowelCounter('uul3eudwaaaa')